//object literal

let petSalon = {
    name:"The fashion Pet",
    address:{
        street:"Sesame St",
        number:"123",
        zip:"92120"
    },
    hours:{
        open:"8:00 am",
        closed:"4:00 pm"
    },
    pets:[]
}

//object constructor (function)
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    console.log("Registering");
    //get the values from the input
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;

    console.log(inputAge,inputGender,inputName,inputBreed);

    //creating the obj
    let newPet = new Pet(inputAge,inputGender,inputName);

    //push the object
    petSalon.pets.push(newPet);

    //display the pets array on the console
    console.log(petSalon.pets);

}

//creating pets using constructor
let p1 = new Pet("scooby",60,"male");
let p2 = new Pet("yolo",50,"male");
let p3 = new Pet("boo",40,"male");
//pushing pets into array
petSalon.pets.push(p1,p2,p3);

console.log(petSalon.pets);
//console.log(p1,p2,p3);



//display registered pets count
//function displayPetCount() {
//     const petCount = document.getElementById("petsCount");
//     petCount.textContent = `Total Pets Registered: ${petSalon.pets.length}`;
// }
// displayPetCount();

// //displaying names
// function displayPetNames() {
//     const petNames = document.getElementById('petsNames');
//     petNames.innerHTML = ''; // Clear existing list

//     // Loop through the pets array and add each pet name to the list
//     for (let i = 0; i < petSalon.pets.length; i++) {
//         const listPets = document.createElement('li');
//         listPets.textContent = petSalon.pets[i].Name;
//         petNames.appendChild(listPets);
//     }
// }
// displayPetNames();


// console.table(petSalon.pets);

// console.log(petSalon.pets[0].name);
// console.log(petSalon.pets[1].name);
// console.log(petSalon.pets[2].name);

//total of elements in an array
//console.log(petSalon.pets.length);

//document.getElementById("title").innerHTML=petSalon.name;