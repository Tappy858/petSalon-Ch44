function saveArray(item) {
    let anArray = readArray(); // Retrieve existing array from local storage
    anArray.push(item); // Add the new item to the array
    let st = JSON.stringify(anArray); // Convert the updated array to a JSON string
    localStorage.setItem("services", st); // Store the JSON string in local storage
}

function readArray(){
    //get the info from the local storage
    let data=localStorage.getItem("services");
    if(!data){//not data?
        return []; //creating the array the first time
    }else{
        //parse it back into an array (object)
        let list = JSON.parse(data);
        //display the array on the console
        return list;
    }
}