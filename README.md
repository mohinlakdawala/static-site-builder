# Static site builder

Based on [Jigsaw static site generator](https://github.com/tightenco/jigsaw)

To get started run the following commands:

```bash
 composer install
 npm install 
 bower install
```

This should bring in all the dependencies.

Once this is done, run the following commands to build the project.

```bash
  gulp
  ./vendor/bin/jigsaw build
```

Once this command is run, you should be able to see build_local folder. Set your document root to this folder for development.

To start the development server with live-reload, run the following command. Update the proxy URL (if needed) in the gulpfile.js

```bash
  gulp watch
```

Added the following dependencies:

 * Laravel elixir for gulpfile management
 * SCSS
 * Browsersync for live reloading
 * [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
 * Font-awesome
 * [Vue](https://vuejs.org)
 * [Vueboot](http://morgul.github.io/vueboot/)