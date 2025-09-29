// Typing animation for hero section
const words = ["Kumar Gaurav Singh", "Unity3D & XR Developer", "AR/VR Expert"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  const typingElement = document.querySelector(".typing");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typingElement.textContent = currentWord;
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typingElement.textContent = currentWord;
    }

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", type);
