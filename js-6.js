const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function isEven(arr){
    let evenArr = [];
    for(let i=0;i<=arr.length;i++){
        if(arr[i] % 2 == 0 && arr[i] != 0){
            evenArr.push(arr[i]);
        }
    }
    console.log("Исходный массив",arr);
    console.log("Новый массив",evenArr);
}
isEven(arr);