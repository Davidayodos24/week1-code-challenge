const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to detect car speed and calculate demerit points
function speedDetector() {
    // Prompt the user to input the speed of the car
    rl.question("Enter the speed of the car (in km/h): ", (input) => {
        let speed = Number(input);

        // Validate the input.
        if (speed < 0 || isNaN(speed)) {
            console.log("Please enter a valid speed.");
            rl.close();
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

        // Close the readline interface
        rl.close();
    });
}

// Call the function to run the speed detector
speedDetector();
