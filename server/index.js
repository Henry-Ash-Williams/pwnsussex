const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/flag", (req, res) => {
  const flag = req.body.flag;
  if (flag === "FLAG{sk9hs-Lc6KJ-CDaJp-KzY3i-mEgNE-RPv7}") {
    res.redirect("https://discord.gg/ZSamQBH9cZ");
  } else {
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
})
