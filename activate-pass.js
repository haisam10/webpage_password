
var validPasswords = ["haisam", "T4CG-DJH7-V2WF-Y4X9", "XAT7-W4PT-2VBM-Q5ER","JDH7-V2WF-DYX9-CFC6"]; // Add your valid passwords here
var s = "";

while (!validPasswords.includes(s)) {
  s = prompt("Enter the activation code");
  if (validPasswords.includes(s)) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect password - Try again");
  }
}

