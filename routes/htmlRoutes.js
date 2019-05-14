var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/frameworks/:route_name", function(req, res) {
    db.Framework.findAll({}).then(function(allFrameworks){
      var allFrameworks = allFrameworks;
      
      db.Framework.findOne({ where: { route_name: req.params.route_name }, include: [
        {model: db.Subject},
        {model: db.Example},
      ]
      })
      .then(function(dbFramework) {
      
      console.log(allFrameworks);
      // console.log("----1----");
      // console.log(dbFramework);
      console.log("----2----");
      console.log(allFrameworks[2]);
      
      res.render("frameworks", {
        frameworks: allFrameworks,
        framework_name: dbFramework.dataValues.framework_name,
        subjects: dbFramework.dataValues.Subjects[0].subject_name

      })
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
