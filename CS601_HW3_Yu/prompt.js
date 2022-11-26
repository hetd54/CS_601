let person = "";
let num1;
let num2;
let total;
let doAgain = true;

// function to add the two numbers together:
// Preferred function declaration:
const addNumbers = (num1, num2) => {
    total = num1 + num2;
    if (total > 10){
        alert(total + "\nThat  is a big number.");
    } else {
        alert(total + "\nThat is a small number.");
    }

};

// Step 1: Welcome the user
alert("Welcome to homework 3!");

/* Step 2: Prompt the user for their name
We want to do this until they enter a valid
name, which I am considering to be anything 
except empty or a space. I will use a
"Do-while" loop because I want validation
occurring at the END of the loop */
do {
    person = prompt("Please tell me your name: ");
} while (person == "" || person == " ");


// Step 3: Display user's name as an alert
alert("Hello, " + person + "!");

// While loop to keep doing this until person says to stop
while (doAgain == true){
    // Step 4: prompt user for two numbers
    do {
        num1 = Number(prompt("Please enter a valid number:"));
    } while (isNaN(num1));

    do {
        num2 = Number(prompt("Please enter a second valid number:"));
    } while (isNaN(num2));

    addNumbers(num1, num2);

    if(confirm("Press OK to add two more numbers!") == false){
        doAgain = false;
        break;
    }

}