$(function() {
    var activeScope = null;
    var oldScope = null;

    function selectorToScope( selector ) {
        var s = "GLOBAL";
        if ( selector === "scope-parsemarkdown") {
            s = "parseMarkdown";
        }
        if ( selector === "scope-parsemarkdown-anon") {
            s = "parseMarkdown-anon";
        }
        if ( selector === "scope-compilehtml") {
            s = "compileHtml";
        }
        if ( selector === "scope-compilehtml-anon") {
            s = "compileHtml-anon";
        }
        if ( selector === "scope-anon") {
            s = "anon";
        }
        if ( selector === "scope-anon-anon") {
            s = "anon-anon";
        }
        if ( selector === "scope-anon-anon-anon") {
            s = "anon-anon-anon";
        }
        return s;
    }

    function highlight( scope, temp ) {
        var cl = temp ? 'highlight-temp' : 'highlight';

        $('.scope-global').removeClass( cl );
        $('.scope-parsemarkdown').removeClass( cl );
        $('.scope-parsemarkdown-anon').removeClass( cl );
        $('.scope-compilehtml').removeClass( cl );
        $('.scope-compilehtml-anon').removeClass( cl );
        $('.scope-anon').removeClass( cl );
        $('.scope-anon-anon').removeClass( cl );
        $('.scope-anon-anon-anon').removeClass( cl );
        if ( scope ) {
            $('.scope-' + scope.toLowerCase()).addClass( cl );
        }
    }

    function noscope() {
        var i, name, partial;
        highlight( activeScope, false );

        $('.vars').hide();
        $('.vars-' + activeScope.toLowerCase()).show();

        var path = activeScope.split('-');
        $('.statusbar').empty();
        $('.statusbar').append('<span class="scope-global">GLOBAL</span>');

        for( i = 0; i < path.length; i++ ) {
            partial = path.slice(0, i + 1);
            el = partial.join('-');
            name = partial[i] + "()";
            if(name === "anon") {
                name = "(anon)";
            }

            if(partial[i] !== "GLOBAL") {
                $('.statusbar').append('<span class="scope-' + el.toLowerCase() + '">' + name + '</span>');
            }
        }

        if ( path.length === 2 ) {
            $('.vars-' + path[0].toLowerCase()).show();
        }
        if ( path.length === 3 ) {
            $('.vars-' + path[0].toLowerCase() + '-' + path[1].toLowerCase()).show();
            $('.vars-' + path[0].toLowerCase()).show();
        }

        if ( activeScope === "anon-anon-anon") {
            $('.vars-anon-anon').addClass("shadowed");
        } else {
            $('.vars-anon-anon').removeClass("shadowed");
        }
    }

    $(document).on('click', '.scope-global', function() {
        activeScope = "GLOBAL";
        noscope();
    });

    $(document).on('click', '.scope-parsemarkdown', function() {
        activeScope = "parseMarkdown";
        noscope();

    });

    $(document).on('click', '.scope-parsemarkdown-anon', function() {
        activeScope = "parseMarkdown-anon";
        noscope();

    });

    $(document).on('click', '.scope-compilehtml', function() {
        activeScope = "compileHtml";
        noscope();

    });

    $(document).on('click', '.scope-compilehtml-anon', function() {
        activeScope = "compileHtml-anon";
        noscope();

    });

    $(document).on('click', '.scope-anon', function() {
        activeScope = "anon";
        noscope();

    });

    $(document).on('click', '.scope-anon-anon', function() {
        activeScope = "anon-anon";
        noscope();

    });

    $(document).on('click', '.scope-anon-anon-anon', function() {
        activeScope = "anon-anon-anon";
        noscope();
    });

    $(document).on('mouseover', '.statusbar span', function() {
        highlight( this.className.slice(6), true );
    }).on('mouseout', '.statusbar span', function() {
        highlight( null, true );
    });

    activeScope = "GLOBAL";
    noscope();
});
