"use strict";
function greet(name, date) {
    console.log(`halo ${name}, today is ${date.toDateString()}`);
}
greet("jono", new Date());
