function blinkEyes() {
  const pupils = document.querySelectorAll(".pupil");

  pupils.forEach(pupil => {
    pupil.classList.add("blink");
    setTimeout(() => {
      pupil.classList.remove("blink");
    }, 200);
  });
}

// Random blink every 3–6 seconds
setInterval(() => {
  if (Math.random() > 0.5) blinkEyes();
}, Math.random() * 3000 + 3000);
