var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/cruddy", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cruddy.html"));
  // });

  app.get("/frameworks/:route_name", function(req, res) {
    db.Framework.findAll({}).then(function(allFrameworks){
      var allFrameworks = allFrameworks;
      
      db.Framework.findOne({ where: { route_name: req.params.route_name }, include: [
        {model: db.Subject},
        {model: db.Example},
      ]
      })
      .then(function(dbFramework) {

        // console.log("\n---------");
        // console.log(dbFramework);
        // console.log("\n---------");
        // console.log(dbFramework.dataValues);
        // console.log("\n---------");
        // console.log(dbFramework.dataValues.Subjects);
        // console.log("\n---------");
        // console.log(dbFramework.dataValues.Subjects);
        // console.log("\n---------");
        console.log(dbFramework.dataValues.Subjects);
      
      
      res.render("frameworks", {
        frameworks: allFrameworks,
        framework_name: allFrameworks[0].dataValues.route_name,
        framework_route_name: allFrameworks[0].dataValues.framework_name,
        selected: dbFramework.dataValues.framework_name,
        subjects: dbFramework.dataValues.Subjects,
        subject_name: dbFramework.dataValues.Subjects[0].dataValues.subject_name,
        documentation_url: dbFramework.dataValues.Subjects[0].dataValues.documentation_url
        // examples: 
        // example_name:
        


      })
      });
    });
  });

  // app.get("/mgmt", function(req, res) {
  //   res.render("/account-mgmt");
  // });

  app.get("/cruddy", function(req, res) {
    res.render("cruddy");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });

};
