let services=[]; //array

//creating the constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//create the register function
function register(){
    //console.log("adding new services");

    let inputDescription=$("#txtDescription").val();
    let inputPrice=$("#txtPrice").val();

    if (inputDescription && inputPrice) {
        let newService= new Service(inputDescription,inputPrice);
        //services.push(newService);
        //console.log(services);
        saveArray(newService);

        displayNotification("Service registered successfully", "alert-success");
    } else {
        displayNotification("Please fill in all fields", "alert-danger");
    }
}



function displayNotification(message, alertType) {
    $("#notification").removeClass("alert-success alert-danger");
    $("#notification").addClass(alertType).text(message).fadeIn(300).delay(2000).fadeOut(300);
}

//create the initial function
function init(){
    let s1= new Service("grooming", 30);
    services.push(s1);
    //hook events
    $("#btnRegister").on('click',register);

}
//wait for render the HTML
window.onload=init;
