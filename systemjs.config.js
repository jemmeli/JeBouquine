(function (global) {
    var paths = {
        // paths serve as alias
        'npm:': 'node_modules/'
    }
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'npm:@angular',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'rxjs': 'npm:rxjs'
    };

    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'},
    };


    var ngPackageNames = ['common', 'compiler', 'core', 'http', 'forms', 'platform-browser', 'platform-browser-dynamic', 'router', 'router-deprecated', 'upgrade',];
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    });
    var config = {paths: paths, map: map, packages: packages}
    System.config(config);
})(this);