
module.exports = function(grunt) {

  grunt.initConfig({ // Qui setterai i plugin

    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'sass/style.css' : 'sass/style.scss'
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css/min',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: false // <-
        }
      },
      my_target: {
        files: [{
          'js/output.min.js' : ['js/jsScript.js' ]
        }]
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },

  });
  //inizializzi
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  //definisci
  grunt.registerTask('default',['watch', 'sass', 'cssmin', 'uglify']);
};
