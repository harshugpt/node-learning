counter = function (num) {
  return "This is a counter function which return count equals" + (num + 2);
};

adder = function (a, b) {
  return `this is a adder function returns ${a + b}`;
};
pi = 3.14;

//module.exports.counter = counter;
//module.exports.adder = a
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
