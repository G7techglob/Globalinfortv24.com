const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Newsletter validation (simple)
document.querySelector(".newsletter-form").addEventListener("submit", function(e){
  e.preventDefault();

  const email = this.querySelector("input").value;

  if(email.includes("@")){
    alert("Subscribed successfully to GlobalInforTV24 Business News!");
    this.reset();
  } else {
    alert("Please enter a valid email address.");
  }
});


const rssContainer = document.getElementById("rss-feed");

const feeds = [

"https://feeds.bbci.co.uk/news/business/rss.xml",

"https://feeds.reuters.com/reuters/businessNews",

"https://www.cnbc.com/id/100003114/device/rss/rss.html"

];

feeds.forEach(feed => {

const rssUrl =
`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`;

fetch(rssUrl)

.then(response => response.json())

.then(data => {

if (!data.items) return;

data.items.slice(0, 4).forEach(item => {

const card = document.createElement("div");

card.className = "rss-card";

card.innerHTML = `

<img src="${item.thumbnail || 'https://via.placeholder.com/400'}" alt="News Image">

<div class="rss-content">

<h3>${item.title}</h3>

<p>
${item.description.replace(/<[^>]*>/g, '').substring(0,120)}...
</p>

<a href="${item.link}" target="_blank">
Read Full News →
</a>

</div>

`;

rssContainer.appendChild(card);

});

})

.catch(error => {
console.log("RSS Error:", error);
});

});
