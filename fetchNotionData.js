const axios = require("axios");
require("dotenv").config();

const notionAPIKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

const fetchNotionData = async () => {
  const response = await axios.post(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {},
    {
      headers: {
        Authorization: `Bearer ${notionAPIKey}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );
  console.log(response.data.results.length);
  const linksArray = response.data.results.map((r) => r.properties.Link.url);
  return linksArray;
};

module.exports = {
  fetchNotionData,
};

// fetchNotionData()
//   .then((data) => console.log("data"))
//   .catch((err) => console.error("err"));
