
// var myList = ["abdo","ali","mohammed","Jamal"];
// var myList2 = ["Rachid","Ibrahim","Adil","Jamal"];

// for (let i = 0; i < myList.length; i++) {
//     console.log( myList[i]);
// }

// myList2.forEach(x => {
//     console.log(x);
// });



var s = "hello";
var n = 45;
var l = [45,true,"mohammed",{
    name : "abde",
    age : 50,
    color : "red"
}];
var b = true;
var o = {
    name : "abde",
    age : 50,
    locked : true,
    color : "red",
    lang : ["english","frensh","arabic"],
    show : function show() {
        console.log('hello');
    }
};
var f = function test() {
    
};

// console.log(l);


var persons = [
    {
        name : "hassan",
        age : 45,
        color : "blue",
        paid : false
    },
    {
        name : "omar",
        age : 20,
        color : "brown",
        paid : true
    },
    {
        name : "ali",
        age : 80,
        color : "red",
        paid : true
    },
    {
        name : "mohammed",
        age : 10,
        color : "yellow",
        paid : false
    },
];


// console.log(list5);

persons.forEach(item => {
    // console.log(item);
    if (item.paid == true) {
        console.log(item);
        
    }
});

// for (let i = 0; i < list5.length; i++) {
//     console.log(list5[i]);
// }

// console.log(   

//     "Name : "+list5[2].name, "Age : " + list5[2].age,
// );


// if ( 10 < 8) {
//     console.log("yes");
// }else if(5 === "5"){
//     console.log("good");
// }else{
//     console.log("no");
// }