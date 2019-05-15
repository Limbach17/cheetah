var db = require("../models");

module.exports = function(app) {
app.get("/api/examples", function(req, res) {
    db.Example.findAll({
        // include: [
        //     {model: db.Example},
        //   ]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/examples/:route_name", function(req, res) {
    db.Example.findOne({
        where: {
            route_name: req.params.route
        },
        // include: [
        //     {model: db.Example},
        //   ]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/:framework/examples", function(req, res) {
    db.Example.selectAll({
        where: {
            id: req.params.id
        },
        // include: [
        //     {model: db.Example},
        //   ]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/:framework/:example", function(req, res) {
    db.Example.findOne({
        where: {
            id: req.params.id
        },
        // include: [
        //     {model: db.Example},
        //   ]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/examples", function(req, res) {
    db.Example.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};