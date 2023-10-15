const scriptURL = "https://script.google.com/macros/s/AKfycbz-gKJ67kPJs1DgWUcHWWQkRoCGIpu63hZFcX26pLsrJ2NDULbJaXpmzVwTyvrRw-3p7g/exec";
const form = document.forms["form-daftar"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
