module.exports = function(sequelize, DataTypes) {
    var Framework = sequelize.define("Framework", {
      route_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [1,50],
        }
      },
      
      framework_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
        }
      },
  
      documentation_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        }
      },
  
      thumbnail_url: {
          type: DataTypes.TEXT,
          allowNull: true,
          validate: {
              isURL: true,
          }
      },

      logo_url: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            isURL: true,
        }
      },

      icon_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isURL: true,
        }
      },
    });

    Framework.associate = function(models) {
        Framework.belongsTo(models.Moderator, {
          foreignKey: {
            allowNull: false
          }
        });

        Framework.hasMany(models.Subject,{
        });

        // Framework.hasMany(models.Example,{
        // });
    };
    return Framework;
  };
  