'use strict';
const argon2=require('argon2')
const jwt=require('jsonwebtoken')


module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    token:DataTypes.STRING
  });
  user.beforeCreate((user, opts) => {
   
    return argon2.hash(user.password, {
      type: argon2.argon2d
    }).then(hash => {
      user.password = hash
    })
    
  })
  user.prototype.verifyToken=function(token){
    var decodedtoken=jwt.verify(token,'lovevolleyball')
    return this.findById(decodedtoken.id);

  }
  user.prototype.saveToken
  user.prototype.validPassword=function(password){
    console.log('pwd verified')
    return argon2.verify(this.password, password)
  }
  
  return user;
};