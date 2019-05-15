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
      var name = allFrameworks[0].dataValues.route_name;
      var route_name = allFrameworks[0].dataValues.framework_name;
      
      db.Framework.findOne({ where: { route_name: req.params.route_name }, include: [
        {model: db.Subject},
        // {model: db.Example}
      ]
      })
      .then(function(dbFramework) {
        var selection = dbFramework.dataValues.framework_name;
        var selectionSubs = dbFramework.dataValues.Subjects;
        var subNames = dbFramework.dataValues.Subjects[0].dataValues.subject_name;
        var docURL = dbFramework.dataValues.Subjects[0].dataValues.documentation_url;
        // var subExamples = dbFramework.dataValues.Subjects[0].dataValues.Examples;
        // var listItem = dbFramework.dataValues.Subjects[0].dataValues.Examples[0].example_name;
        
        console.log("\n---------");
        console.log(selectionSubs);
        
      res.render("frameworks", {
        frameworks: allFrameworks,
        framework_name: name,
        framework_route_name: route_name,
        selected: selection,
        subjects: selectionSubs,
        subject_name: subNames,
        documentation_url: docURL,
        // examples: subExamples,
        // example_name: listItem

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
