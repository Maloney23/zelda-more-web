// Set current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Handle enquiry form
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formResponse").textContent =
      "Thank you! We will get back to you shortly.";
    enquiryForm.reset();
  });
}
