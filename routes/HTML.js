var path = require("path");

module.exports = function (app) {
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/about.html"));
  });

  app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/projects.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
};
