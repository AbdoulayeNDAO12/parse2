let Parser1 = require("parse/node");
Parser1.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parser1.serverURL = "https://parseapi.back4app.com";

let personss = []
for(let i = 0; i < 10 ; i++){
let Persons = Parser1.Object.extend("Person");
personss[i] = new Persons()
personss[i].set('name','My second name'+i)
personss[i].set('age',12)
personss[i].set('livingCity','City'+i)
personss[i].save()
}