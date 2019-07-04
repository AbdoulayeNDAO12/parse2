//Parse Crash Course #8 - Building database relations - 1 to many
let Parser8 = require("parse/node");
Parser8.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);

Parser8.serverURL = "https://parseapi.back4app.com";

async function creer() {
  let Auteur = Parser8.Object.extend("Person");
  let auteur = new Auteur();
  auteur.set("name", "Modou");
  auteur.set("age", 34);
  auteur.set("livingCity", "Thies");
  auteur.set("skills", ["football", "BasketBall", "VolleyBall"]);
  auteur.set("distanceFromCompany", 490);
  let Post = Parser8.Object.extend("Post");
  let post = new Post();
  post.set("title", "La CAN");
  post.set("contenu", "La can a debute depuis...");
  post.set("owner", auteur);
  let post2 = new Post();
  post2.set("title", "Blabla");
  post2.set("contenu", "Bla bla bla ma...");
  post2.set("owner", auteur);
  post.save();
  post2.save();
}
creer();
