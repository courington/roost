module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {

    },
    connect: {
      dev: {
        options: {
          base: ['prod', 'src', '.'],
          port: 8000,
          hostname: '*',
        }
      },
    },
    copy: {

    },
    jshint: {

    },
    watch: {
      jshintrc: {
        files: ['**/.jshintrc'],
        tasks: ['jshint'],
      },
      jshintrc: {
        files: ['<%= jshint.app.src %>'],
        tasks: ['jshint:app'],
      }
    },
  });

  // Default task(s).
  grunt.registerTask('default', []);

  // example of creating custom task in grunt
  // grunt.registerTask('server', 'start the REST server', function() {
  //   require('./server/server');
  //   grunt.task.run('connect:' + this.args.join(':'));
  // });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // loads external task files in build folder
  // can remove grunt.loadNpmTasks for each task that has been broken out
  // grunt.loadTasks('build');

};