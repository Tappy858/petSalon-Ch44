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
    pets:[
        {
            Name:"Lucas",
            Age:80,
            Gender:"Male",
            Service:"grooming",
            Breed:"Akita"
        },
        {
            Name:"John",
            Age:60,
            Gender:"Male",
            Service:"nails",
            Breed:"Rottweiler"
        },
        {
            Name:"Chanel",
            Age:50,
            Gender:"Female",
            Service:"grooming",
            Breed:"Barbet"
        }
        
    ]
}
//display registered pets count
function displayPetCount() {
    const petCount = document.getElementById("petsCount");
    petCount.textContent = `Total Pets Registered: ${petSalon.pets.length}`;
}
displayPetCount();

//displaying names
function displayPetNames() {
    const petNames = document.getElementById('petsNames');
    petNames.innerHTML = ''; // Clear existing list

    // Loop through the pets array and add each pet name to the list
    for (let i = 0; i < petSalon.pets.length; i++) {
        const listPets = document.createElement('li');
        listPets.textContent = petSalon.pets[i].Name;
        petNames.appendChild(listPets);
    }
}
displayPetNames();


console.table(petSalon.pets);

console.log(petSalon.pets[0].name);
console.log(petSalon.pets[1].name);
console.log(petSalon.pets[2].name);

//total of elements in an array
//console.log(petSalon.pets.length);

//document.getElementById("title").innerHTML=petSalon.name;