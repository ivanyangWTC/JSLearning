function myArrayTest(){
    // Create an array
    let arr1 = [1,2,3,4,5];
    let arr2 = new Array('Tom','Bill','Jake');
    console.log(arr1); // [1,2,3,4,5]
    console.log(arr2); // ['Tom','Bill','Jake']

    // Access an array element
    let arr3 = ['apple', 'banana', 'cherry'];
    console.log(arr3[0]); // apple
    arr3[0] = 'avocado';
    console.log(arr3); // ['avocado', 'banana', 'cherry']

    //Array length
    let arr4 = [1, 2, 3];
    console.log(arr4.length); // Outputs 3
    arr4.push(4);
    console.log(arr4.length); // Outputs 4
    arr4.length = 2;
    console.log(arr4.length); // Outputs 2
    console.log(arr4); // Outputs [1, 2]

    //Array methods
    let arr5 = [1, 2, 3];
    arr5.push(4);// [1, 2, 3, 4]
    arr5.unshift(5);// [5, 1, 2, 3, 4]
    arr5.pop();// [5, 1, 2, 3]
    arr5.shift();// [1, 2, 3]
    arr5.splice(1, 0, 6);// [1, 6, 2, 3]
    arr5.splice(2, 0, 7, 8);// [1, 6, 7, 8, 2, 3]
}