//To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
let form = document.getElementById("form1");
let myPassword = {};

function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputtxt.value.match(decimal)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }
}

form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "lightblue";
  },

  true
);


function passwordMask() {
  let text = document.getElementById("pswrd").value;
  /* document.getElementById("demo").innerHTML = "You wrote: " + text; */
  let reg = /.{1,7}/;
  let emptyStr = "";
  let userInput = text;
   /* myPass.store = text; */
  emptyStr = userInput;

  document.getElementById("pswrd").value = emptyStr.replace(reg, (m) =>
    "*".repeat(m.length)
  );
}

function toggleVisibility() {
  var getPasword = document.getElementById("pswrd");
  if (getPasword.type === "password") {
    getPasword.type = "text";
  } else {
    getPasword.type = "password";
  }
}

function mouseoverPass() {
  let obj = document.getElementById("pswrd");
  obj.type = "text";
  document.getElementById("demo").innerText = obj.value;
  alert(myPassword.store)
}

function mouseoutPass() {
  let obj = document.getElementById("pswrd");
  obj.type = "text";
  
}

/* let reg = /.{1,5}/
let string = '123456789';
let string2 = '123';
console.log(string.replace(reg, (m) => "X".repeat(m.length))); */
