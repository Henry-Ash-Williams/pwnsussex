const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.setHeader("Set-Cookie", process.env.FLAG);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/flag", (req, res) => {
  const flag = req.body.flag;
  if (flag === process.env.FLAG) {
    res.redirect(process.env.DISCORD);
  } else {
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
})
