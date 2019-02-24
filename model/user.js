data = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
  );

const getDataFromFile =cb =>{
    console.log("inside getDataFromFile");
     fs.readFile(p, (err, fileContent)=>{
        
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class User{
    constructor(name, email, password, confirmPassword, id){
        this.name = name;
        this.email = email;
        this.password = password,
        this.confirmPassword = confirmPassword;
        this.id = id;
    }

    static validatePassword(user){
           console.log("inside validate Password ");
           const  isNameValid = user.name !== "";
           const isuserPasswordValid = user.password !== ""
           const ispassMatched= user.password === user.confirmPassword;
           const passwordStrength = (user.password.length > 8);
            return {
                isNameValid: isNameValid,
                isuserPasswordValid: isuserPasswordValid,
                ispassMatched: ispassMatched,
                isTrue: isNameValid && isuserPasswordValid && ispassMatched,
                passwordStrength: passwordStrength
            };
        };


    save(){
        console.log("inside save method");
        console.log(this);
         getDataFromFile(users=>{
            const length = users.length;
            console.log(length);
            this.id = length + 1;
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), err=>{
            });
        })
    }

    static findById(id, cb){
        console.log("inside find by id method")
        console.log(id);
        getDataFromFile(users=>{
            const user =  users.find(user => user.id.toString() === id.toString());
            console.log(user);
            cb(user);
        })

    }

    static editUser(data, cb){
            console.log("inside eedit user");
            getDataFromFile(users=>{
                let updatedUsersData = users;
                const userIndex =  users.findIndex(user => user.id.toString() === data.id);
                const userToUpdate =  updatedUsersData[userIndex];
                userToUpdate.name = data.name;
                userToUpdate.email = data.email;
                userToUpdate.password = data.password;
                userToUpdate.confirmPassword = data.confirmPassword;
                updatedUsersData[userIndex] = userToUpdate;
                fs.writeFile(p, JSON.stringify(updatedUsersData), err=>{
                });
                cb(userToUpdate);

            })
        }


    static deleteUserById(id, cb){
        console.log("inside eedit user");
        getDataFromFile(users=>{
            let updatedUsersData =  users.filter(user => user.id.toString() !== id.toString());
            fs.writeFile(p, JSON.stringify(updatedUsersData), err=>{
                
            });
        })
    }

    static fetchUsers(cb){
         console.log("inside fetch all");
           getDataFromFile(cb);
    }

}