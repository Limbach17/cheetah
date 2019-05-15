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
        {model: db.Example}
      ]
      })
      .then(function(dbFramework) {
        var frameworkId = dbFramework.dataValues.id
        var selection = dbFramework.dataValues.framework_name;
        var selectionSubs = dbFramework.dataValues.Subjects;
        var subNames = dbFramework.dataValues.Subjects[0].dataValues.subject_name;
        var docURL = dbFramework.dataValues.Subjects[0].dataValues.documentation_url;
        // var subExamples = dbFramework.Examples;
        // var listItem = subExamples.dataValues.example_name;
       
        // console.log("\n---------");
        // console.log(selectionSubs[0]);
        console.log("\n---------");
        console.log(dbFramework.dataValues.Examples);
        // console.log("\n---------");
        // console.log(dbFramework.dataValues.Examples[0].dataValues);
        // console.log("\n---------");
        // console.log(dbFramework.dataValues.Examples[0].dataValues.example_name);
       
       
        
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
    db.Framework.findAll({}).then(function(allFrameworks){
      var allFrameworks = allFrameworks;
      var name = allFrameworks[0].dataValues.route_name;
      var route_name = allFrameworks[0].dataValues.framework_name;

      res.render("cruddy", {
        frameworks: allFrameworks,
        framework_name: name,
        framework_route_name: route_name
      });
    });
  });

  app.get("*", function(req, res) {
    db.Framework.findAll({}).then(function(allFrameworks){
      var allFrameworks = allFrameworks;
      var name = allFrameworks[0].dataValues.route_name;
      var route_name = allFrameworks[0].dataValues.framework_name;
    res.render("404", {
        frameworks: allFrameworks,
        framework_name: name,
        framework_route_name: route_name
      });

    });
  });

};
