document.getElementById('menu-icon').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('nav-list').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementByClassName('dynamic-text')[0];
  const text = textElement.textContent;
  const typingSpeed = 100; // milliseconds
  const waitTime = 1000; // milliseconds

  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (isDeleting) {
      if (index > 0) {
        textElement.textContent = text.substring(0, index - 1);
        index--;
      } else {
        isDeleting = false;
        setTimeout(typeEffect, typingSpeed);
        return;
      }
    } else {
      if (index < text.length) {
        textElement.textContent = text.substring(0, index + 1);
        index++;
      } else {
        isDeleting = true;
        setTimeout(typeEffect, waitTime);
        return;
      }
    }
    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, typingSpeed);
});
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementsByClassName('dynamic-text')[0];
  const text = textElement.textContent;
  const typingSpeed = 300; // milliseconds
  const waitTime = 1000; // milliseconds

  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (isDeleting) {
      if (index > 0) {
        textElement.textContent = text.substring(0, index - 1);
        index--;
      } else {
        isDeleting = false;
        setTimeout(typeEffect, typingSpeed);
        return;
      }
    } else {
      if (index < text.length) {
        textElement.textContent = text.substring(0, index + 1);
        index++;
      } else {
        isDeleting = true;
        setTimeout(typeEffect, waitTime);
        return;
      }
    }
    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, typingSpeed);
});
