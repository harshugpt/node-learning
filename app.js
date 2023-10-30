/*var stuff = require("./stuff");

console.log(stuff.counter(5));
console.log(stuff.adder(2, 4));
*/

//event emitter
/*
var events = require("events");

var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function (mssg) {
  console.log(mssg);
});

myEmitter.emit("someEvent", "the event was emitted");
*/
//adding custom event emitter to the object constructor

var events = require("events");
var util = require("util");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var harsh = new Person("harsh");
var harshu = new Person("harshu");
var harshi = new Person("harshi");

var people = [harsh, harshu, harshi];

people.forEach(function (person) {
  person.on("speak", function (mssg) {
    console.log(person.name + "says:" + mssg);
  });
});

harsh.emit("speak", "hello");
