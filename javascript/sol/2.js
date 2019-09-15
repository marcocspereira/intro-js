var john = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same BMI");
}

// or

function Person() {
  var fullName;
  var mass;
  var height;
  var bmi;

  function calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }

  return {
    calcBMI: calcBMI
  };
}

// then
var mark = Person();
var john = Person();
mark.name = "Mark";
mark.mass = 78;
mark.height = 1.69;
john.name = "John";
john.mass = 110;
john.height = 1.95;
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);
