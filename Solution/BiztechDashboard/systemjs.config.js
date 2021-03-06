/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
      //moment
      'moment': 'npm:moment/min/moment.min.js',
      //kekeh datepicker
      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js',
      //ngx-pagination
      'ngx-pagination': 'npm:ngx-pagination/dist/ngx-pagination.umd.js',
      'ng2-datetime-picker': 'npm:ng2-datetime-picker/dist',
        //ngx-bootstrap 
      'ngx-bootstrap':'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',
      //'ngx-bootstrap': 'npm:ngx-bootstrap',
        //material
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      'hammerjs': 'npm:hammerjs/hammer.min.js',
        
        //spinner
      'ng2-component-spinner': 'node_modules/ng2-component-spinner/dist',
      // other libraries
      'rxjs':                      'npm:rxjs',
      //'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-datetime-picker': {
          main: 'ng2-datetime-picker.umd.js',
          defaultExtension: 'js'
      },
      'ng2-component-spinner': {
          defaultExtension: 'js',
          main: 'index.js'
      }
    }
  });
})(this);
