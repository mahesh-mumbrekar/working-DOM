for (let i = 0; i < 10; i++){
    console.log(i)
}

/* for....of loops used in array */



let commonActivities = ['play', 'code', 'read']

for (let Activities of commonActivities) {
    console.log(Activities)
}


/* for....in used in object */

let userDetails = {
    name: 'carl',
    age: 32,
    job:'software enginner'
}

for (let key in userDetails) {
    let output = key + ':' + userDetails[key]
    console.log(output)
}

