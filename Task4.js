console.log(
    "Email validation "
  );

  var inputtxt = prompt("enter Email ");
  var passw = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputtxt.match(passw)) {
    console.log(inputtxt+" :Correct email");
  } else {
    console.log(inputtxt+": Wrong. Email");
  }
  