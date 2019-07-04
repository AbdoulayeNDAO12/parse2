//Parse Crash Course #6 -Contained and Existing properties
let Parser6= require("parse/node");
Parser6.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parser5.serverURL = "https://parseapi.back4app.com";


async function fonction() {
    
let Person = Parser6.Object.extend("Person")
  let query4 = new Parser6.Query(Person)
  //query4.containedIn('name',[ 'My second name2','My second name17'])  
  //query4.notContainedIn('name',[ 'My second name2','My second name17'])  
  query4.doesNotExist('name')
  let result = await query4.find()
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].get('livingCity'))
    console.log(result[i].get('age'))
  }
}
fonction();