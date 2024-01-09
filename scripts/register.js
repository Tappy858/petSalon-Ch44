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
let counter=0
//object constructor (function)
function Pet(name,age,gender,service,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.id=counter++;
}
function isValid(aPet){
    let validation=true;
    $("input").removeClass("bg-red");

    if(aPet.name==""){
        validation=false;
        $("#txtName").addClass("bg-red");
    }
    if(aPet.age==""){
        validation=false;
        $("#txtAge").addClass("bg-red");
    }
    return validation;
}
function register(){
    console.log("Registering");
    //get the values from the input
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    //console.log(inputAge,inputGender,inputName,inputBreed);
    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed);

    //push the object
    if(isValid(newPet)==true){
    petSalon.pets.push(newPet);
    //display the pets array on the console
    //console.log(petSalon.pets);
    displayPetCount();  // Call the function to update the count
    displayPetCards();
    $("input").val(""); //clear the inputs
    showNotification("notifications","alert-success","Registration was successful");
    }else{
        $("#notifications").text("Insert all required fields").addClass("alert-danger").fadeIn(300).delay(2000).slideUp(300);
    }
}

function showNotification(id,styling,message){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(300).delay(2000).slideUP(300);
}

function deletePet(petID){
    console.log("Deleting pet" + petID);
    let deleteIndex;
    document.getElementById(petID).remove(); //remove from html
    for(let i=0;i<petSalon.pets.length;i++){//traveling array
        let pet=petSalon.pets[i]; //getting the current pet
        if(pet.id==petID){
            deleteIndex=i; //we found the pet, store the index
        }
        petSalon.pets.splice(deleteIndex,1);//remove the pet from the array
        displayPetCount(); // update the pet count
    }
}
function init(){
//creating pets using constructor
let p1 = new Pet("scooby",60,"male","Grooming", "Duck");
let p2 = new Pet("yolo",50,"male","Grooming", "Cat");
let p3 = new Pet("boo",40,"male","Grooming", "Dog");
//pushing pets into pets array
petSalon.pets.push(p1,p2,p3);

//console.log(petSalon.pets);
//console.log(p1,p2,p3);
displayPetCards ();
displayPetCount();

//hook events
$("#notifications").show();

}

window.onload=init; //waits for render the HTML

//display registered pets count
function displayPetCount() {
    const petCount = document.getElementById("petsCount");
    const count = petSalon.pets.length;

    petCount.textContent = `Total Pets Registered: ${count}`;
}
displayPetCount();

//displaying names
// function displayPetNames() {
//     const petNames = document.getElementById('petsNames');
//     petNames.innerHTML = ''; // Clear existing list

//      // Loop through the pets array and add each pet name to the list
//     for (let i = 0; i < petSalon.pets.length; i++) {
//         const listPets = document.createElement('li');
//         listPets.textContent = petSalon.pets[i].Name;
//         petNames.appendChild(listPets);
//     }
//}
// displayPetNames();


// console.table(petSalon.pets);

// console.log(petSalon.pets[0].name);
// console.log(petSalon.pets[1].name);
// console.log(petSalon.pets[2].name);

//total of elements in an array
//console.log(petSalon.pets.length);

//document.getElementById("title").innerHTML=petSalon.name;