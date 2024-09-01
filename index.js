const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render(`about`);
});

app.post("/check-user", (req, res) => {
  let username = req.body.username;
  if(username == ''){
    res.redirect('./')
  }
  else{
    res.redirect('/user/' + username)
  }
});

app.get("/user/:username", (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ["football", "basketball", "hockey"],
  };
  res.render(`user`, data);
});

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server runned at link: http://localhost:${PORT}`);
});
