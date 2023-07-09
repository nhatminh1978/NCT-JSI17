// var n = parseInt(prompt("nhap so nguyen duong"));

// function Check() {
//     let check = true;
//     if (n < 2) {
//         check = false;
//     }
//     else {
//         for (let i = 2; i < n - 1; i++) {
//             if (n % i == 0) {
//                 check = false;
//                 break;
//             }
//         }
//     }
//     if (check == true) {
//         console.log(n + " là số nguyên tố ");
//     }
//     else {
//         var m;
//         while (m < n) {
//             for (let j = 2; j < m - 1; j++) {
//                 if (m % j == 0) {
//                     check = false;
                    
//                 }
//                 else {
//                     console.log(m + " là số nguyên tố gần nhất")
//                 }
//             }
            
//         }

//     }
// }
// Check()
let n = parseInt(prompt("nhap so nguyen duong"));
function maxDigit(n) {
    let ans = -1;
    while (n > 0) {
      if (n % 10 > ans) {
        ans = n % 10;
      }
      n = Math.floor(n / 10);
    }
    return ans;
}
