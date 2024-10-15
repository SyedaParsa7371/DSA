// function  cartesian(arr1,arr2) {
//     let result = []
//     for (let i = 0; i< arr1.length; i++) {
//         for (let j = 0;  j< arr2.length; j++) {
//             result.push([arr1[i],arr2[j]])
//         } 
//     }
//     return result
// }
// let arr1 =[1,8]
// let arr2 =[5,6,7]

// console.log(cartesian(arr1,arr2))


// function climbing(n) {
//     let ways=[1,2]
//     for (let i = 2; i <= n; i++) {
//         ways[i]=ways[i-1]+ways[i-2]     
//     }
//     return ways[n-1]
// }
// console.log(climbing(4)) // Big-O =O(n)

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(`Move disk from ${source} to ${destination}`);
    } else {
        towerOfHanoi(n - 1, source, auxiliary, destination);  // Step 1
        console.log(`Move disk from ${source} to ${destination}`);  // Step 2
        towerOfHanoi(n - 1, auxiliary, destination, source);  // Step 3
    }
}

// Example usage:
let n = 2  // Number of disks
let source = 'A', destination = 'C', auxiliary = 'B';

console.log(`Steps to solve the Tower of Hanoi problem with ${n} disks:`);
towerOfHanoi(n, source, destination, auxiliary);
