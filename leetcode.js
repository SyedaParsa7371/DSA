// var twoSum = function(nums, target) {
//     let seen = {};

//     for (let i = 0; i < nums.length; i++) {
//         let n = nums[i];

//         if (target - n in seen) {
//             return [seen[target - n], i];
//         }

//         seen[n] = i;
//     }

//     return false; 
// };



// let shuffles = function (s,t) {
// let  first="abcdef"
// let  second="ax"
// let t=['k']
// let third =first+","+t

// console.log("Input"+first)
// console.log(third) 
// console.log(t)


// let a = "abcd"
// let b = "abcdx"
// function extravalue(str1,str2) {
   
//     let i= 0
//     while (i<b.length) {
        
//         let j = 0
//          let found = false;
//         while (j < a.length) {
//             if (str1[j] === str2[i]) {
//                  found = true;
//                 break;
//             }
//             j++
//         }
//          if (!found) {
//             return b[i];
//         }
//         i++; 
//     }
//     return null
// }


// console.log(extravalue(a,b))




