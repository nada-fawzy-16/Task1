// function test(){
//     if(arguments.length !== 2) {
//         throw('Only accepts 2 Parameters')
//     }
//     return 'OK'
// }
// console.log(test(1 ,2 , 3))



// function add(){
//     let sum =0 ;
//     for(let i = 0 ; i< arguments.length; i++) {
//         if(typeof(arguments[i]) !== 'number'){
//             throw('Type Error')
//         }
//        sum += arguments[i]
//     }
//     return sum;
// }
// console.log(add(1 ,2 , 3 , 'm'))



// function rev(){
//     let arr , reversed ;
//     arr = [...arguments]
//     reversed = arr.reverse()
//     return reversed;
// }
// console.log(rev(1 ,2 , 3 , 4))

// let i = 8 , j = 9;
// [i ,j] = [j , i]
// console.log(i , j);



// function maxMin(...arr){
//     separated = [...arr]
//     let  maxVal=0 , minVal=1000;

//     separated.forEach(num => {
//         if(num >= maxVal) {
//             maxVal = num
//         }
//         if(num <= minVal){
//             minVal= num
//         }
//     });
//     console.log(maxVal);
//     console.log(minVal);
// }

// maxMin(1 , 2 ,5 , 9 , 15 )




// function f1(x, y) {
//     if (x > 3) { // 1 > 3  false
//         var z = 3;
//     }
//     else {
//         var zz = 3; 
//     }
//     console.log(z, zz)  //undefined 3
//     zzz = 300;
// }
// f1(1, 3);
// alert(zzz);  //300







// -----------------Day 3------------------
// 1- Function Expression

// let x = function (){
//     console.log("HI");
//     return 11;
// }
// console.log(x());



//  2- callback Function

// function add(x , y){
//     console.log(x , y);
//     return x() + y();
// }
// function num1(){
//     return 10;
// }
// function num2(){
//     return 20;
// }

// console.log(add(num1 , num2));

let arr = [1, 2, 3];
// let x = arr.forEach(test)  //forEach is a callback function

// console.log( 'xxxx' ,x); //Undefiend

// function test(ele , i , arr){
//     // console.log(arguments);
//     console.log("hi" , ele);
// }


// function myForEach(arr , func){
//     for (let i =0 ; i < arr.length ; i++){
//         // console.log('hi');
//         func(arr[i] , i , arr)
//     }
// }
// myForEach(arr , test)

// function test(ele , i , arr){
//     console.log(arguments);
//     console.log(ele);
// }


// setTimeOut -> (func(){} , milliSec) takes function body
// setTimeout(function(){
//     console.log('Hello');
// } , 5000)

// // setInterval -> (func(){} , milliSec) takes function body
// let x = setInterval(function(){
//     console.log('Hello');
// } , 2000)

// clearInterval(x)

// console.log('hi');

// sync async 
// function first(){
//     console.log('1');
//     second();
//     console.log('3');
// }
// function second(){
//     setTimeout(function(){
//         console.log('2');
//     } , 1000)
// }
// first() // 1 3 2 

// console.log('Final');


// 3- arrow function

// let y = (x , z) =>{ 
//     console.log('hi');
//     return x + z
// };
// console.log(y(10 , 15));

// y(10 , 15)


///////////////////////////
let arr1 = [1, 2 , 3];

// let arr2 = arr1; //shallow copy
// arr2.push(12)
// console.log(arr1 , arr2);

// let arr2 = [...arr1]; //deep copy
// arr2.push(15)
// console.log(arr1 , arr2 );





















































