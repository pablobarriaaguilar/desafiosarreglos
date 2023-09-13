var tengohambre = false;
function alwaysHungry(arr) {
    for(i = 0; i< arr.length; i++){
        if( arr[i]== "comida"){
            console.log("delicioso")
        }else if( i == arr.length -1 &&  arr[i] != "comida"){
            console.log("Tengo Hambre");
        }
    }
    
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"





function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i = 0; i< arr.length; i++){
        if(arr[i] > cutoff){

            filteredArr.push(arr[i]);
        }

    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]




function betterThanAverage(arr) {
    var sum = 0;
    var promedio = 0;
    
    for(i = 0; i< arr.length; i++){
        sum = sum + arr[i];

    }

    promedio = sum / arr.length;


    var count = 0

    for(i = 0; i< arr.length; i++){
        
        if( arr[i] > promedio){

            count++;
        }

    }

    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta




function reverse(arr) {
    var newarray= [];
    for(i = arr.length-1; i >= 0; i-- ){
    
    newarray.push(arr[i]);
}
arr = newarray;
return arr;

}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);



function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(i= 2 ; i <n  ; i++){
        fibArr.push ( fibArr[i - 1]+ fibArr[i-2])
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


