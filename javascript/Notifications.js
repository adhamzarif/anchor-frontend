console.log("Notifications page loaded successfully");

// Optional: Add a subtle click animation to the notification box
document.querySelector('.notification-box')?.addEventListener('click', function () {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => this.style.transform = '', 150);
});