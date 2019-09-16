/***********************
 * BASIC EXAMPLE
 ***********************/

function buildContor(i) { 
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    };
    return displayContor; 
  }
  
  var myContor = buildContor(1);
  myContor(); // 1
  myContor(); // 2
  myContor(); // 3
  
  // new closure - new outer scope - new contor variable
  var myOtherContor = buildContor(10);
  myOtherContor(); // 10 
  myOtherContor(); // 11
  
  // myContor was not affected 
  myContor(); // 4

  
  
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
    var private_contor = 0;
    return {
        get: function () {
            return "Contor: " + private_contor;
        },
        increment: function() {
            private_contor++;
        }
    };
}();  // Attention Here - the singleton is the result of this function's call

console.log(singleton.get());
console.log(singleton.get());

singleton.increment();
console.log(singleton.get());
singleton.increment();
console.log(singleton.get());