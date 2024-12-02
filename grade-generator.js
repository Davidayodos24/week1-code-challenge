const prompt = require('prompt-sync')();

function gradeGenerator() {
    // Prompt the user to input marks
    let marks = prompt("Enter student marks (between 0 and 100): ");

    // this part converts input to a number
    marks = Number(marks);

    // this phase waits for the grade input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please enter a valid number between 0 and 100.");
        return;
    }

    // then this code phase checks the grade
    let grade;
    if (marks > 80) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`The grade for marks ${marks} is: ${grade}`);
}

gradeGenerator();
