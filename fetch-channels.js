import fs from "fs";
import fetch from "node-fetch";

const API_URL = "https://hidden-boat-b444.saqlainhaider8198.workers.dev/";

async function fetchChannels() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    fs.writeFileSync("channels.json", JSON.stringify(data, null, 2));
    console.log("✅ channels.json updated!");
  } catch (err) {
    console.error("❌ Error fetching channels:", err);
    process.exit(1);
  }
}

fetchChannels();
