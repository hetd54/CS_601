const facilitatorList = ["JEN", "BEHDAD", "CHRIS", "CHRISTIAN", "JOSH"];
const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let message = ""


const onSubmit = () => {
    console.log("Here");
    const nameFirst = document.getElementById("firstName").value;
    const nameLast = document.getElementById("lastName").value;
    const inputtedFacilitator = document.getElementById("facilitator").value;
    const nameError = document.getElementById("nameMessage");
    const facilitatorError = document.getElementById("facilitatorMessage");
    
    if (validateName(nameFirst, "first") != true){
        nameError.innerHTML = message;

        return false;
    }
    if (validateName(nameLast, "last") != true){
        nameError.innerHTML = message;
        return false;
    }
    if (validateFacilitator(inputtedFacilitator) != true) {
        facilitatorError.innerHTML = message;
        return false;
    }
    return false;

};

const validateName = (name, type) => {
 if (symbols.test(name)) {
    // push error message to DOM:
    message ="Your "+ type + " name (" + name + ") has invalid characters!";
    return message;
 } else if (name.length < 2) {
    // push error message to DOM:
    message = "First name and last name must contain a minimum of two characters!";
    return message;
 } else {
    return true;
 }
 
};

const validateFacilitator = (facilitator) => {
    if (facilitatorList.includes(facilitator.toUpperCase())){
        return true;
    } else {
        // push error message to DOM:
        message = facilitator + " is not a facilitator in this course!";
        return message;
    }
};