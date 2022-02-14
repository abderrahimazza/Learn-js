
var x = "hello";
var b = 5;
var y = false / true;
var h = undefined;
var n;
var g = null;
var t = {
    name:"monir",
    age: 15,
    color : "red",
};

var w = ["hassna","ali","abderrahim",true,5,t];

var f = function () {
    return ' hhhh'
}

// console.log(w);



// console.log("x", typeof x);
// console.log("b", typeof b);
// console.log("y", typeof y);
// console.log("h", typeof h);
// console.log("n", typeof n);
// console.log("t", typeof t);
// console.log("m", typeof m);
// console.log("f", typeof f);
// console.log("g", typeof g);


// var names = ["ahmed","amina","monir",5,true];

// console.log("names",typeof names);

var names = [
    {
        name:"abderrahim",
        color:"red",
        age : 50
    },
    {
        name:"hassna",
        color:"yellow",
        age : 50
    },
    {
        name:"ali",
        color:"green",
        age : 50
    },

];

for (let i = 0; i < names.length; i++) {
    const x = names[i];
    console.log(x);
    
}

// var number1 = 5;
// var number2 = "6";

// if (number1 === number2) {
//     console.log("yes");
// }else if(number1 != number2){
//     console.log("Goood");
// }else{
//     console.log("No");
// }


// var age = 20;

// if (age >= 20) {
//     console.log("adulte");
// } else if(age > 16) {
//     console.log("younger");
// } else if(age > 10) {
//     console.log("young");
// }else{
//     console.log("Baby");
// }


var firstName = "Ahmed";
var lastName = "samid";

// hna kanjib element f page dyal html
var btn = document.getElementById("btn");

// hna kankteb function dyali ondir fiha shno bagi iw9e3 mlli ghadi n3et 3liha "ana smitha show" imken lik tsmiha ayy smiya 
function show() {
    console.log("Hello " + firstName + " " + lastName);
}

// hna mli kayw9e3 wahd event li hwwa "click" 3la element f page dyal html kan3yet 3la function li ktebt show()
btn.addEventListener("click",show);






// hadi function 
function calc(n) {
    console.log(n + 5);
};

// hna kan3yet 3la function dyali li smitha calc(n) mli kandir reload L page html katkhdem direct
calc(10);