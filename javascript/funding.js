const postsData = [
  {
    id: 1,
    filter: "flood",
    tag: "Flood Relief",
    date: "12 Feb, 2025",
    title: "Emergency Aid for Flood Victims",
    desc: "Right now, children are wading through waist-deep water with nothing but the clothes on their backs. Families have lost their homes overnight. Your donation provides emergency food packs, clean water, medicine...",
    raised: 6500,
    goal: 12500,
    image: "/images/flood-dummy.png"
  },
  {
    id: 2,
    filter: "clothes",
    tag: "Clothes Distribution",
    date: "2 Oct, 2025",
    title: "Winter Clothing Distribution for Families in Need",
    desc: "Winter is here and thousands of families have no warm clothes or blankets. We're distributing jackets, sweaters, blankets, and children's clothes to the poorest communities. Even 200 baht can keep one...",
    raised: 20000,
    goal: 52500,
    image: "/images/cloth-dummy.png"
  },
  {
    id: 3,
    filter: "accidents",
    tag: "Accidents",
    date: "12 April, 2025",
    title: "Emergency Fire Relief for Affected Families",
    desc: "Last night a huge fire destroyed over 50 homes in minutes. Families escaped with nothing and now have no food, clothes or roof. We are bringing food, water, blankets and medicine today. Every...",
    raised: 40500,
    goal: 50000,
    image: "/images/dummy-fund.png"
  }
];

// Duplicate for visual match (your screenshot shows duplicates)
const allPosts = [...postsData, ...postsData];

function renderPosts(posts) {
  const container = document.getElementById("postsGrid");
  container.innerHTML = posts.map(post => `
    <div class="card" data-filter="${post.filter}">
      <img src="${post.image}" alt="${post.title}">
      <div class="card-content">
        <div class="tag-date-row">
  <span class="tag">${post.tag}</span>
  <span class="date">Posted on ${post.date}</span>
</div>
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        <div class="progress-container">
  <div class="goal-amount">฿${post.goal.toLocaleString()}</div>
  <div class="progress">
    <div class="progress-fill" style="width: ${(post.raised / post.goal) * 100}%"></div>
  </div>
  <div class="raised-amount">฿${post.raised.toLocaleString()}</div>
</div>
        <div class="actions">
          <button class="donate-btn">Donate</button>
          <button class="view-btn">View</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const filtered = filter === 'all' ? allPosts : allPosts.filter(p => p.filter === filter);
    renderPosts(filtered);
  });
});

// Search
document.getElementById('searchInput').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = allPosts.filter(p =>
    p.title.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term)
  );
  renderPosts(filtered);
});

// Load on start
renderPosts(allPosts);