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
    var a;
    for( var i = 0; ; ) {
      
    }

    var c;

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
