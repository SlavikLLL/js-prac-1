function getDigitsSum(number){
    let sum=0;
    let str=String(number);
    for(let i=0;i<str.length;i++){
        sum += Number(str[i]);
    }
    return sum;
}
let number = +prompt("Число");
console.log(getDigitsSum(number));