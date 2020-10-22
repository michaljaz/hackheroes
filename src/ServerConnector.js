import NetInfo from "@react-native-community/netinfo";


//callback: true,false
function IsOnline(callback){
  NetInfo.fetch().then(resp=>{
    callback(resp.isConnected)
  })
}

//callback: "ok","ok_data","err"
function Login(email,password,callback){
  fetch(`https://senior-plus.fly.dev/login/?password=${password}&email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      callback(json.resp)
    })
}

//callback: "ok","exist"
function Register(email,password,callback){
  fetch(`https://senior-plus.fly.dev/register/?password=${password}&email=${email}`)
  .then((response) => response.json())
  .then((json) => {
    callback(json.resp)
  })
}

//callback: user,"err"
function GetUserData(email,password,callback){
  fetch(`https://senior-plus.fly.dev/get_data/?password=${password}&email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      callback(json.resp)
    })
}

//callback: "ok","err"
function SetUserData(email,password,user,callback){
  fetch(`https://senior-plus.fly.dev/get_data/?user=${JSON.stringify(user)}`)
    .then((response) => response.json())
    .then((json) => {
      callback(json.resp)
    })
}

export {
  Login,
  Register,
  IsOnline,
  GetUserData,
  SetUserData
}
