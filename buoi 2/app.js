// let o1 = {
//     a: 21,
//     b: 25,
//     c: 34
// }
// let o2 = {
//     a: 27,

//     b: 26
// }
// let finalObj = Object.assign({},o1,o2)
// console.log("finalObj: ", finalObj);
// let obj = {
//     name: "damdma",
//     age: 23,
//     city: "dhdada"
// }
// let copyObj = {...obj}
// let arr1 = ["Dada",31,"dad"]
// let arr2 = ["Dadada",33,"dadda"]
// let arr3 = [...arr1,...arr2]
// console.log("arr3: ", arr3);
// let arr10 = [1,2,3]
// for (const item of arr10){
//     console.log(item);
// }
// var students = [
//     {
//         name: "Minh",
//         birth: 2000

//     },
//     {
//         name: "Hai",
//         birth: 1999

//     },
//     {
//         name: "Nam",
//         birth: 2001

//     },
//     {
//         name: "Hoang",
//         birth: 2009

//     },
//     {
//         name: "Ha",
//         birth: 2007

//     },

// ]
// let a = students.map((age) => {
//     if (2023 - age.birth > 18) {
//         console.log(age.birth);
//     }
// })
// var string = "Mindx Technology School"
// for(let i=0;i<string.length;i++){
//     console.log(string[i]);
// }
// var reverseString = ""
// for(var i = string.length-1;i>=0;i--){
//     reverseString = reverseString + string[i]
// }
// console.log(reverseString);


// let ten = prompt("nhap ten")
// let email = ""
// const myArray = ten.split("");
// email = email + myArray[myArray.length-1] 
// myArray.map((item)=>{
//     email = email + item[0]
// })
// console.log(email + "01" + "@gmail.com");

// Hoàn thiện bài thực hành trên lớp.
// Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0]. Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
// Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
// Cho array 1 như sau: players = [
// { id: 11, name: 'Messi', age: 33 },         { id: 12, name: 'Ronaldo', age: 34 },      { id: 13, name: 'Young', age: 35 },        { id: 14, name: 'Mane', age: 21 },          { id: 15, name: 'Salah', age: 24 },]
// Hãy chuyển đổi nó về array có dạng sau: playersModified = 
// { 
//     11: {id: 11, name: "Messi", age: 33},
//     12: {id: 12, name: "Ronaldo", age: 34},
//     13: {id: 13, name: "Young", age: 35},
//     14: {id: 14, name: "Mane", age: 21},
//     15: {id: 15, name: "Salah", age: 24}
// let arr1 = [1,2,4,5,6]
// let arr2 = [1,6,8,9,0]
// for(let i=0;i<arr2.length;i++){
//     arr1.filter((duplicate)=>{
//         if(duplicate == arr2[i]){
//             console.log(duplicate);
//         }
//     })
// }
// let arr = [1,54,6,7]
// let newArr = arr.map((item)=>{
//     return item + 5
// })
// console.log(newArr);
// let m = [1,2,4,5,6,7]
// let n = [3,5,675,8,96]
// let merge = m.concat(n)

// let deleteNum = [1,8,10,96,7]
// for(let i =0;i<merge.length;i++){
//     if(deleteNum.includes(merge[i]) == true){
//         merge.splice(i,1)   
//     }

// }
// console.log(merge);
