function submitForm() {
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting form. Please try again later.");
    });
}
