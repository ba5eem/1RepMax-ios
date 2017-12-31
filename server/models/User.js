module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING, //will use passport to serialize
    }
  })

 return User;
}