const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`🚀 QuoteKeeper running at http://localhost:${PORT}`);
});
