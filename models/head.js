module.exports = function(sequelize, DataTypes) {
    var Head = sequelize.define("Head", {
      head_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
      },

    });

    Head.associate = function(models) {
        Head.belongsTo(models.Moderator, models.Example, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Head;
  };
  