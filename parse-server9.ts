//Building database relations - many-to-many
let Parser9 = require("parse/node");
Parser9.initialize(
  "4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz",
  "LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe"
);
Parser9.serverURL = "https://parseapi.back4app.com";

async function many () {
    let Person = Parser9.Object.extend("Person")
    let queryPerson = new Parser9.Query(Person)
    queryPerson.equalTo('name','Abdoulaye')
    let result = await queryPerson.first()
    console.log('name:'+result.get('name'))
    let relation = result.relation('likes')
    let Post = Parser9.Object.extend("Post")
    let postQuery = new Parser9.Query(Post)
    let resltPost = await postQuery.find() 
    relation.add(resltPost)
    result.save()
}
many()