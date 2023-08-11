const text = "Welcome! I'm a Binus University Computer Science student. Dive into my world of coding and problem-solving through this portfolio. Let's shape the digital future together!";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    if (text.charAt(index - 1) === '?') {
      document.getElementById("typing-text").innerHTML += "<br>"; // Add a line break after the question mark
    }
    setTimeout(typeText, 80); // Adjust the typing speed (in milliseconds) here
  }
}

window.onload = typeText;