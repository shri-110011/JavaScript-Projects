const wendy = {  "id": 1,
                 "firstName": "Wendy", 
                 "lastName":  "Harper",
                 "city":      "Tulsa"
            }

function bio(person) {
return `<p>
    <h1>
        <span>${person.firstName}</span>
        <span>${person.lastName}</span>
     </h1>
        <address>${person.city}</address>
    </p>`
}
// console.log(bio(wendy))