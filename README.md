# 🧠 QuoteKeeper

QuoteKeeper is a simple web application built with **Express.js** and **EJS** that lets users view, add, and delete motivational quotes — all stored in memory (no database).

---

## 🚀 Features
- View all motivational quotes
- Add new quotes via a form
- Delete quotes dynamically
- Data stored temporarily in memory

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- EJS
- Body-Parser
- HTML/CSS

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js installed (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/devTenshi/QuoteKeeper.git
   cd QuoteKeeper
```

3. Install dependencies:
```bash
   npm install
```

4. Start the server:
```bash
   node server.js
```

5. Open your browser and visit:
```
   http://localhost:8000
```

## 📡 API Endpoints

### Web Routes (Browser)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | view all quotes |
| GET | `/add-quote` | Show form to add new quote |
| POST | `/quotes` | Submit new quote (form data) |
| POST | `/quotes/delete/:id` | Delete a specific quote |



## 🧪 Testing with Postman


## 📁 Project Structure
```
QuoteKeeper/
│
└── data/
    └── quotes.js
├── public/
│   ├── css/
│   │   └── style.css  
├── routes/
│   └── quotes.js  
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   └── addQuote.ejs
├── package.json
├── server.js
├── README.md

```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **EJS** - Template engine
- **Node.js** - Runtime environment

## 📝 Notes

- Quotes are stored in memory only
- Data resets when server restarts
- No database required
- Port: 8000 (configurable in server.js)


