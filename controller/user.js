const User = require('../model/user');

const express = require('express');
const app = express();
exports.getUserForm = (req, res, next)=>{
    res.render('user', {

        pageTitle: 'user form page',
            isTrue: true,
    })
}


exports.postUserForm = (req, res, next)=>{
    console.log("inside post user form")
    const id =  new Date().toString().substring(8, 24).replace(/ /g, "-");
    console.log(id);
      
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const data = {
        name: name,
        email: email, 
        password: password,
        confirmPassword: confirmPassword,
        id: id
    };

    const check = User.validatePassword(data);
    console.log(check)
    if(check.isTrue){
        const user = new User(name, email, password, confirmPassword, null);
        
        user.save();
        res.redirect('/')
    
    }
    else{
        console.log("inside else")
        res.render('user', {
            isTrue: check.isTrue,
            isNameValid: check.isNameValid,
            isPassValid: check.isuserPasswordValid,
            ispassMatched: check.ispassMatched,
            isEmail: true,
            passwordStrength: check.passwordStrength,
            user: data
        })
    }
}

    exports.getUserDetails =(req, res, next)=>{
        console.log("inside getuserdetails method");
        console.log(req.params.userId);
        const id = req.params.userId;
        const user = User.findById(id, user=>{

            res.render("user-details", {
                userDetail: 'user details',
                user: user
            });
        });
    }


    exports.getIndexPage =(req, res, next)=>{
        console.log("inside index page fetch method");
        
        User.fetchUsers(users=>{
            console.log(users);
            res.render("index", {
                userDetail: 'homepage',
                users: users
            });
        })
    }

    exports.editUser = (req, res, next)=>{
        console.log("inside edit user");
        const userId = req.params.userId;
        const user = User.findById(userId, user=>{

            res.render("edit-user", {
                isTrue: true,
                user: user
            });
        });
    }

    exports.postEditUser = (req, res, next)=>{

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
       

        console.log("inside postEditUser");
        const id = req.body.userId;

        const data = {
            id: id,
            name: name,
            email: email, 
            password: password,
            confirmPassword: confirmPassword,
            
        };

        const check = User.validatePassword(data);
        console.log(check);
        if(check.isTrue){
            User.editUser(data, user=>{
                res.render("user-details", {
                    userDetail: 'user details',
                    user: user
                });
               });
            
        }
        else{
            console.log("inside else")
            res.render('edit-user', {
                isTrue: check.isTrue,
                isNameValid: check.isNameValid,
                isPassValid: check.isuserPasswordValid,
                ispassMatched: check.ispassMatched,
                passwordStrength: check.passwordStrength,
                isEmail: true,
                user: data
            })
        }
    }

    exports.deleteUser= (req, res, next)=>{

        console.log("inside delete user")
        const userId = req.params.userId;
        User.deleteUserById(userId);
        res.redirect('/');

       }
    