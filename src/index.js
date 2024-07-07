const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname, "../templates");
const rootPath = path.join(__dirname, "..");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));






app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name.trim(),
    password: req.body.password.trim(),
  };
  
  try {
    await collection.insertMany([data]);
    res.sendFile(path.join(rootPath, "index.html")); 
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("An error occurred during signup");
  }
});

app.post("/login", async (req, res) => {
  const userName = req.body.name.trim();
  const userPass = req.body.password.trim();

  try {
    const check = await collection.findOne({ name: userName });
    
    if (check && check.password === userPass) {
      res.sendFile(path.join(rootPath, "index.html")); 
    } else {
      res.send("Wrong username or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("An error occurred during login");
  }
});

app.listen(3000, () => {
  console.log("Port connected");
});
