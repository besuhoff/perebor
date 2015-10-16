module.exports = function(grunt) {

  grunt.initConfig({

    express: {
      server: {
        options: {
          server: 'server.js',
          port: Number(process.env.PORT || 3000)
        }
      }
    },

    copy: {
       dev: {
         files: [
           {src: 'bower_components/angular/angular.js', dest:'src/js/libs/angular.js'},
           {src: 'bower_components/angular-ui-router/release/angular-ui-router.js', dest:'src/js/libs/angular-ui-router.js'},
           {src: 'bower_components/angular-translate/angular-translate.js', dest: 'src/js/libs/angular-translate.js'},
           {src: 'bower_components/angular-cookies/angular-cookies.js', dest:'src/js/libs/angular-cookies.js'}
         ]
       },
       prod: {
         files: [
           {src: 'bower_components/angular/angular.min.js', dest: 'build/js/libs/angular.js'},
           {src: 'bower_components/angular-ui-router/release/angular-ui-router.min.js', dest: 'build/js/libs/angular-ui-router.js'},
           {src: 'bower_components/angular-translate/angular-translate.min.js', dest: 'build/js/libs/angular-translate.js'},
           {src: 'bower_components/angular-cookies/angular-cookies.min.js', dest:'build/js/libs/angular-cookies.js'},
           {expand: true, cwd: 'src/', src: ['assets/**', 'js/app/**', '*'], dest: 'build/', dot: true}
         ]
       }
    },
    clean:{
      bower: ['bower_components'],
      build: ['build'],
      prod: ['.tmp', 'build/assets/css', 'build/js/app', 'build/js/templates']
    },
    notify: {
      server: {
        options: {
          message: 'Server is ready!'
        }
      }
    },
    html2js: {
      options: {
        base: 'src/',
        module: 'app-templates'
      },
      main: {
        src: ['src/js/templates/**/*.html'],
        dest: 'src/js/app/templates.js'
      }
    },
    watch: {
      templates: {
        files:['src/js/templates/**/*.html'],
        tasks: ['html2js']
      }
    },
    jshint: {
      all: ['gruntfile.js', 'src/javascript/app/**/*.js']
    },
    useminPrepare: {
      html: 'build/index.html',
      options: {
        dest: 'build'
      }
    },
    usemin: {
      html: 'build/index.html',
      options: {
        dest: 'build'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/assets/images',      // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/assets/images'    // Destination path prefix
        }]
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      generated: {
        files: {
          '.tmp/concat/js/app.min.js': ['.tmp/concat/js/app.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['start']);
  grunt.registerTask('start', ['dev']);
  grunt.registerTask('dev', ['express', 'notify', 'watch', 'express-keepalive']);
  grunt.registerTask('install:dev', ['copy:dev', 'html2js', 'clean:bower']);
  grunt.registerTask('install:prod', ['copy:prod', 'html2js', 'clean:bower']);
  grunt.registerTask('build', ['clean:build', 'install:prod', 'useminPrepare', 'concat:generated', 'ngAnnotate:generated', 'uglify:generated', 'cssmin:generated', 'usemin', 'imagemin', 'clean:prod']);
};
