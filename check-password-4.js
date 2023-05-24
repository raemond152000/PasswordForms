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

}

function mouseoutPass() {
  let text = document.getElementById("pswrd").value;
  
  
  
  let reg = /.{1,7}/;
  let emptyStr = "";
  let userInput = text;
  
  
  emptyStr = userInput;

  document.getElementById("pswrd").value = emptyStr.replace(reg, (m) =>
    "*".repeat(m.length))
  
  
}

function myReplace() {
  var ele = document.getElementById("test");
  var str = ele.innerHTML;
  ele.setAttribute('data-orig', str);
  var res = str.replace("O", "!").replace("E", "#")
    .replace("T", "%").replace("N", "&");
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
