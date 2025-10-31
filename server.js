const express = require("express");
const path = require("path");
const quoteRoutes = require("./routes/quotes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", quoteRoutes)

app.listen(PORT, () => {
  console.log(`🚀 QuoteKeeper running at http://localhost:${PORT}`);
});
