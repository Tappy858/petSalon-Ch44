function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array (for)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create html template
        card += `
        <tr id="${pet.id}">
            <td> Name: ${pet.name}</td>
            <td> Age: ${pet.age}</td>
            <td> Gender: ${pet.gender}</td>
            <td> Service: ${pet.service}</td>
            <td> Breed: ${pet.breed}</td>
            <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
        </tr>
        `
        }
DIV.innerHTML=card;
//insert the html templat in the register.html
}