var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('clicked', function(button) {
    console.log(button + ' is clicked!');
})
eventEmitter.on('clicked', function(button) {
    console.log(button + ' is clicked 222222!');
})   

eventEmitter.emit('clicked', 'button 1');


// var events = require('events');
// var util = require('util');

// function Students(name) {
//     this.name = name;
// }

// util.inherits(Students, events.EventEmitter);

// var max = new Students('max');

// max.on('scored', function(marks) {
//    console.log(max.name + ' scores '+ marks+ ' marks');
// })

// max.emit('scored', 95);

// var tom = new Students('tom');

// tom.on('scored', function(marks) {
//    console.log(tom.name + ' scores '+ marks+ ' marks');
// })

// tom.emit('scored', 60);
