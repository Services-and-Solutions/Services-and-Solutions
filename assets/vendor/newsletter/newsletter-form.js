// assets/vendor/newsletter/newsletter-form.js

document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletter-form");
  const customAlertOverlay = document.getElementById("custom-alert-overlay");
  const closeAlertButton = document.getElementById("close-alert");
  const emailInput = document.querySelector(
    "#newsletter-form input[name='email']"
  );

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting normally

      // Validate the email input
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailPattern.test(emailValue)) {
        // Invalid email, add red border to input
        emailInput.style.border = "2px solid red";
        return; // Exit the function and don't proceed
      }

      // Clear the red border (if previously applied)
      emailInput.style.border = "1px solid #ccc";

      // You can add your form submission logic here if needed

      // Reset the form
      newsletterForm.reset();

      // Show the custom alert with fade-in effect
      customAlertOverlay.style.opacity = "0";
      customAlertOverlay.style.display = "flex";
      setTimeout(() => {
        customAlertOverlay.style.opacity = "1";
      }, 10);
    });
  }

  // Close the custom alert when the "Close" button is clicked
  if (closeAlertButton) {
    closeAlertButton.addEventListener("click", function () {
      closeCustomAlert();
    });
  }

  // Close the custom alert when clicking outside the window (overlay)
  customAlertOverlay.addEventListener("click", function (e) {
    if (e.target === customAlertOverlay) {
      closeCustomAlert();
    }
  });

  function closeCustomAlert() {
    customAlertOverlay.style.opacity = "0";
    setTimeout(() => {
      customAlertOverlay.style.display = "none";
    }, 300);
  }
});
