/*var stuff = require("./stuff");

console.log(stuff.counter(5));
console.log(stuff.adder(2, 4));
*/

//event emitter

var events = require("events");

var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function (mssg) {
  console.log(mssg);
});

myEmitter.emit("someEvent", "the event was emitted");
