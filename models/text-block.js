module.exports = function(sequelize, DataTypes) {
    var TextBlock = sequelize.define("TextBlock", {
      text_field: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
      },

    });

    TextBlock.associate = function(models) {
        TextBlock.belongsTo(models.Moderator, models.Example, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return TextBlock;
  };
  