module.exports = function(sequelize, DataTypes) {
  var Moderator = sequelize.define("Moderator", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1,100],
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1,100],
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,100]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    }

  });

  Moderator.associate = function(models) {
    Moderator.hasMany(models.Framework, models.Subject, models.Example, 
      models.TextBlock, models.CodeBlock, models.ImageRef, 
      models.RefLink, models.Head, {
    });

  }
  return Moderator;
};
