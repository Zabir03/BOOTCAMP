// function a(){
//     console.log("Hi i am HOF");
    
// }
// function b(){
//     console.log("Hi I am in HOF");
// }
// a(b);


// case 2
// function a(){
//     console.log("Hi i am case 2");
//     function b(){
//         console.log("Hi i am in case 2");

//     }
//     return b;
// }
// let ans=a();
// console.log(ans);

//callback Function
function a(b){ //hof
    console.log("hi i am hof");
    b();
}
function b(){
    console.log("hii i am in hof");
}

a(b);
