(function () {
  "use strict";

  // Select all forms with the class "php-email-form"
  let forms = document.querySelectorAll(".php-email-form");

  // Add a submit event listener to each form
  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute("action");

      // Check if the form action property is set
      if (!action) {
        displayError(thisForm, "The form action property is not set!");
        return;
      }

      // Display loading indicator
      thisForm.querySelector(".loading").classList.add("d-block");
      thisForm.querySelector(".error-message").classList.remove("d-block");
      thisForm.querySelector(".sent-message").classList.remove("d-block");

      let formData = new FormData(thisForm);

      // Call the php_email_form_submit function with form data
      php_email_form_submit(thisForm, action, formData);
    });
  });

  // Function to handle form submission
  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: "POST",
      body: formData,
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(
            `${response.status} ${response.statusText} ${response.url}`
          );
        }
      })
      .then(() => {
        setTimeout(function () {
          // Remove loading indicator after 2 seconds
          thisForm.querySelector(".loading").classList.remove("d-block");
          // Always show the success message
          thisForm.querySelector(".sent-message").classList.add("d-block");
          thisForm.reset();
        }, 1600); // 1,6-second delay
      })
      .catch((error) => {
        // Display the error message
        displayError(thisForm, error);
      });
  }

  // Function to display error messages
  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
