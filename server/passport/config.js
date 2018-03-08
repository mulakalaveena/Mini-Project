const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const models = require('../models/index.js')


    
passport.use(new LocalStrategy( function verify(username,password,done){
        
        models.user.findOne({
            
            where: {
                username:username
               
            }
        })
        .then(user=>{
            if(!user){
                return done(null,false,{message:'incorrect username'})
            }else{
                user.validPassword(password)
                .then(same=>{
                    console.log('efcd')
                    if(same){
                        return done(null,true)
                    }else{
                        return done(null,false,{message:'incorrect password'})
                    }
                })
                
               
            }
        }) 
        .catch(error=>{
            return done(error)
        })
       
    } 
))   


module.exports= passport;
