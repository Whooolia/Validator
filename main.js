let nameRegex = /\b[^\d\W]+\b/;
let emailRegex = /[\w_.]+@[\w_.]{3,}\.{1}[a-z]{2,}$/;
let name = document.getElementById("name");
let email = document.getElementById("email");
let nameError = "ONLY characters available";
let emailError = "Not valid email address";
var p = document.getElementsByTagName("p");
// var paragraphCreate = document.createElement("p");
// var appendParagraph = name.appendChild(paragraphCreate);

// validate할때 regular expression 많이 사용하는데 지현이처럼 javascript 안에서 하는 것도 괜찮고
// html input tag 안에 pattern이라는 attribute가 있어 거기에 regular expression 넣어서 사용해도 돼. 
// 전반적으로 코드를 잘 적었는데 코드 스타일이 아직 미흡한 것 같애.
// 예를 들면 var p = document.getElementsByTagName("p"); 에서 error message를 얻는 것 같은데
// p[0], p[1] 이런식으로 안 하고 각각의 에러 메시지에 class나 id를 넣어줘서 따로따로 받는게 좋아
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
