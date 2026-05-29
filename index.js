// ===============================
// MOBILE MENU
// ===============================
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


// ===============================
// LIVE RSS NEWS SYSTEM
// ===============================

const rssFeeds = [

  // CNN
  "https://rss.cnn.com/rss/edition_world.rss",

  // BBC
  "https://feeds.bbci.co.uk/news/world/rss.xml",

  // Al Jazeera
  "https://www.aljazeera.com/xml/rss/all.xml",

  // New York Times
  "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",

  // Reuters
  "https://feeds.reuters.com/Reuters/worldNews"

];

const newsContainer = document.getElementById("rss-news-container");

rssFeeds.forEach(feed => {

  const api =
    `https://api.rss2json.com/v1/api.json?rss_url=${feed}`;

  fetch(api)
    .then(response => response.json())
    .then(data => {

      data.items.slice(0, 3).forEach(item => {

        const card = document.createElement("div");
        card.classList.add("rss-card");

        card.innerHTML = `

          <img src="${
            item.thumbnail ||
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
          }" alt="news">

          <div class="rss-content">

            <h3>${item.title}</h3>

            <p>
              ${item.description.substring(0,120)}...
            </p>

            <a href="${item.link}" target="_blank">
              Read Full News
            </a>

          </div>
        `;

        newsContainer.appendChild(card);

      });

    })
    .catch(error => {
      console.log("RSS Error:", error);
    });

});
