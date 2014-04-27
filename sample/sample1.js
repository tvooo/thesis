'use strict';

var fs = require('fs'),
    http = require('http');

fs.readFile('test.md', function(content) {
  console.log(content);
});

