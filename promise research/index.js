// let myPromise = new Promise(function( myReject,myResolve) {
//     // "Producing Code" (May take some time)
//       var message = "I am not coming"
//       myReject(message); // when successful
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { console.log(`${value}, pick him`) },
//       function(error) { console.log(`${error}, leave him `) }
//     );

// let myPromise = new Promise(function( myReject,myResolve) {
//     // "Producing Code" (May take some time)
//       var message = "I am not coming";
//       setTimeout(function(){myReject(message)},3000); // when successful
//     }).then(
//       function(value) { console.log(`${value}, pick him`) },
//       function(error) { console.log(`${error}, leave him `) }
//     );


let myPromise = new Promise(function(resolve,reject){
    var data = {
        name:"Sunil",
        age:21,
        place:"palayapalayam"
    }
        // console.log(`Hi I am ${data["name"]} my age is ${data["age"]} and I am From ${data["place"]}`);
        setTimeout(function(){resolve(console.log(`hi i am ${data.name} my age is ${data.age} i am from ${data.place}`))},3000);
});

myPromise.then(
    function(value) {
        // console.log(data[name])
        // console.log(` Hi I am ${data.name} my age is ${data.age} and I am From ${data.place}`);
    },
    function(error){
        console.log(`error`);
    }
)