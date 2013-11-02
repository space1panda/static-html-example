module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: ['app/foo.js', 'app/bar.js'],
        dest: 'js/app.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
}