document.querySelector(".pass i").addEventListener("click", function (e) {
  const inputPassword = document.querySelector("#password");

  const type = inputPassword.type;
  if (type == "text") {
    inputPassword.type = "password";
  } else {
    inputPassword.type = "text";
  }
});

//<input
//  type="password"
//  id="password"
//  placeholder="password"
//  class="input-text"
// />;

// const input = {
//   type: "password",
//   id: "password",
//   placeholder: "password",
//   class: "input-text",
// };

// document.querySelector("#password").type;

// type= "text"
// type = "password";
// document.querySelector("#fn").addEventListener("click" , function (e) {
//   const firstname =
// )}


document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
   const firstname= document.querySelector("#firstname").value;
  if (firstname == "") {
    document.querySelector(".firstname-error ").innerText =
      "First Name is required!";
  }
})
// /////////////////////////////
// document.querySelector(".submit").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelectorAll(".input-text").values;
//   if ( document.querySelectorAll(".input-text")=="") {
    
//   }

    
 