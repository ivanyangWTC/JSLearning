function myObjectTest(){
    let obj1 = {
        name: 'John',
        age: 30
    }// Object literal syntax
    let obj2 = new Object(); // Object constructor syntax
    obj2.name = 'John';
    obj2.age = 30;
    obj1.name = 'Jake';
    console.log(obj1.name); // Jake
    obj1['age'] = 40;
    console.log(obj1['age']); // 40

    let obj = {name: 'John', age: 30};
    delete obj.age;
    console.log(obj); // Outputs {name: "John"}


    let obj3 = {
        name: 'John',
        age: 30,
        sayHello: function(){
            console.log('Hello'+ ' ' + this.name);
        }
    }
    obj3.sayHello(); // Hello John
}