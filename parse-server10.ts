//Using the default Parse User Class to manage users
let Parser10 = require("parse/node");
Parser10.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);

Parser10.serverURL = "https://parseapi.back4app.com";
//Creation d'utilisateur dans la table User
/*let user = new Parser10.User()
user.set('username','affalle')
user.set('email','affalle@gmail.com')
user.set('password','affeleh')
user.set('telephone','0034639376385')
user.save()*/

//Gérer l'authentification d'un user
async function login(){
  let user = await Parser10.User.logIn('andao','alzheimer')
  if(user)
  console.log('Authentification réussie '+user.get('username'))
}
login()
