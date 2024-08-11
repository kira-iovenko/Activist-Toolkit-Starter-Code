/* .js files add interaction to your website */
var displayName = document.getElementById("message");
var nameButton = document.getElementById("nameButton");

nameButton.addEventListener("click", displayMessage);

function displayMessage() {
  var name = document.getElementById("yourName").value;
  displayName.innerHTML =
    name +
    ", your mental health is just as important as your physical health. Don't be afraid to speak up about it.";
}
