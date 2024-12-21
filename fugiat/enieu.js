function executeWithDelay(callback, delay, time) {
    setTimeout(function() {
        callback(time);
    }, delay);
}

function myFunction(time) {
    console.log("Executed after delay with time: " + time);
}

let delay = 3000; // Delay in milliseconds (3 seconds)
let time = new Date().toLocaleTimeString(); // Pass the current time as a string

executeWithDelay(myFunction, delay, time);
