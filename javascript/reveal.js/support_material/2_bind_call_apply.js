/***************************
 * FUNÇÕES SIMPLES
 ***************************/
function compose(prefix, suffix) {
  console.log(prefix + " " + this + " " + suffix);
}

// create a new function with a statically set this argument
var compose2 = compose.bind("Rui");
compose2("Hello", "!");

// call an existing function with an explicitely provided this argument
compose.call("Zé", "Hello", "!"); // passing arguments as usual
compose.apply("Zé", ["Hello", "!"]); // passing arguments as an array

/***************************
 * OBJECTOS
 ***************************/

// um objecto simples
var ze = {
  name: "Zé",
  age: 30,
  job: "teacher",
  /**
   * método que apresenta o zé:
   * - de uma forma formal ou friendly
   * - dependente da altura do dia
   */
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentleman! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};
ze.presentation("formal", "night");
ze.presentation("firendly", "morning");

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

/**********
 * CALL
 * - also called method borrowing
 * - because we actually borrowed the method from John
 *   to use it on Emily object
 **********/
john.presentation.call(emily, "friendly", "night");

/**********
 * APPLY
 * - same as CALL, but arguments as an array
 * - No caso não vai trabalhar porque o método não aceita
 *   array como parametro de entrada. Fica a nota
 **********/
john.presentation.call(emily, ["friendly", "night"]);

/**********
 * BIND
 * - very similar to CALL method
 * - Allows to set this variable explicitly
 * - a diferença é que o BIND não chama imediatamente a função,
 *   fazendo, ao invés disso, uma cópia da função
 * - Permite também estabelecer parametros pré-definidos
 **********/
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(john, "formal");
emilyFormal("morning");
emilyFormal("night");

/***********************
 * OTHER EXAMPLE
 * - utilizar o bind para outro exemplo
 *   de função com valores pré-definidos
 ***********************/

var years = [1990, 1965, 1937, 1998, 2006];

function arrayCalc(arr, fn) {
  return arr.map(function(element) {
    return fn(element);
  });
  // or
  /* var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes; */
}

function calculateAge(element) {
  return 2019 - element;
}

function isFullAge(limit, element) {
  return element >= limit;
}

// use bind to pre-set default values for isFullAge
var ages = arrayCalc(years, calculateAge);
var fullPortugal = arrayCalc(ages, isFullAge.bind(this, 18));
console.log(ages);
console.log(fullPortugal);
