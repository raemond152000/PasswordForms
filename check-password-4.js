
let form = document.getElementById("form1");

//creates a delay to correct input elements
function mask(o, f) {
  setTimeout(function () {
      var v = f(o.value);
      if (v != o.value) {
          o.value = v;
      }
  }, 1);
}

//formats sin number
function numHyphen(v) {
  var r = v.replace(/\D/g,""); //sanitize non numeric characters
  
  if (r.length > 9) {
      r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
  return r;
  }
  else if (r.length > 4) {
      r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
  }
  else if (r.length > 2) {
      r = r.replace(/^(\d\d\d)(\d{0,3})/,"$1-$2");
  }
  else {
      r = r.replace(/^(\d*)/, "$1");
  }
  
  return r;
}
/* // SIN input valdation restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter, errMsg) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
    "focusout",
  ].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  })
}

// Install input filters. 
setInputFilter(
  document.getElementById("sin"),
  function (value) {
    return /^[\d-]+$/.test(value);  //allows number and hyphen symbol masked by function numHyphen
  },
  "Must be a number"
); */

/* form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "lightblue";
  },

  true
); */

/* function sinStore() {
  var ele = document.getElementById("sin");
  var str = ele.value;
  let text = document.getElementById("sin").value;
  
}

function toggleVisibility() {
  var getPasword = document.getElementById("sin");
  if (getPasword.type === "password") {
    getPasword.type = "text";
  } else {
    getPasword.type = "password";
  }
} */
function mouseoverPass(event) {
  var ele = document.getElementById("sin");
  var str = ele.getAttribute("data-orig");
/*   if (ele.value.split("*").length - 1 === 7) { */
    ele.value = str.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
  /* } */
  /* ele.value = str.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3"); */
  console.log(ele.value);
  event.preventDefault();
  
}


function mouseoutPass() {
 /*  document.getElementById("sin").addEventListener('mousemove', function(event) {
    event.preventDefault();
  }, false); */
  let reg = /.{1,7}/;
  let ele = document.getElementById("sin");
  var str = ele.value.replace(/-/g, "");
  
  ele.setAttribute("data-orig", str); 
   if (str.length  === 9) { 
    var res = str.replace(reg, (m) => "*".repeat(m.length));
    document.getElementById("sin").value = res;
} 
 

  

  
}
//Prevents user to edit through the sin number through mouse drag to highlight the form *user needs to use backspace to edit
 
document.querySelector('[name="form1"]').addEventListener('mousemove', function(event) {
  event.preventDefault();
}, false);


/* function myReplace() {
  let reg = /.{1,22}/;
  var ele = document.getElementById("test");
  
  ele.setAttribute("data-orig", str);
  var res = str.replace(reg, (m) => "*".repeat(m.length));
  ele.innerHTML = res;
}

function myRestore() {
  var ele = document.getElementById("sin");
  var str = ele.getAttribute("data-orig").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");;
  ele.value = str;
  
  var str = ele.getAttribute("data-orig").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  ele.value = str.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
} */

/* let reg = /.{1,5}/
let string = '123456789';
let string2 = '123';
console.log(string.replace(reg, (m) => "X".repeat(m.length))); */

/* function createstars(n) {
  return new Array(n+1).join("*")
}

function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}
 */
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
