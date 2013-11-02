module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: ['app/foo.js', 'app/bar.js'],
        dest: 'js/app.js'
      }
    },
    jshint: {
      dev: ['app/**/*.js']
    },
    uglify: {
      dev: {
        src: 'js/app.js',
        dest: 'js/app.min.js'
      }
    },
    watch: {
      dev: {
        files: ['app/**/*.js'],
        tasks: ['jshint', 'concat']
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          base: '.',
          port: 3000
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('server', ['connect', 'watch'])
  grunt.registerTask('default', ['jshint','concat']);
}