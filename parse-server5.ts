//Parse Crash Course #5 -Sorting, limiting and skipping results
let Parser5 = require("parse/node");
Parser5.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parser5.serverURL = "https://parseapi.back4app.com";

async function fonction5() {
    
let Person = Parser5.Object.extend("Person")
  let query4 = new Parser5.Query(Person)
  query4.lessThan('age',18)
  query4.ascending('age')
  query4.limit(3)
  query4.skip(3)
  let result = await query4.find()
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].get('livingCity'))
    console.log(result[i].get('age'))
  }
}
fonction5();