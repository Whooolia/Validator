let nameRegex = /\b[^\d\W]+\b/;
let emailRegex = /[\w_.]+@[\w_.]{3,}\.{1}[a-z]{2,}$/;
let name = document.getElementById("name");
let email = document.getElementById("email");
let nameError = "ONLY characters available";
let emailError = "Not valid email address";
var p = document.getElementsByTagName("p");
// var paragraphCreate = document.createElement("p");
// var appendParagraph = name.appendChild(paragraphCreate);

var check = function() {
  var nameValue = nameRegex.test(name.value);
  console.log(nameValue);
  if (nameValue == true) {
    name.className = "";
    p[0].style.visibility = "hidden";
    // appendParagraph.innerHTML = '';
  } else {
    p[0].style.visibility = "visible";
    name.className = "unvalid";
    // appendParagraph.innerHTML = nameError;
  }
  var emailValue = emailRegex.test(email.value);
  console.log(emailValue);
  if (emailValue == true) {
    email.className = "";
    p[1].style.visibility = "hidden";
  } else {
    email.className = "unvalid";
    p[1].style.visibility = "visible";
    email.className = "unvalid";
  }
};

// name.addEventListener("keypress", checkName);

let submit = document.querySelector("#submit");
submit.addEventListener("click", check);

// -------------------------------------------------------

// whenever not a number is typed, give error msg

// let submit = document.querySelector("#submit");
// submit.addEventListener('click')
