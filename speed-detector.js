
const prompt = require('prompt-sync')();
// Prompt the user to input the speed
function speedDetector() {
    let speed = prompt("Enter the speed of the car (in km/h): ");
    // Convert the input to a number
    speed = Number(speed);

    // Validate the input
    if (speed < 0 || isNaN(speed)) {
        console.log("Please enter a valid speed.");
        return;
    }

    const speedLimit = 80;
    const kmPerDemeritPoint = 5;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
// Call the function to run the speed detector
speedDetector();
