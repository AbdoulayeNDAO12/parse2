//RETRIEVING AND UPDATING AN OBJECT
let Parses = require("parse/node");
Parses.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parses.serverURL = "https://parseapi.back4app.com";

async function run() {
  let Persons = Parses.Object.extend("Person");
  let query = new Parses.Query(Persons);
  let persons = await query.get("twSNC3HlZo");
  console.log(persons.get("name"));
  console.log(persons.get("age"));
  persons.increment("age");
  console.log(persons.get("age"));
  persons.save()
  persons.fetch()
}
run()
