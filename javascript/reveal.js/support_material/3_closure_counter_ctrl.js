/***********************
 * BASIC EXAMPLE
 ***********************/

function buildCounter(i) { 
    var counter = i;
    var displayCounter = function() {
        console.log(counter);
        counter++;
    };
    return displayCounter; 
  }
  
  var myCounter = buildCounter(1);
  myCounter(); // 1
  myCounter(); // 2
  myCounter(); // 3
  
  // new closure - new outer scope - new counter variable
  var myOtherCounter = buildCounter(10);
  myOtherCounter(); // 10 
  myOtherCounter(); // 11
  
  // myCounter was not affected 
  myCounter(); // 4

  
  
/***********************
 * STORE PRIVATE DATA
 ***********************/
function initializeData() {
    var myVar = 1; 
    return { 
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
            myVar = v;
        }
    };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string


/***********************
 * SINGLETON
 ***********************/
var singleton = function () {
    var private_counter = 0;
    return {
        get: function () {
            return "Counter: " + private_counter;
        },
        increment: function() {
            private_counter++;
        }
    };
}();  // Attention Here - the singleton is the result of this function's call

console.log(singleton.get());
console.log(singleton.get());

singleton.increment();
console.log(singleton.get());
singleton.increment();
console.log(singleton.get());


/*******************************
 * slide 27
 *******************************/

 /****
 * PROBLEMA do slide 3.27
 ****/
	
var funcs = [];
for (var i = 0; i < 3; i++) {
  // push will create new execution context with reference to i
  funcs.push(function() {
    console.log(i);
  });
}
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

/****
 * SOLUÇÃO do slide 3.27
 ****/

// Push will create new execution context with reference to i

// Criar uma função anónima que aceita o i como param e e retorna essa função

var funcs = [];
for (var i = 0; i < 3; i++) {
    // push will create new execution context with reference to i
    funcs.push((function(i) {
        return function() {
            console.log(i);
        }
    })(i));
}

funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2