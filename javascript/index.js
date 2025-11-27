// Optional: Add interactivity later (e.g., logout, modals, etc.)
console.log("Anchor Finance - Ready!");

document.querySelector('.logout-btn')?.addEventListener('click', () => {
  if (confirm('Are you sure you want to log out?')) {
    alert('Logged out successfully!');
    // window.location.href = 'login.html';
  }
});