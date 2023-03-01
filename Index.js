// Find method 
const oddNumber = [
    {userID: 1, firstName: "hamza", productName: "Baloon", price: 3050},
    {userID: 2, firstName: "tayyab", productName: "Apple", price: 6030},
    {userID: 3, firstName: "zahiab", productName: "Banana", price: 5020},
];

const ans = oddNumber.find((number) =>{
    return number.userID===1;
});
console.log(ans);
