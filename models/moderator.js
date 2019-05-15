// const Sequelize = require('sequelize');
// const uuid = require('uuid/v4'); // ES5

// 'use strict';

module.exports = function(sequelize, DataTypes) {
  var Moderator = sequelize.define("Moderator", {
    // id: {
    //   allowNull: false,
    //   primaryKey: true,
    //   type: Sequelize.UUID,
    //   defaultValue: () => uuid()
    // },

    route_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1,50],
      }
    },
    
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
    Moderator.hasMany(models.Framework,{
    });

    // Moderator.hasMany(models.Subject,{
    // });

    // Moderator.hasMany(models.Example,{
    // });

  }
  return Moderator;
};
