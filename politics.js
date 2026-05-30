const newsGrid = document.getElementById("newsGrid");

// Political RSS feeds
const feeds = [
  "https://feeds.bbci.co.uk/news/politics/rss.xml",
  "https://www.aljazeera.com/xml/rss/all.xml",
  "http://rss.cnn.com/rss/cnn_allpolitics.rss"
];

// RSS to JSON API
const API = "https://api.rss2json.com/v1/api.json?rss_url=";

async function loadNews() {
  try {
    let allItems = [];

    for (let feed of feeds) {
      const res = await fetch(API + encodeURIComponent(feed));
      const data = await res.json();

      if (data.items) {
        allItems = allItems.concat(data.items);
      }
    }

    // newest first
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    displayNews(allItems.slice(0, 12));
  } catch (err) {
    console.log("Error loading RSS:", err);
    newsGrid.innerHTML = "<p>Failed to load political news.</p>";
  }
}

function displayNews(items) {
  newsGrid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "news-card";

    card.innerHTML = `
      <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620" alt="news">
      <div class="news-content">
        <span class="category">Politics</span>
        <h4>${item.title}</h4>
        <p>${item.description ? item.description.slice(0, 120) : ""}...</p>
        <a href="${item.link}" target="_blank">Read More</a>
      </div>
    `;

    newsGrid.appendChild(card);
  });
}

// RUN
loadNews();
