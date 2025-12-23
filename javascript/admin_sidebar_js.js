// admin-sidebar.js - Reusable Admin Sidebar Component

function loadAdminSidebar() {
  const sidebar = document.getElementById('adminSidebar');
  if (!sidebar) return;

  // Get current page to set active state
  const currentPage = window.location.pathname.split('/').pop() || 'admin-dashboard.html';

  const sidebarHTML = `
    <aside class="admin-sidebar">
      <nav class="sidebar-nav">
        <a href="admin-dashboard.html" class="${currentPage === 'admin-dashboard.html' ? 'active' : ''}">
          Dashboard
        </a>
        <a href="admin-loan-requests.html" class="${currentPage === 'admin-loan-requests.html' ? 'active' : ''}">
          Loan Requests
        </a>
        <a href="admin-fundraisers.html" class="${currentPage === 'admin-fundraisers.html' ? 'active' : ''}">
          Fundraisers
        </a>
        <a href="admin-reports.html" class="${currentPage === 'admin-reports.html' ? 'active' : ''}">
          Reports
        </a>
        <a href="#" id="adminLogout">
          Log out
        </a>
      </nav>
    </aside>
  `;

  sidebar.innerHTML = sidebarHTML;

  // Handle logout
  const logoutBtn = document.getElementById('adminLogout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Add your logout logic here
      if (confirm('Are you sure you want to log out?')) {
        // Clear session/cookies
        localStorage.removeItem('adminSession');
        sessionStorage.clear();
        // Redirect to login
        window.location.href = 'login.html';
      }
    });
  }
}

// Load sidebar when DOM is ready
document.addEventListener('DOMContentLoaded', loadAdminSidebar);

// Add fade-in animation
window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});