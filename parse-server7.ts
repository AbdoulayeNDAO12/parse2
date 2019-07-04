//Parse Crash Course #7 - Building database relations - 1 to 1
const Parsee = require("parse/node");
Parsee.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);

Parsee.serverURL = "https://parseapi.back4app.com";

 function create() {
  let Personne = Parsee.Object.extend("Person");
  let personne = new Personne();
  personne.set("name", "Abdoulaye");
  personne.set("age", 26);
  personne.set("livingCity", "Thies");
  personne.set("skills", ["football", "BasketBall", "VolleyBall"]);
  personne.set("distanceFromCompany", 400);

  let Adresse = Parsee.Object.extend("Adresse");
  let adresse = new Adresse();
  adresse.set("streetName", "Roukhou djine");
  adresse.set("number", 34);
  adresse.set("owner", personne);
  adresse.save();
}
create();
