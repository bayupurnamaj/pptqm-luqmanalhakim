// const scriptURL = "https://script.google.com/macros/s/AKfycbywXXBUSvpdJ8IO-urQ7BA-ZdDFN6RPeXwCOXt_bukZ4WVYWblzf5BWz-Ndpg2LTayk/exec";
// const form = document.forms["form-daftar"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });
const form = document.forms["form-daftar"];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.querySelector("#nama").value;
  const alamat = document.querySelector("#alamat").value;
  const semester = document.querySelector("#semester").value;
  const jurusan = document.querySelector("#jurusan").value;
  const suratIzin = document.querySelector("#surat_izin").value;

  console.log("Data yang dikirim:", { nama, alamat, semester, jurusan, suratIzin });

  google.script.run
    .withSuccessHandler(function (response) {
      console.log("Hasil kembalian dari server:", response);
    })
    .sendEmail(nama, alamat, semester, jurusan, suratIzin);

  form.reset();
});
