async function fetchArticles() {
  // Do something here idk the server is way more fun
  try {
    const response = await fetch("http://localhost:3000/notion-data"); // Adjust the URL as needed
    const data = await response.json();

    const articlesContainer = document.getElementById("articles");

    console.log(data);

    data.forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";

      const title = document.createElement("div");
      title.className = "title";
      title.innerText = article.properties.Name.title[0].text.content; // Adjust based on your database properties

      const url = document.createElement("a");
      url.href = article.properties.URL.url; // Adjust based on your database properties
      url.innerText = "Read more";
      url.target = "_blank";

      articleDiv.appendChild(title);
      articleDiv.appendChild(url);

      articlesContainer.appendChild(articleDiv);
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

fetchArticles();
