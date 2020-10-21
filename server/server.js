const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

//Funkcja generująca losowy ciąg znaków (uuidv4)
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

//Funkcja załadowująca wszystkich użytkowników
function loadUsers(callback){
  var result={};
  var loadFolder=`${__dirname}/userdb/`;
  fs.readdir(loadFolder, (err, files) => {
    var filesToLoad=[]
    files.forEach(file => {
      filesToLoad.push(file)
    });
    if(filesToLoad.length==0){
      callback({})
      return
    }
    var loadedFiles=0;
    for(var i=0;i<filesToLoad.length;i++){
      var file=filesToLoad[i];
      var uuid=file.split(".")[0]
      var filePath=loadFolder+file;
      ((filePath,uuid)=>{
        fs.readFile(filePath,'utf8',function (err,data){
          result[uuid]=JSON.parse(data);
          loadedFiles++;
          if(loadedFiles==filesToLoad.length){
            callback(result)
          }
        });
      })(filePath,uuid)
    }
  });
}

//Funkcja szukająca użytkownika
function findUser(email,callback){
  var war=true;
  loadUsers((users)=>{
    Object.keys(users).forEach((uuid)=>{
      var user=users[uuid];
      if(user.email==email && war){
        callback(users[uuid])
        war=false
      }
    })
    if(war){
      callback(null)
    }
  })
}

//Rejestracja nowego użytkownika
function registerNewUser(email,password,callback){
  findUser(email,(user)=>{
    if(user!=null){
      callback("EXIST")
    }else{
      var random_uuid=uuidv4()
      var data={
        dataRegistered:false,
        email,
        password,
        uuid:random_uuid,
        userInfo:{
          name:"",
          surname:"",
          age:0,
          type:""
        }
      }
      fs.writeFileSync(`${__dirname}/userdb/${random_uuid}.json`,JSON.stringify(data,null,4));
      callback("OK")
    }
  })
}

//Update'owanie pliku użytkownika
function registerUserData(email,password,name,surname,age,type,callback){
  console.log(`Rejestrowanie danych użytkownika: ${email}`)
  findUser(email,(user)=>{
    if(user==null){
      callback("NO_USER")
    }
    if(user.password==password){
      user.userInfo={
        name,surname,age,type
      }
      user.dataRegistered=true;
      console.log(user)
      fs.writeFileSync(`${__dirname}/userdb/${user.uuid}.json`,JSON.stringify(user,null,4));
      callback("OK")
    }else{
      callback("INC_PWD")
    }
  })
}

//Przyjmowanie requestów logowania
app.get('/login/', (req, res) => {
  var email=req.query.email;
  var password=req.query.password;
  console.log(`Użytkownik ${email} loguje się`)
  findUser(email,(user)=>{
    if(user==null){
      //Użytkownik nie istnieje
      res.json({resp:"err"})
    }else if(user.password==password){
      if(user.dataRegistered){
        //Już dane zostały pobrane wszystko ok
        res.json({resp:"ok"})
      }else{
        //Wymaga podania danych (DataScreen)
        res.json({resp:"ok_data"})
      }
    }else{
      //Złe hasło
      res.json({resp:"err"})
    }
  })
})

//Przyjmowanie requestów rejestracji
app.get('/register/', (req, res) => {
  var email=req.query.email;
  var password=req.query.password;
  console.log(`Użytkownik ${email} rejestruje się`)
  registerNewUser(email,password,(resp)=>{
    if(resp=="OK"){
      res.json({resp:"ok"})
    }else{
      res.json({resp:"exist"})
    }
  })
})

//Przyjmowanie requestów podawania dodatkowych danych
app.get('/register_user_data/', (req, res) => {
  var email=req.query.email;
  var password=req.query.password;
  var name=req.query.name;
  var surname=req.query.surname;
  var age=req.query.age;
  var type=req.query.type;
  registerUserData(email,password,name,surname,age,type,(resp)=>{
    if(resp=="OK"){
      res.json({resp:"ok"})
    }else if(res=="NO_USER"){
      res.send({resp:"no_user"})
    }else{
      res.send({resp:"err"})
    }
  })

})

//Nasłuchiwanie
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
