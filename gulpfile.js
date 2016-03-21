var gulp = require('gulp');
var elixir = require('laravel-elixir');
var bowerPath = '../vendor';
var compiledCssPath = '../../css';


// elixir.config.production = true; // enable it in production - to minify css automatically
elixir.config.assetsPath = 'source/_assets';
elixir.config.publicPath = 'source';

elixir(function(mix) {
    // Fonts copy from bower directory
    mix.copy('source/_assets/vendor/font-awesome/fonts/', 'source/fonts');

    // Main SCSS task - compiles to CSS
    mix.sass('main.scss');        
    
    // Bower and static CSS - path should be given relative to source/_assets/css directory
    mix.styles([
        bowerPath + '/tether/dist/css/tether.css',
        bowerPath + '/bootstrap/dist/css/bootstrap.css',
        bowerPath + '/font-awesome/css/font-awesome.css',
        compiledCssPath + '/main.css'
    ], 'source/css/app.css');

    // Javascript concat and minify - path should be given relative to source/js directory
    mix.scripts([
        bowerPath + '/jquery/dist/jquery.js',
        bowerPath + '/tether/dist/js/tether.js',            
        bowerPath + '/bootstrap/dist/js/bootstrap.js',            
        bowerPath + '/vue/dist/vue.js',            
        bowerPath + '/vueboot/dist/vueboot.js',            
        'app.js'
    ], 'source/js/app.js');

    mix.exec('./vendor/bin/jigsaw build', ['./source/**/*', '!./source/_assets/**/*']);

    // Browsersync server task
    mix.browserSync({
        files: [
            'build_local/css/*.css',      // This is the one required to get the CSS to inject
            'build_local/**/*.html'       // Watch the views for changes & force a reload
        ],
        proxy: 'example.com',
        port: 3002
    });
});
