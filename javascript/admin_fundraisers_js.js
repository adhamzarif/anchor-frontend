// admin-fundraisers.js - Fundraisers Content

function loadFundraisersContent() {
  const mainContent = document.getElementById('adminMainContent');
  if (!mainContent) return;

  // Sample data - replace with actual data from your backend
  const fundraisers = [
    { id: 1, username: 'user-name' },
    { id: 2, username: 'user-name' },
    { id: 3, username: 'user-name' }
  ];

  const fundraisersHTML = fundraisers.map(fundraiser => `
    <div class="request-item">
      <div class="request-info">
        <span class="request-number">${fundraiser.id}</span>
        <div class="user-avatar"></div>
        <span class="user-name">${fundraiser.username}</span>
      </div>
      <div class="request-actions">
        <button class="btn-view" onclick="viewFundraiserDocuments(${fundraiser.id})">View Documents</button>
        <button class="btn-approve" onclick="approveFundraiser(${fundraiser.id})">Approve</button>
        <button class="btn-decline" onclick="declineFundraiser(${fundraiser.id})">Decline</button>
      </div>
    </div>
  `).join('');

  const contentHTML = `
    <h1 class="page-title">Fundraisers</h1>
    <div class="content-box">
      ${fundraisersHTML}
    </div>
  `;

  mainContent.innerHTML = contentHTML;
}

// Action functions
function viewFundraiserDocuments(id) {
  alert(`Viewing documents for fundraiser #${id}`);
  // Add your view documents logic here
}

function approveFundraiser(id) {
  if (confirm(`Are you sure you want to approve fundraiser #${id}?`)) {
    alert(`Fundraiser #${id} approved!`);
    // Add your approval logic here
  }
}

function declineFundraiser(id) {
  if (confirm(`Are you sure you want to decline fundraiser #${id}?`)) {
    alert(`Fundraiser #${id} declined!`);
    // Add your decline logic here
  }
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadFundraisersContent);