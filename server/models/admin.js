'use strict';
const argon2 = require('argon2')
module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Admin.beforeCreate((admin, opts) => {
    return argon2.hash(admin.password, {
      type: argon2.argon2d
    }).then(hash => {
      admin.password = hash
    })

  })
  Admin.prototype.validPassword=function(password){
    console.log('heyy')
    return argon2.verify(this.password, password)
  }
  Admin.prototype.saveToken=function(){
    
    var tokens=[]
    let token = jwt.sign({id:this.id},'lovevolleyball')
    tokens.push(token)
    return this.save();
  }
  Admin.prototype.verifyToken=function(token){
    var decodedtoken=jwt.verify(token,'lovevolleyball')
    return this.findById(decodedtoken.id);
  }
  return Admin;
};