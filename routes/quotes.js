const express =  require ("express");
const router = express.Router ();
let quotes = require("../data/quotes");


// show all quotes
const fallbackQuote = { text: "Stay motivated, add new quotes!", author: "Tee" };

router.get("/", (req, res) => {
  let randomQuote = null;

  if (quotes.length > 0) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } else {
    randomQuote = fallbackQuote;
  }
  res.render("index", { quotes, randomQuote });
});

// add a new quote from the form 
router.get("/add-quote", (req, res)=>{
    res.render("addQuote")
    // console.log("adding a new quote")
})

// submit new quote(form data)
router.post("/quotes", (req, res)=>{
      const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).send("Both text and author are required!");
  }
  const newQuote = { id: Date.now(), text, author };
  quotes.push(newQuote);
  res.redirect("/");
    // console.log('form data for quote submission')

})

// delete a particular quote
router.post("/delete/:id", (req, res)=>{
      const index = parseInt(req.body.index);
  if (!isNaN(index)) {
    quotes.splice(index, 1);
  }
  res.redirect("/");
    // console.log("delete single quote")
})

module.exports = router;