
const {fullName} = require('./names.js')
const {hobbies} = require('./hobbies.js')

function peopleHobbies() {
 
   const person = {
        fullName: fullName("Michele","Fumi"),
        hobbies: hobbies("Music", "Gaming", "Movies"),
    }    
console.log(person);

}

peopleHobbies()