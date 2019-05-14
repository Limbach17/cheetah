var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/frameworks/:route_name", function(req, res) {
    db.Framework.findOne({ where: { route_name: req.params.route_name }}).then(function(dbFramework) {
      // var hbsObject = {
      //   Framework: data
      // };
      
      ///tried passing hbsObject below to no avail///
      res.render("frameworks", {
        framework: dbFramework
      });
    });
  });

  // app.get("/mgmt", function(req, res) {
  //   res.render("/account-mgmt");
  // });

  // app.get("/cruddy", function(req, res) {
  //   res.render("/cruddy");
  // });

  app.get("*", function(req, res) {
    res.render("404");
  });

};
