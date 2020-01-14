const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// TEMPLATING ENGINE
app.set("view engine", "ejs");
app.set("views", "views");

// MIDDELWARES
// Parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

// ERROR HANDLERS
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
