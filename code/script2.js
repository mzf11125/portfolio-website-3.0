const introductionText = document.getElementById("introduction-text");
    const textToType = "<strong>Muhammad Zidan Fatonie</strong> is an aspiring tech wizard and a CS student @ BINUS, fueled by a passion for programming and innovation. Bringing ideas to life and loving the challenge!";
    let index = 0;
    const typingInterval = 50; // Adjust typing speed as needed

    function typeText() {
      if (index < textToType.length) {
        introductionText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingInterval);
      }
    }

    // Start typing animation
    typeText();