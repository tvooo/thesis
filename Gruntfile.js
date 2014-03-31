/*
 * grunt-latex
 * https://github.com/tvooo/grunt-latex
 *
 * Copyright (c) 2013 Tim von Oldenburg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    sourceFile: 'thesis.tex',
    latex: {
      pdf: {
        src: [ '<%= sourceFile %>' ],
        options: {
          auxDirectory: 'tmp',
          engine: 'xelatex'
        }
      }
    },
    watch: {
      latex: {
        files: [ '<%= sourceFile %>' ],
        tasks: [ 'latex' ]
      }
    },
    clean: {
      aux: ['tmp']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['watch:latex']);

};
