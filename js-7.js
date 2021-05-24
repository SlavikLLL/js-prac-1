function getDivisors(number){
    let arr= [];
    for(let i=0 ; i<= number;i++){
        if(number % i ==  0){
            arr.push(i);
        }
    }
    return arr;
}
let number = +prompt("Число");
console.log(getDivisors(number));