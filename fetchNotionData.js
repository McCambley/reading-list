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

  return response.data.results;
};

fetchNotionData()
  .then((data) => console.log("data"))
  .catch((err) => console.error("err"));
