
// // Big-O Time Complexity 
// // Summation of numbers
// function summation(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(summation(4))

// function summations(m) {
//     return (m * (m + 1)) / 2
// }
// console.log(summations(4)) // In this Case the Complexity is O(1)-constant


// // Fibonacci Sequence

// function fibonacci(n) {
//     let fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// console.log(fibonacci(4))


// fibonn = (m) => {
//     fibs = [0, 1]
//     for (let i = 2; i < m; i++) {
//         fibs[i] = fibs[i - 1] + fibs[i - 2]
//     }
//     return fibs
// }

// console.log(fibonn(6))

// // Factorial of numbers

// function factorial(num) {
//     let sum = 1;
//     for (let i = 2; i <= num; i++) {
//         sum = i * sum
//     }
//     return sum
// }
// console.log(factorial(4))

// facto = (nums) => {
//     let sumss = 1
//     for (let j = 2; j <= nums; j++) {
//         sumss = sumss * j
//     }
//     return sumss
// }
// console.log(facto(5))   //In this Case the Complexity is O(n) linear

// // Factorial of numbers

// function IsPrime(num) {
//     if (num < 2) {
//         return false
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(IsPrime(5))

// // Power of two

// function power(n) {
//     if (n < 1) {
//         return "Number is smaller than 2"
//     }
//     for (i = 2; i < n; i++) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// console.log(power(5)) //Big-O = O(logn) linear

// function TwoBitWise(n) {
//     if (n < 1) {
//         return false
//     }
//     return (n & (n - 1)) === 0
// }
// console.log(TwoBitWise(5)) //Big-O = O(1) constant

// function recurFibona(n) {
//     if (n < 2) {
//         return n
//     }
//     return recurFibona(n - 1) + recurFibona(n - 2)
// }
// console.log(recurFibona(7)) //Big-O =O(2^n) linear

// // Recursion of Factorial 

// function recurfactorial(n) {
//     if (n < 2) {
//         return 1
//     }
//     return n * recurfactorial(n - 1)
// }
// console.log(recurfactorial(5))
// console.log(recurfactorial(5)) //Big-O = O(n) linear


// // Linear Search 

// function linear(arr, index) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === index) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linear([5, 13, 3, 7, 8], 7)) ///Big-O = O(n) linear

// // function binary(arr,index) {
// //     if(arr===0){
// //         return -1
// //     }
// //     for(let i=0; i<arr.length; i++){
// //     if(arr[i]<=1){
// //         arr=arr.length/2
// //         if(arr[i]=index){
// //             return i
// //         }
// //     }
// // }    
// // }

// function binary(arr, target) {

//     let lefthalf = 0
//     let righthalf = arr.length - 1


//     for (; lefthalf <= righthalf;) {
//         let middle = Math.floor((lefthalf + righthalf) / 2)
//         // console.log(middle)
//         // console.log(righthalf)
//         if (arr[middle] === target) {
//             return middle
//         } if (target < arr[middle]) {
//             righthalf = middle - 1
//         } else {
//             lefthalf = middle + 1
//         }
//     }
//     return -1
// }
// console.log(binary(([1, 2, 3, 4, 5, 6, 7]), 5)) //Big-O = O(logn) linear



// function recurbinary(arr,target) {
//   return search(arr,target,0,arr.length-1)  
// }
// function search(arr,target,leftindex,rightindex) {
//     if(leftindex>rightindex){
//         return -1
//     }
//     let middleIndex =Math.floor((leftindex + rightindex)/2)
//     if(target ===arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return  search(arr,target,leftindex,middleIndex - 1) 
//     }else{
//         return search(arr,target,middleIndex + 1,rightindex)
//     }
// }

// console.log(recurbinary([1,2,3,4,,5,6,7],4)) //Big-O = O(logn) linear

// let array = [6, 20, 3, -2, 10]
// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//       for(j=i+1;j<arr.length;j++)
//       {
//         if(arr[i]>arr[j]){
//             let temp=arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp

//         }
//       }
//     }
//     return arr;
// }
// console.log(bubble(array))


// let array = [3,9,0,1,4,8]
// function bubble(arr) {
//     for(let i =0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if (arr[i]>arr[j]) {
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp  
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble(array)) //Big-O = O(n^2)

// function insertion (arr) {
//     for (let i = 0; i < array.length-1; i++) {
//         let current = arr[i]
//         let j= i-1
//         while (arr[j]>current && j>=0) {
//             arr[j+1]= arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr  
// }
// console.log(insertion([55,777,85,1,0]))

// const arr =  [6,8,2,1,4,3,7]
// function quicksort(arr) {
//     let pviot=arr[arr.length-1]
//     let leftindex=[]
//     let rightindex=[]
//     // leftindex  < pviot
//     // rightindex > pviot
//     for(let i= 0;i<arr.length-1;i++){  
//     if(arr[i]<pviot){
//         leftindex.push(arr[i])
//     }else{
//         rightindex.push(arr[i])
//     }
// }
//     return [...quicksort(leftindex),pviot, ...quicksort(right)]
// }
// console.log(quicksort(arr))


let arr = [6,9,2,5,9,0]
// function quick(arr) {
//     if (arr.length<2) {
//         return arr
//     }
//     let pviot =arr[arr.length-1]
//     let left =[]
//     let right =[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pviot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     let result=[...quick(left),pviot,...quick(right)]
//     return result    
// }
// console.log(quick(arr)) // worst case - O(n^2) Average case - O(nlogn)
function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));  
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    for (;leftIndex < left.length && rightIndex < right.length;) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

   
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// function merge(left,right) {
//     let result=[]
//     let leftarr=0
//     let rightarr=0
//     for(;leftarr<left.lenght && rightarr<right.lenght;){
//         if (left[leftarr]<right[rightarr]) {
//             result.push(left[leftarr])
//             leftarr++
//         }else{
//             result.push(right[rightarr])
//         }
//     }
//     return result.concat(left.slice(leftarr)).concat(right.slice(rightarr))
// }
console.log(mergesort(arr)) // Big-o =O(nlogn)