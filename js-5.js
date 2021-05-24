function isEven(number){
    if(typeof number !='number'){
        console.log("Ошибка");
    }
    else {
        if(number % 2 == 0){
            console.log("Условие выполнено");
            return true;

        }
        else {
            console.log("Условие не выполнено")
            return false;
        }
    }
}
let number = +prompt("Число");
console.log(isEven(number));