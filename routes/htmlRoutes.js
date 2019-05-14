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
      
      console.log("\n---------");
      console.log(allFrameworks);
      console.log("\n---------");
      console.log(allFrameworks[0]);
      console.log("\n---------");
      console.log(allFrameworks[0].dataValues);
      console.log("\n---------");
      console.log(allFrameworks[0].dataValues.route_name);
      console.log("\n---------");
      console.log(allFrameworks[0].dataValues.framework_name);
      console.log("\n---------");
      console.log(dbFramework);
      console.log("\n---------");
      console.log(dbFramework.dataValues.framework_name);
      

      
      res.render("frameworks", {
        frameworks: allFrameworks,
        // framework_name: ,
        // framework_route_name: ,
        selected: dbFramework.dataValues.framework_name,
        // subjects: dbFramework.dataValues.Subjects[0].subject_name

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
