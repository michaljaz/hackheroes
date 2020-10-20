const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

var baza={}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function LoadUsers(callback){
  var result={};
  var loadFolder=`${__dirname}/userdb/`;
  fs.readdir(loadFolder, (err, files) => {
    var filesToLoad=[]
    files.forEach(file => {
      filesToLoad.push(file)
    });
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
function checkUser(email,password,callback){
  LoadUsers((users)=>{
    var war=true;
    Object.keys(users).forEach((uuid)=>{
      var user=users[uuid];
      if(user.email==email && user.password==password){
        callback("OK");
        war=false;
      }
    })
    if(war){
      callback("ERR")
    }
  })
}
function RegisterNewUser(email,password,callback){
  var random_uuid=uuidv4();
  LoadUsers((users)=>{
    var war=true;
    Object.keys(users).forEach((uuid)=>{
      var user=users[uuid];
      if(user.email==email){
        callback("EXIST")
        war=false
      }
    })
    if(war){
      var data={
        email,
        password
      }
      fs.writeFileSync(`${__dirname}/userdb/${random_uuid}.json`,JSON.stringify(data,null,4));
      callback("OK")
    }

  })

}

app.get('/login/', (req, res) => {
  var email=req.query.email;
  var password=req.query.password;
  console.log(`Użytkownik ${email} loguje się`)
  checkUser(email,password,(resp)=>{
    if(resp=="OK"){
      res.json({resp:"ok"})
    }else{
      res.json({resp:"err"})
    }
  })
})
app.get('/register/', (req, res) => {
  var email=req.query.email;
  var password=req.query.password;
  console.log(`Użytkownik ${email} rejestruje się`)
  RegisterNewUser(email,password,(resp)=>{
    if(resp=="OK"){
      res.json({resp:"ok"})
    }else{
      res.json({resp:"exist"})
    }
  })
})
app.get('/forgot_pwd/', (req, res) => {
  res.send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
