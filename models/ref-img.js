module.exports = function(sequelize, DataTypes) {
    var ImageRef = sequelize.define("ImageRef", {
      image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isUrl: true,
        }
      },

    });

    ImageRef.associate = function(models) {
        ImageRef.belongsTo(models.Moderator, models.Example, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return ImageRef;
  };
  