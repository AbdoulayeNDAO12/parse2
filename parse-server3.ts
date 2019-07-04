//Parse Crash Course #3 - Setting/unsetting array properties, destroying objects
let Parser = require("parse/node");
Parser.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parser.serverURL = "https://parseapi.back4app.com";

async function run1() {
    let Persons = Parser.Object.extend("Person");
    let query = new Parser.Query(Persons);
    let persons = await query.get("twSNC3HlZo");
    persons.addUnique('telephone',776925962)
    persons.addUnique('telephone',776925962)
    persons.unset('telephone')
    persons.remove('livingCity','Sao Paulo')
    persons.destroy()
    persons.save()
    persons.fetch()
  }
  run1()
  