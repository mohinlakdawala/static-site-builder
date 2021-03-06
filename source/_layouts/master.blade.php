<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        @yield('plugin-styles')
        <link rel="stylesheet" href="/css/app.css">
    </head> 
    <body>
        @include ('_partials/header')  
        @yield('body')
        <script type="text/javascript" src="/js/app.js"></script>
        @yield('plugin-scripts')
        @include('_partials/footer')
    </body>
</html>
