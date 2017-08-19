module.exports = function(sequelize, DataTypes) {
  var routes_users = sequelize.define("routes_users", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    route_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return routes_users;
};