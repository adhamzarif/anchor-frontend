fetch('floating-profile.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  })
  .catch(err => console.error('Failed to load floating profile:', err));

// Optional: handle the "View Profile" button click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-profile-btn')) {
    window.location.href = '/user-profile.html';
  }
});
