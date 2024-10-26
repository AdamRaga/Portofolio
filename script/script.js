const hamburgerBtn = document.getElementById("hamburger-btn");
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌞";
  } else {
    toggleButton.textContent = "🌙";
  }
});
function sendEmail() {
  const email = "adamxraga@gmail.com";
  const subject = "Bisnis";
  const body = "Halo, saya ingin...";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
// Toggle untuk tombol hamburger
document.getElementById("hamburger-btn").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});
