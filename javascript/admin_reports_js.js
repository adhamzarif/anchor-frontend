// admin-reports.js - Reports Content

function loadReportsContent() {
  const mainContent = document.getElementById('adminMainContent');
  if (!mainContent) return;

  // Sample data - replace with actual data from your backend
  const reports = [
    { id: 1, email: 'user@gmail.com' },
    { id: 2, email: 'user@gmail.com' },
    { id: 3, email: 'user@gmail.com' }
  ];

  const reportsHTML = reports.map(report => `
    <div class="request-item">
      <div class="request-info">
        <span class="request-number">${report.id}</span>
        <span class="user-email">${report.email}</span>
      </div>
      <div class="request-actions">
        <button class="btn-message" onclick="viewMessage(${report.id})">View Message</button>
      </div>
    </div>
  `).join('');

  const contentHTML = `
    <h1 class="page-title">Reports</h1>
    <div class="content-box">
      ${reportsHTML}
    </div>
  `;

  mainContent.innerHTML = contentHTML;
}

// Action function
function viewMessage(id) {
  alert(`Viewing message for report #${id}`);
  // Add your view message logic here
  // You could open a modal or navigate to a detailed view
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadReportsContent);