import {NetInfo,Platform} from '@react-native-community/netinfo';

//callback: true,false
function IsOnline(callback){
  if (Platform.OS === "android") {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        callback(true)
      } else {
        callback(false);
      }
    });
  } else {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      (isConnected) => {
        NetInfo.isConnected.removeEventListener(
          "connectionChange",
          this.handleFirstConnectivityChange
        );
        if (isConnected === false) {
          callback(false)
        } else {
          callback(true)
        }
      }
    )
  }
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
    alert(json.resp)
    callback(json.resp)
  })
}

//callback: user,"err"
function GetUser(email,password,callback){
  fetch(`https://senior-plus.fly.dev/get_data/?password=${password}&email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      alert(json.resp)
      callback(json.resp)
    })
}

//callback: "ok","err"
function SetUserData(email,password,data,callback){
  fetch(`https://senior-plus.fly.dev/get_data/?password=${password}&email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      alert(json.resp)
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
