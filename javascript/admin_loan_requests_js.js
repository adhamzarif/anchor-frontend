// admin-loan-requests.js - Loan Requests Content

function loadLoanRequestsContent() {
  const mainContent = document.getElementById('adminMainContent');
  if (!mainContent) return;

  // Sample data - replace with actual data from your backend
  const loanRequests = [
    { id: 1, username: 'user-name' },
    { id: 2, username: 'user-name' },
    { id: 3, username: 'user-name' }
  ];

  const requestsHTML = loanRequests.map(request => `
    <div class="request-item">
      <div class="request-info">
        <span class="request-number">${request.id}</span>
        <div class="user-avatar"></div>
        <span class="user-name">${request.username}</span>
      </div>
      <div class="request-actions">
        <button class="btn-view" onclick="viewDocuments(${request.id})">View Documents</button>
        <button class="btn-approve" onclick="approveRequest(${request.id})">Approve</button>
        <button class="btn-decline" onclick="declineRequest(${request.id})">Decline</button>
      </div>
    </div>
  `).join('');

  const contentHTML = `
    <h1 class="page-title">Loan Requests</h1>
    <div class="content-box">
      ${requestsHTML}
    </div>
  `;

  mainContent.innerHTML = contentHTML;
}

// Action functions
function viewDocuments(id) {
  alert(`Viewing documents for request #${id}`);
  // Add your view documents logic here
}

function approveRequest(id) {
  if (confirm(`Are you sure you want to approve request #${id}?`)) {
    alert(`Request #${id} approved!`);
    // Add your approval logic here
  }
}

function declineRequest(id) {
  if (confirm(`Are you sure you want to decline request #${id}?`)) {
    alert(`Request #${id} declined!`);
    // Add your decline logic here
  }
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadLoanRequestsContent);