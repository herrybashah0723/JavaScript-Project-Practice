// Find method 
// const oddNumber = [
//     {userID: 1, firstName: "hamza", productName: "Baloon", price: 3050},
//     {userID: 2, firstName: "tayyab", productName: "Apple", price: 6030},
//     {userID: 3, firstName: "zahiab", productName: "Banana", price: 5020},
// ];

// const ans = oddNumber.find((number) =>{
//     return number.userID===1;
// });
// console.log(ans);



const multiplyFunc = [4,6,3,6,2,7,9];

function multFunc(number, index){
    console.log("Index is", index);
    console.log(`${number}*2=`, number*2);
}

for (let i = 0; i < multiplyFunc.length; i++) {
    multFunc(multiplyFunc[i], i)
}

multiplyFunc.forEach(function(number, index){
    console.log("Index is", index);
    console.log(`${number}*2=`, number*2);
});
