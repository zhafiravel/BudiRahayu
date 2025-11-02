document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  if (username === "admin" && password === "admin123") {
    window.location.href = "admin-panel.html";
  } 
  else if (username === "user" && password === "user123") {
    window.location.href = "index.html";
  } 
  else {
    errorMsg.textContent = "Username atau password salah!";
  }
});
