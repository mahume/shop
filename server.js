const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDELWARES
// Parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// ERROR HANDLERS
app.use((req, res, next) => res.status(404).send("<h1>Page not found</h1>"));

// LISTEN 
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));