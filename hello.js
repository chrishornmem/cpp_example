// hello.js
const addon = require('./build/Release/addon');
const addon2 = require('./build/Release/addon2');

console.log(addon.hello());
console.log(addon2.hello2());
// Prints: 'world'