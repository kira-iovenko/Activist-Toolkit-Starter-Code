/* .js files add interaction to your website */

/*Display a message after a button is clicked*/
var displayName = document.getElementById("message");
var nameButton = document.getElementById("nameButton");

nameButton.addEventListener("click", displayMessage);

function displayMessage() {
  var name = document.getElementById("yourName").value;
  displayName.innerHTML =
    name +
    ", your mental health is just as important as your physical health. Don't be afraid to speak up about it.";
}

/*Generate a quote from an array*/
var quoteList = [
  "The strongest people are not those who show strength in front of the world but those who fight and win battles that others do not know anything about. ― Jonathan Harnisch",
  "The first step toward change is awareness. The second step is acceptance. — Nathaniel Branden",
  "Awareness is like the sun. When it shines on things, they are transformed. — Thich Nhat Hanh",
  "What mental health needs is more sunlight, more candor, and more unashamed conversation. — Glenn Close",
];
