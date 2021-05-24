function isNumberinRange(number){
    if(typeof number !="number"){
        alert ("Ошибка");
    }
    else {
        if(number > 0 && number < 10){
            console.log("Условие выполнено")
            return true;
        }
        else {
            console.log("Условие не выполнено")
            return false;
        }
    }
}
let number = +prompt("Число");
console.log(isNumberinRange(number));