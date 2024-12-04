const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateNetSalary() {
  rl.question("Enter basic salary: ", (basicSalaryInput) => {
    let basicSalary = parseFloat(basicSalaryInput);

    rl.question("Enter benefits: ", (benefitsInput) => {
      let benefits = parseFloat(benefitsInput);

      // Validate inputs to ensure they are non-negative numbers
      if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Please enter valid non-negative numbers for salary and benefits.");
        rl.close(); // Exit the readline interface
        return; // Exit the function if input is invalid
      }

      // Calculate gross salary by adding basic salary and benefits
      let grossSalary = basicSalary + benefits;

      // Calculate PAYE (Tax) based on gross salary
      let paye;
      if (grossSalary <= 24000) {
        paye = grossSalary * 0.1; // 10% tax for salaries up to 24,000
      } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25; // 25% tax for salaries between 24,001 and 32,333
      } else {
        paye = 4483.25 + (grossSalary - 32333) * 0.3; // 30% tax for salaries above 32,333
      }

      // Calculate NHIF Deductions based on gross salary
      let nhif;
      if (grossSalary <= 5999) nhif = 150;
      else if (grossSalary <= 7999) nhif = 300;
      else if (grossSalary <= 11999) nhif = 400;
      else if (grossSalary <= 14999) nhif = 500;
      else if (grossSalary <= 19999) nhif = 600;
      else if (grossSalary <= 24999) nhif = 750;
      else if (grossSalary <= 29999) nhif = 850;
      else if (grossSalary <= 34999) nhif = 900;
      else if (grossSalary <= 39999) nhif = 950;
      else if (grossSalary <= 44999) nhif = 1000;
      else if (grossSalary <= 49999) nhif = 1100;
      else if (grossSalary <= 59999) nhif = 1200;
      else if (grossSalary <= 69999) nhif = 1300;
      else if (grossSalary <= 79999) nhif = 1400;
      else if (grossSalary <= 89999) nhif = 1500;
      else if (grossSalary <= 99999) nhif = 1600;
      else nhif = 1700;

      // Fixed NSSF deduction
      let nssf = 200;

      // Calculate total deductions
      let totalDeductions = paye + nhif + nssf;

      // Calculate net salary
      let netSalary = grossSalary - totalDeductions;

      // Output the results
      console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
      console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
      console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
      console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
      console.log(`Total Deductions: ${totalDeductions.toFixed(2)}`);
      console.log(`Net Salary: ${netSalary.toFixed(2)}`);

      rl.close(); // Close the readline interface
    });
  });
}

// Call the function to calculate the net salary
calculateNetSalary();
