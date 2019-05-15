module.exports = function(sequelize, DataTypes) {
    var Example = sequelize.define("Example", {
      route_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [1,50],
        }
      },
      
      example_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
        }
      },

      example_display: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      example_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
        }
      },

      thumbnail_url: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            isURL: true,
        }
      },
  
      documentation_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        }
      },
  
    });

    Example.associate = function(models) {
        Example.belongsTo(models.Subject, {
          foreignKey: {
            allowNull: false
          }
        });

        // Example.belongsTo(models.Framework, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });

        // Example.belongsTo(models.Moderator, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });

    };
    return Example;
  };
  