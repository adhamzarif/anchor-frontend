// admin-dashboard.js - Dashboard Content

function loadDashboardContent() {
  const mainContent = document.getElementById('adminMainContent');
  if (!mainContent) return;

  const contentHTML = `
    <h1 class="page-title">Admin Dashboard</h1>
    <div class="content-box">
      <h2 style="text-align: center; color: #ffffff; font-size: 28px; font-weight: 600; margin-bottom: 30px;">
        Stats Cards
      </h2>
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-label">Total Users</div>
          <div class="stat-value">4,521</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Active Loan Requests</div>
          <div class="stat-value">182</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Active Fundraisers</div>
          <div class="stat-value">64</div>
        </div>
      </div>
    </div>
  `;

  mainContent.innerHTML = contentHTML;
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadDashboardContent);