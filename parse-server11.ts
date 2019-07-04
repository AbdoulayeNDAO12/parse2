//Parse Crash Course #11 - Protecting objects with ACLs (Access Control Lists)
let Parser11 = require("parse/node");
Parser11.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);

Parser11.serverURL = "https://parseapi.back4app.com";

async function acl(){
    let user =  Parser11.User.logIn('andao','alzheimer')
     if(user){
        let Note = Parser11.Object.extend('Note')
       // let publicNote = new Note()
        //let privateNote = new Note()
        //publicNote.set('content','This is a public note')
        //privateNote.set('content','This is a private note')
        //privateNote.setACL(new Parser11.ACL(user))
        //await publicNote.save()
        //await privateNote.save()*/
        //let queryNote = new Parser11.Query(Note)
        //let result = await queryNote.find({sessionToken: user.get('sessionToken')})
        //for(let i = 0; i<result.length; i++){
          //  console.log(result[i].get('content'))
          
        let privateNote = new Note()
        privateNote.set('content','This is another private note')
        let myACL = new Parser11.ACL()
        myACL.setReadAccess(user,true)
        myACL.setWriteAccess(user,false)
        privateNote.setACL(myACL)
        await privateNote.save()
        }
     }
//}
acl()