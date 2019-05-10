module.exports = function(sequelize, DataTypes) {
    var Example = sequelize.define("Example", {
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
        Example.belongsTo(models.Moderator, models.Framework, models.Subject, {
          foreignKey: {
            allowNull: false
          }
        });

        Example.hasMany(models.TextBlock, models.CodeBlock, models.ImageRef, 
            models.RefLink, models.Heading,{
        });
    };
    return Example;
  };
  