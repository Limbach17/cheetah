var db = require("../models");

module.exports = function(app) {
  app.get("/api/moderators", function(req, res) {
    console.log("hi");
    db.Moderator.findAll({
      include: [
        {model: db.Framework},
        {model: db.Subject},
        {model: db.Example},
      ]
    }).then(function(dbModerator) {
      res.json(dbModerator);
    });
  });

  app.get("/api/moderators/:id", function(req, res) {
    db.Moderator.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: db.Framework},
        {model: db.Subject},
        {model: db.Example},
      ]
    }).then(function(dbModerator) {
      res.json(dbModerator);
    });
  });

  app.post("/api/moderators", function(req, res) {
    db.Moderator.create(req.body).then(function(dbModerator) {
      res.json(dbModerator);
    });
  });

  app.put("/api/moderators", function(req, res) {
    db.Moderator.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbModerator) {
      res.json(dbModerator);
    });
  });

  app.delete("/api/moderators/:id", function(req, res) {
    db.Moderator.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbModerator) {
      res.json(dbModerator);
    });
  });

};