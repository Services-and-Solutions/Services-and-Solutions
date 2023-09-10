// Load the header and footer using JavaScript
window.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-bottom").innerHTML = data;
    });
});
