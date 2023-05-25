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



function sinStore() {
  
  var ele = document.getElementById("pswrd");
  var str = ele.value;
  let text = document.getElementById("pswrd").value;
  /* ele.setAttribute('data-orig', str);
  
  
  let reg = /.{1,7}/;
  let emptyStr = "";
  let userInput = text;
  
  
  emptyStr = userInput;

  document.getElementById("pswrd").value = emptyStr.replace(reg, (m) =>
    "*".repeat(m.length)
  ); */
  
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
 
  var ele = document.getElementById("test");
  var str = ele.getAttribute('data-orig');
  ele.innerHTML = str;
  
  /* var ele = document.getElementById("pswrd");
  var str = ele.getAttribute('data-orig');
  ele.value = str;
  document.getElementById("demo").innerText = str; */

  /* let text = document.getElementById("pswrd").value;
  
  
  let reg = /.{1,7}/;
  let emptyStr = "";
  let userInput = text;
   
  emptyStr = userInput;
  document.getElementById("pswrd").value = emptyStr.replace(reg, (m) =>
    "*".repeat(m.length)) */

  var ele = document.getElementById("pswrd");
  var str = ele.getAttribute('data-orig');
  document.getElementById("pswrd").value = str;

}

function mouseoutPass() {
  let reg = /.{1,7}/;
  let ele = document.getElementById("pswrd");
  var str = ele.value;
  /* alert(ele.value) */
  ele.setAttribute('data-orig', str);
  
  
  /* let emptyStr = "";
  let userInput = text;
  
  
  emptyStr = userInput; */

  var res = str.replace(reg, (m) =>
    "*".repeat(m.length))
  
    document.getElementById("pswrd").value = res;
}

function myReplace() {
  let reg = /.{1,22}/;
  var ele = document.getElementById("test");
  var str = ele.innerHTML;
  ele.setAttribute('data-orig', str);
  var res = str.replace(reg, (m) =>
  "*".repeat(m.length))
  ele.innerHTML = res;
}

function myRestore() {
  var ele = document.getElementById("test");
  var str = ele.getAttribute('data-orig');
  ele.innerHTML = str;
}

/* let reg = /.{1,5}/
let string = '123456789';
let string2 = '123';
console.log(string.replace(reg, (m) => "X".repeat(m.length))); */
function createstars(n) {
  return new Array(n+1).join("*")
}

/* function validateSinNumber(sinNumber) {
  // Remove any non-digit characters from the SIN
  sinNumber = sinNumber.replace(/\D/g, '');

  // Check if the SIN is the correct length
  if (sinNumber.length !== 9) {
    return false;
  }

  // Convert the SIN string to an array of digits
  var sinDigits = sinNumber.split('').map(Number);

  // Calculate the sum of the digits at odd positions (1, 3, 5, 7)
  var sum = sinDigits[0] + sinDigits[2] + sinDigits[4] + sinDigits[6];

  // Double the value of each digit at even positions (0, 2, 4, 6) and sum their digits
  for (var i = 1; i <= 7; i += 2) {
    var doubledDigit = sinDigits[i] * 2;
    sum += Math.floor(doubledDigit / 10) + (doubledDigit % 10);
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
} */


/* $(document).ready(function() {

    var timer = "";
  
    $(".panel").append($('<input type="text" class="hidpassw" />'));
  
    $(".hidpassw").attr("name", $(".pass").attr("name"));
  
    $(".pass").attr("type", "text").removeAttr("name");
  
    $("body").on("keypress", ".pass", function(e) {
      var code = e.which;
      if (code >= 32 && code <= 127) {
        var character = String.fromCharCode(code);
        $(".hidpassw").val($(".hidpassw").val() + character);
      }
  
  
    });
  
    $("body").on("keyup", ".pass", function(e) {
      var code = e.which;
  
      if (code == 8) {
        var length = $(".pass").val().length;
        $(".hidpassw").val($(".hidpassw").val().substring(0, length));
      } else if (code == 37) {
  
      } else {
        var current_val = $('.pass').val().length;
        $(".pass").val(createstars(current_val - 1) + $(".pass").val().substring(current_val - 1));
      }
  
      clearTimeout(timer);
      timer = setTimeout(function() {
        $(".pass").val(createstars($(".pass").val().length));
      }, 200);
  
    });
  
  }); */
