module.exports = function(sequelize, DataTypes) {
    var RefLink = sequelize.define("RefLink", {
      reference_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isUrl: true,
        }
      },

    });

    RefLink.associate = function(models) {
        RefLink.belongsTo(models.Moderator, models.Example, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return RefLink;
  };
  