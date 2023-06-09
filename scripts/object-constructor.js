function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
} 

//This function will greet with two parameters. Parameter1 is firstName and Parameter2 is lastName. When I show result, it will concatenate the strings and parameters to say Hello firstName lastName //

function farewell(firstName, lastName){
    console.log('Goodbye ' + firstName + ' ' + lastName);
} 

//This function will farewell with two parameters. Parameter1 is firstName and Parameter2 is lastName. When I show result, it will concatenate the strings and parameters to say Goodbye firstName lastName //

greet('Daniel','Lancheros');
greet('John','Lancheros');
farewell('Daniel','Lancheros');
farewell('John','Lancheros');

// These names are the arguments I am assigning to the parameters in the functions, respectively. 