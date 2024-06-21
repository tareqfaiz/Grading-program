document.getElementById("myButton").addEventListener("click", function() {
   var marks = parseInt(prompt("What is your marks in IT?"));
   if (isNaN(marks)) {
     alert("Invalid input! Please enter a number.");
   } else if (marks >= 80) {
     alert("Congratulations! You got A+");
   } else if (marks >= 70) {
     alert("You got A");
   } else if (marks >= 60) {
     alert("You got A-");
   } else if (marks >= 50) {
     alert("You got B");
   } else if (marks >= 40) {
     alert("You got C");
   } else {
     alert("You have failed and try hard study to pass again! Good Luck!");
   }
 });