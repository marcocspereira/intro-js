// rewrite this with closures

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
teacherQuestion("John");
designerQuestion("John");
designerQuestion("jane");
designerQuestion("Mark");
designerQuestion("Mike");
interviewQuestion("teacher")("Mark");

let person = {
  name: "Rui",
  greeting: `Hello ${name}!`,
  delayedHello(delay) {
    setTimeout(function() {
      console.log(this.greeting);
    }, delay);
  }
};

person.delayedHello(1000);

let person = {
  name: "Rui",
  greeting: `Hello ${name}!`,
  delayedHello(delay) {
    (function(greeting) {
      setTimeout(function() {
        console.log(greeting);
      }, delay);
    })(this.greeting);
  }
};

person.delayedHello(1000);
