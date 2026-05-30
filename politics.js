const newsGrid = document.getElementById("newsGrid");

// Political RSS feeds
const feeds = [
  "https://feeds.bbci.co.uk/news/politics/rss.xml",
  "https://www.aljazeera.com/xml/rss/all.xml"
];

// RSS to JSON API
const API = "https://api.rss2json.com/v1/api.json?rss_url=";

// Load RSS news
async function loadNews() {
  try {
    let allItems = [];

    for (const feed of feeds) {
      const response = await fetch(API + encodeURIComponent(feed));
      const data = await response.json();

      if (data.items) {
        allItems = allItems.concat(data.items);
      }
    }

    // Sort newest first
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    displayNews(allItems.slice(0, 12));

  } catch (error) {
    console.error("RSS Error:", error);

    newsGrid.innerHTML = `
      <div class="error-message">
        Failed to load political news.
      </div>
    `;
  }
}

// Display news cards
function displayNews(items) {
  newsGrid.innerHTML = "";

  items.forEach(item => {

    const image =
      item.thumbnail ||
      item.enclosure?.link ||
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop";

    const description = item.description
      ? item.description.replace(/<[^>]*>/g, "").slice(0, 150)
      : "Click to read the full article.";

    const card = document.createElement("article");
    card.className = "news-card";

    card.innerHTML = `
      <img src="${image}" alt="${item.title}" loading="lazy">

      <div class="news-content">
        <span class="category">Politics</span>

        <h4>${item.title}</h4>

        <p>${description}...</p>

        <a href="${item.link}" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    `;

    newsGrid.appendChild(card);
  });
}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Run
loadNews();
