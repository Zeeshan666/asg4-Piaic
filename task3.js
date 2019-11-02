document.write(
  "password validation :only  contain number and letters but string length fix 8 char"
);

var inputtxt = prompt("enter paswrd ");

var passw = /^[A-Za-z]\w{7}$/;
if (inputtxt.match(passw)) {
console.log(inputtxt+": Correct");
} else {
  console("Wrong...!For Paswrd must start with letter and fixed length is 8");
}
