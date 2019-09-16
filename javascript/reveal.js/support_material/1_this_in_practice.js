// 1
console.log(this);
// imprime o objecto window (global)

// 2
function calculateAge(year) {
  console.log(2019 - year);
  console.log(this);
}
/**
 * imprime 33 e o objecto window (global).
 * Porque é uma regular function call.
 */

// 3
var ze = {
  name: "Zé",
  yearOfBirth: 1986,
  calculateAge: function() {
    console.log(this);
  }
};
ze.calculateAge();
/**
 * Imprime Object(name: 'Zé', yearOfBirth: 1986)
 * É o objecto ze que chamou o método
 */

// 4
var ze = {
  name: "Zé",
  yearOfBirth: 1986,
  calculateAge: function() {
    console.log(this);

    function inner() {
      console.log(this);
    }
    inner();
  }
};
ze.calculateAge();
/**
 * Imprime Object(name: 'Zé', yearOfBirth: 1986)
 * - É o Object ze para primeiro print
 * - E depois o objecto window (global) porque é um regular function,
 *   apesar de ser dentro de um objecto.
 */
