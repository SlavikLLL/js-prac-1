const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];
function isNumberInRange(arr){
    let positiveArr=[];
    for (let i=0;i<=arr.length-1;i++){
        if(arr[i] >= 0 ){
            positiveArr.push(arr[i]);
        }
       
        
    }
    console.log("Исходный массив ",arr);
    console.log("Новый массив",positiveArr);
}
isNumberInRange(arr);