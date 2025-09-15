import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Live Channels API is running. Visit /channels for JSON.");
});

app.get("/channels", (req, res) => {
  try {
    const data = fs.readFileSync("channels.json");
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "channels.json not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
