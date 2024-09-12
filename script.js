// script.js

const newsContainer = document.querySelector(".news-list");
const pagination = document.querySelector(".pagination");

// Function to fetch news data from API
async function fetchNews(category) {
  try {
    const response = await fetch(
      `https://api-berita-indonesia.vercel.app/cnn/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

// Function to display news items
function displayNews(data) {
  newsContainer.innerHTML = ""; // Clear existing news items
  data.forEach((article) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
      <img src="${article.imageUrl}" alt="${article.title}">
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <span class="news-date">${article.publishedAt}</span>
      </div>
    `;
    newsContainer.appendChild(newsItem);
  });
}

// Function to handle pagination clicks
function handlePaginationClick(page) {
  // Implement logic to fetch and display news for the selected page
  // (e.g., fetch data from API, update pagination UI, etc.)
  console.log(`Page ${page} clicked`);
}

// Initial fetch and display of news
fetchNews("teknologi").then((data) => displayNews(data));

// Add event listeners to pagination links
pagination.addEventListener("click", (event) => {
  if (event.target.classList.contains("page-item")) {
    const page = parseInt(event.target.textContent);
    handlePaginationClick(page);
  }
});
