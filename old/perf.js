var start = new Date().getTime();

function top() {
  var n = 3;
  var counter = 0;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            for(var i = 0; i < 1000; i++) {
              for(var j = 0; j < 1000; j++) {
                for(var k = 0; k < 1000; k++) {
                  counter += n;
                }
              }
            }
          })();
        })();
      })();
    })();
  })();
  console.log("Counter: ", counter, " n: ", n);
}


top();
var end = new Date().getTime();
var diff = end - start;
console.log('Total time: ' + diff + ' milliseconds');
