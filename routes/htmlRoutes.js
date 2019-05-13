var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  ////MUST WORK ON PARAM TO SELECT FOR ONE SPECIFIC FRAMEWORK////
  app.get("/frameworks", function(req, res) {
    res.render("frameworks");
  });

  //////////////////////NEED HANDLEBARS BELOW THIS LINE/////////////////////////

  // app.get("/mgmt", function(req, res) {
  //   res.render("/account-mgmt");
  // });

  // app.get("/cruddy", function(req, res) {
  //   res.render("/cruddy");
  // });

};
