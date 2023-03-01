const multiplyFunc = [4,5,3,6,2,7,9];

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
