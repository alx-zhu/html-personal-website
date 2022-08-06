// Make html elements recognizable to javascript file.
let submit = document.getElementById("submit");
let nameInput = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

// Listen for a click on submit button
submit.addEventListener("click", () => {
  //Print the value of firstname and lastName inputs when a click is detected on submit button.
  console.log("Name: " + nameInput.value + ", Email: " + email.value + " , Message: " + message.value);
});
