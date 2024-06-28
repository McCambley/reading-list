const express = require("express");
const fetchNotionData = require("./fetchNotionData"); // Assuming fetchNotionData is in the same directory

const app = express();
const PORT = process.env.PORT || 3000;

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
