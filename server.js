const express = require("express");
const { fetchNotionData } = require("./fetchNotionData"); // Assuming fetchNotionData is in the same directory

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const data = await fetchNotionData();
    const mockParagraph = (link, index) => `
      <a href="${link}" style="display: block">
        ${index}: ${link}
      </a>
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Express App</title>
        </head>
        <body>
          <h1>Welcome to My Express App</h1>
          <p>This is an HTML response.</p>
          ${data.map((link, index) => mockParagraph(link, index)).join("")}
          <script>
            console.log("This is a JavaScript response.");
          </script>
        </body>
      </html>
    `;
    res.send(htmlContent);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.get("/notion-data", async (req, res) => {
  try {
    const data = await fetchNotionData();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.use(express.static("public")); // Assuming index.html is in the 'public' folder

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
