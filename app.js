document.querySelectorAll('.qa-box').forEach(box => {
    box.querySelector('.question').addEventListener('click', () => {
      box.classList.toggle('open');  // Toggle the open class
    });
  });

 


  function showForm(type) {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("signin-form").classList.add("hidden");
  
    if (type === "signup") {
      document.getElementById("signup-form").classList.remove("hidden");
    } else {
      document.getElementById("signin-form").classList.remove("hidden");
    }
  }
  
  // Sign Up
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
  
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
  
    document.getElementById("signup-message").style.color = "green";
    document.getElementById("signup-message").textContent = "Signup successful!";
    e.target.reset();
  });
  
  // Sign In
  document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("signin-username").value.trim();
    const password = document.getElementById("signin-password").value.trim();
  
    const savedUser = JSON.parse(localStorage.getItem("user"));
  
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      document.getElementById("signin-message").style.color = "green";
      document.getElementById("signin-message").textContent = "Login successful!";
    } else {
      document.getElementById("signin-message").style.color = "red";
      document.getElementById("signin-message").textContent = "Invalid credentials!";
    }
  
    e.target.reset();
  });