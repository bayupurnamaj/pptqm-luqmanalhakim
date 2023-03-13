const scriptURL = "https://script.google.com/macros/s/AKfycbywXXBUSvpdJ8IO-urQ7BA-ZdDFN6RPeXwCOXt_bukZ4WVYWblzf5BWz-Ndpg2LTayk/exec";
const form = document.forms["form-daftar"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Inisialisasi Google API client library
  gapi.client.init({
    apiKey: "AIzaSyBoiAAcnBmmn6bdUXgxy3VjuBNATD1Ty4w",
    clientId: "568581168299-174jrjir00lmjpp5r82eg2qo5g4m3f1s",
    scope: "https://www.googleapis.com/auth/drive.file",
  });

  // Autentikasi pengguna dengan Google OAuth 2.0
  gapi.auth.authorize(
    {
      client_id: "568581168299-174jrjir00lmjpp5r82eg2qo5g4m3f1s.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive.file",
      immediate: false,
    },
    handleAuthResult
  );

  // Callback untuk hasil autentikasi
  function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      // Akses token dari Google OAuth 2.0
      var accessToken = authResult.access_token;

      // Membuat request HTTP POST dengan akses token
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://www.googleapis.com/upload/drive/v3/files?uploadType=media");
      xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
      xhr.setRequestHeader("Content-Type", "image/jpeg"); // ganti dengan tipe file yang diunggah
      xhr.upload.onprogress = function (e) {
        // Proses upload file
        var progress = Math.round((e.loaded / e.total) * 100);
        console.log("Upload progress: " + progress + "%");
      };
      xhr.onload = function () {
        // Berhasil mengunggah file
        console.log("File uploaded successfully!");
      };
      xhr.onerror = function () {
        // Gagal mengunggah file
        console.error("Error uploading file.");
      };
      xhr.send(file); // variabel "file" berisi file yang diunggah
    }
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
