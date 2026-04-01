// object

let Info = {
    Name : "Amaresh",
    Age : 23 , 
    Roll_No : 238964751634n ,
    City : "Kolkata" 
};

console.log(Info);

// function

function sum(x , y){
    let c = x+y;
    console.log(c);
    return c;
}
sum(2,3);


// Using Symboll data type
const nameKey = Symbol("nameKey");

const user = {
    [nameKey] : "Amaresh"
};

const uniqueID = Symbol("uniqueID");
user[uniqueID] = 101;

let inputName = prompt("Enter your name");

if (inputName === user[nameKey]){
    console.log("Your id is: ",user[uniqueID]);
} else {
    console.log("Wrong User")
}

