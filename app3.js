

// var text = "world";
// var text2 = "balalal";
// var x = `hello ${text} bjdsbvhdsf ${5 * 10} bhldsbghbh` ;

// var h = "hello world";

// console.log(h.length);


// var x = document.getElementById("demo");
// // var v = document.querySelectorAll(".demo");
// var v = document.getElementsByClassName(".demo");

var myName = document.getElementById("name");
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");



// btn.addEventListener("click",function(e) {
//     result.innerHTML =  `My Name is : ${myName.value} `
// });


// btn.onclick = function () {
//     result.innerHTML =  `My Name is : ${myName.value} `
// }

// function show() {
//     result.innerHTML =  `My Name is : ${myName.value} `
// }


// btn.onclick = show

// btn.addEventListener("click",show);


function callMe(x,y) {
    return x + y
};

console.log(

    callMe(5,10),
    callMe(2,10),
    callMe(8,2)
    
);
