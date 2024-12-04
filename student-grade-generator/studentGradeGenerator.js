// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate student grades
function generateGrade() {
    // Prompt the user to input the student marks
    rl.question("Enter student marks (between 0 and 100): ", (input) => {
        // Convert the input to a number
        let marks = Number(input);

        // Validate the input
        if (marks < 0 || marks > 100 || isNaN(marks)) {
            console.log("Please enter valid marks between 0 and 100.");
            rl.close();
            return;
        }

        // Determine the grade based on marks.
        let grade;
        if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Output the grade
        console.log(`Grade: ${grade}`);
        rl.close(); // Close the readline interface
    });
}

// Call the function to generate the grade
generateGrade();
