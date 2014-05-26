/*
  server-example.js

  Example JavaScript file to run on NodeJS.

  This program executes a couple of tasks asynchronously with callback
  functions: open a server, get a connection, open a markdown file,
  compiling to HTML, opening a template, filling in metadata.
*/


var fs = require('fs'),
    http = require('http'),
    marked = require('meta-marked'),
    handlebars = require('handlebars');

function parseMarkdown( cb ) {
  fs.readFile( 'article.md', function( err, data ) {
    if ( err ) {
      return cb( err );
    }

    var text = marked( data.toString() );
    cb( null, text );
  });
}

function compileHtml( text, cb ) {
  fs.readFile( 'template.html', function( err, data ) {
    if ( err ) {
      return cb( err );
    }

    var template = handlebars.compile( data.toString() );
    cb( null, template({
      meta: text.meta,
      content: text.html
    }) );
  });
}

var server = http.createServer( function( req, res ) {
  parseMarkdown( function( err, data ) {
    compileHtml( data, function( err, data ) {
      res.end( data );
    });
  } );
});

server.listen( 12345 );
