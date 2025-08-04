window.addEventListener('DOMContentLoaded', function () {
  emailjs.init("lvWaqKLusu76VtgA8"); 

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_sbhoyg2", "template_ddf9jab", form)
      .then(function (response) {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function (error) {
        alert("❌ Failed to send message: " + error.text);
      });
  });
});
