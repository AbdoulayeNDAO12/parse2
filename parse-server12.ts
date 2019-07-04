//Parse Crash Course #13 - Logging out users and reseting passwords
let Parser12 = require("parse/node");
Parser12.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);

Parser12.serverURL = "https://parseapi.back4app.com";

async function acl(){
    let user =  Parser12.User.logIn('andao','alzheimer')
     if(user){
        let Note = Parser12.Object.extend('Note')
        let queryNote = new Parser12.Query(Note)

        Parser12.User.enableUnsafeCurrentUser()

        let result = await queryNote.find()
        for(let i = 0; i<result.length; i++){
           console.log(result[i].get('content'))
        }
       // user = Parser12.User.logOut()
        //console.log('user logged out')
        
        //let results = await queryNote.find()
        //for(let i = 0; i<result.length; i++){
          //  console.log(results[i].get('content'))
         //}
         await Parser12.User.requestPasswordReset('abdoulayendao12@gmail.com')
        }
     }
//}
acl()