document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const status = document.getElementById("formStatus");

  status.textContent = "Thank you, " + name + "! Your message has been sent.";
  status.style.color = "green";

  this.reset();
});
