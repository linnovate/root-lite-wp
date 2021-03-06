
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': baseUrl + 'node_modules/',
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: [(baseUrl + 'dist')],
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/material': 'npm:@angular/material/material.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'ng2-file-upload': 'npm:ng2-file-upload',
      '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
      '@angular2-material/card': 'npm:@angular2-material/card/card.umd.js',
      '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',
      '@angular2-material/icon': 'npm:@angular2-material/icon/icon.umd.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',

      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-file-upload': {
        main: './ng2-file-upload.js',
        defaultExtension: 'js'
      }
    }
  });
  System.import(baseUrl + 'dist/main.js')
.then(null, console.error.bind(console));
})(this);


