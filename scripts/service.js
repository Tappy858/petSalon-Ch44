let services=[]; //array

//creating the constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//create the register function
function register(){
    console.log("adding new services");

    let inputDescription=$("#txtDescription").val();
    let inputPrice=$("#txtPrice").val();

    let newService= new Service(inputDescription,inputPrice);
    services.push(newService);

    console.log(services);
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
