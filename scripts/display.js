function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
    // Loop through the pets array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create html template for each pet
        card += `
        <tr id="${pet.id}">
            <td> Name: ${pet.name}</td>
            <td> Age: ${pet.age}</td>
            <td> Gender: ${pet.gender}</td>
            <td> Service: ${pet.service}</td>
            <td>Price: ${getServicePrice(pet.service)}</td>
            <td> Breed: ${pet.breed}</td>
            <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
        </tr>
        `
        }
DIV.innerHTML=card;
//insert the html template in the register.html
// Set the innerHTML of the specified container with the generated HTML
}