module.exports = function(sequelize, DataTypes) {
    var Subject = sequelize.define("Subject", {
      route_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [1,50],
        }
      },
      
      subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
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
    });

    Subject.associate = function(models) {
        Subject.belongsTo(models.Framework,{
          foreignKey: {
            allowNull: false
          }
        });
        
        Subject.belongsTo(models.Moderator,{
          foreignKey: {
            allowNull: false
          }
        });

        Subject.hasMany(models.Example, {
        }); 
    };
    return Subject;
  };
  