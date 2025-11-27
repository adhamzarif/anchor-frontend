// javascript/header.js  ←  THIS FILE ONLY

document.addEventListener("DOMContentLoaded", function () {

  // ================== HEADER ==================
  const headerPlaceholder = document.getElementById("headerPlaceholder");

  if (headerPlaceholder) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const headerFile = isLoggedIn 
      ? "includes/header-loggedin.html" 
      : "includes/header.html";

    fetch(headerFile)
      .then(r => {
        if (!r.ok) throw new Error("Header 404: " + headerFile);
        return r.text();
      })
      .then(html => {
        headerPlaceholder.outerHTML = html;

        // If user is logged in → update name & avatar after header loads
        if (isLoggedIn) {
          setTimeout(() => {
            const nameEl = document.getElementById("userName");
            const avatarEl = document.getElementById("userAvatar");
            if (nameEl) nameEl.textContent = localStorage.getItem("userName") || "User";
            if (avatarEl) avatarEl.src = localStorage.getItem("userAvatar") || avatarEl.src;
          }, 50);
        }
      })
      .catch(err => {
        console.error(err);
        headerPlaceholder.innerHTML = "<p style='color:red;text-align:center;padding:1rem;'>Header failed to load</p>";
      });
  }

  // ================== FOOTER ==================
  const footerPlaceholder = document.getElementById("footerPlaceholder");

  if (footerPlaceholder) {
    fetch("includes/footer.html")
      .then(r => {
        if (!r.ok) throw new Error("Footer 404");
        return r.text();
      })
      .then(html => {
        footerPlaceholder.outerHTML = html;
      })
      .catch(err => {
        console.error(err);
        footerPlaceholder.innerHTML = "<p style='color:red;text-align:center;padding:1rem;'>Footer failed to load</p>";
      });
  }

  // === SECRET ADMIN SHORTCUT – WORKS ON EVERY PAGE AUTOMATICALLY ===
let altPressed = false;

document.addEventListener('keydown', e => {
  if (e.key === 'Alt') altPressed = true;
  if (altPressed && (e.key === 'b' || e.key === 'B')) {
    e.preventDefault();
    window.location.href = 'admin-login.html';  // ← change if your file has different name/location
  }
});

document.addEventListener('keyup', e => {
  if (e.key === 'Alt') altPressed = false;
});

});

// Logout function (used in logged-in header)
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("userAvatar");
  location.reload();
}