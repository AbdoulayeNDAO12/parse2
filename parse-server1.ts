//CREATING AN OBJECT
const Parse = require('parse/node')
Parse.initialize('4pcCaPsPwocph2W7eiCHNcQ08Er8Z7hZ14JNaXwz','LMRpUEQheLKg31zUdinF0IxImeSWieGhvjBbKJTe');
Parse.serverURL = 'https://parseapi.back4app.com';

//CREATING AN OBJECT
let Person = Parse.Object.extend('Person',{
    isAdult : function () {
       return this.get('age') > 18
    },
    initialize : function (attrs, options) {
       return this.hasChildren = false
    },
    create : function (livingCity) {
        let person = new Person()
        person.set('livingCity',livingCity)
        return person
    }

})
let person = new Person()
let person2 = person.create('Sao Paulo')
person2.set('name','My second name')
person2.save()
console.log(person2.get('livingCity'))
console.log(person2.hasChildren)
/*let person = new Person();
person.set('name','Alex')
person.set('age',37)
person.save()
*/
