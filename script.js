document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  status.className = "form-status";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    });

    if (res.ok) {
      status.textContent = "Enquiry sent. We'll get back to you shortly.";
      status.className = "form-status success";
      form.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    status.textContent = "Something went wrong. Please call or email directly.";
    status.className = "form-status error";
  }
});
