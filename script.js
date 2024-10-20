document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const feedbackValue = document.getElementById("feedback").value;

    console.log("Vardas:", nameValue);
    console.log("El. paštas:", emailValue);
    console.log("Atsiliepimas:", feedbackValue);

    alert("Dėkoju už atsiliepimą!");
  });

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
