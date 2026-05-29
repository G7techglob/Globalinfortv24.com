// ===============================
// MOBILE MENU
// ===============================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


// ===============================
// MULTIPLE SPORTS RSS FEEDS
// ===============================

// RSS SOURCES
const rssFeeds = [

  // BBC SPORT
  "https://feeds.bbci.co.uk/sport/rss.xml",

  // CNN SPORT
  "http://rss.cnn.com/rss/edition_sport.rss",

  // ESPN
  "https://www.espn.com/espn/rss/news",

  // SKY SPORTS
  "https://www.skysports.com/rss/12040"

];

const rssContainer = document.getElementById("rss-feed");


// ===============================
// LOAD RSS FEEDS
// ===============================
async function loadSportsNews() {

  let allNews = [];

  for (const feed of rssFeeds) {

    try {

      const api =
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`;

      const response = await fetch(api);

      const data = await response.json();

      if (data.items) {

        allNews = allNews.concat(data.items);

      }

    } catch (error) {

      console.log("RSS Error:", error);

    }
  }

  // LIMIT NEWS
  allNews = allNews.slice(0, 12);

  let output = "";

  allNews.forEach(item => {

    output += `

      <article class="rss-card">

        <img src="${
          item.thumbnail ||
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
        }" alt="Sports News">

        <div class="rss-content">

          <h3>${item.title}</h3>

          <p>
            ${item.description
              .replace(/(<([^>]+)>)/gi, "")
              .substring(0, 140)}...
          </p>

          <a href="${item.link}"
             target="_blank"
             class="read-btn">

             Read Full Story

          </a>

        </div>

      </article>

    `;
  });

  rssContainer.innerHTML = output;
}


// LOAD NEWS
loadSportsNews();


// AUTO REFRESH EVERY 10 MINUTES
setInterval(loadSportsNews, 600000);
