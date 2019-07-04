//Parse Crash Course #4 - Basic queries

let Parses4 = require("parse/node");
Parses4.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parses4.serverURL = "https://parseapi.back4app.com";

async function fonctions() {
    
let Person = Parses4.Object.extend("Person")
  let query4 = new Parses4.Query(Person)
  //query4.equalTo('age', 13)
 //query4.greaterThan('age',14)
  //query4.equalTo('name','My second name4')
  //query4.greaterThanOrEqualTo('age',12)
  //query4.lessThanOrEqualTo('age',12)
  query4.lessThan('age',12)
  let result = await query4.find()
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].get('livingCity'))
    console.log(result[i].get('age'))
  }
}
fonctions();
