function SumYear(number){
    let sum=0;
    let str=String(number);
    for(let i=0;i<str.length;i++){
        sum += Number(str[i]);
        
    }
    if(sum == 13){
        console.log("Условие выполнено",sum);
    }
    else {
        console.log("Условие не выполнено");
    }
    
}
let number = +prompt("Число");
console.log(SumYear(number));