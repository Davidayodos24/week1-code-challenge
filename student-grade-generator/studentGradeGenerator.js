
// Import prompt-sync module to handle user input
const prompt = require('prompt-sync')();

// Function to generate student grades
function generateGrade() {
    // Prompt the user to input the student marks
    let marks = prompt("Enter student marks (between 0 and 100): ");
    
    // Convert the input to a number
    marks = Number(marks);

    // Validate the input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please enter valid marks between 0 and 100.");
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
}

// Call the function to generate the grade
generateGrade();
