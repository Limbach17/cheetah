module.exports = function(sequelize, DataTypes) {
    var CodeBlock = sequelize.define("CodeBlock", {
      code_snippet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    });

    CodeBlock.associate = function(models) {
        CodeBlock.belongsTo(models.Moderator, models.Example, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return CodeBlock;
  };
  