var db = require("../models");

module.exports = function(app) {
app.get("/api/subjects", function(req, res) {
    db.Subject.selectAll({
        include: [
            {model: db.Example},
          ]
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.get("/api/:subject", function(req, res) {
    db.Subject.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {model: db.Example},
          ]
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.get("/api/:framework/subjects", function(req, res) {
    db.Subject.selectAll({
        where: {
            id: req.params.id
        },
        include: [
            {model: db.Example},
          ]
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.get("/api/:framework/:subject", function(req, res) {
    db.Subject.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {model: db.Example},
          ]
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });


  app.post("/api/subjects", function(req, res) {
    db.Subject.create(req.body).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.put("/api/subjects", function(req, res) {
    db.Subject.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.delete("/api/subjects/:id", function(req, res) {
    db.Subject.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

};