function myDeclareVarTest() {
  for(var i =0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // 5

  for(let j =0; j < 5; j++) {
    console.log(j);
  }
  console.log(j); // ReferenceError: j is not defined

  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5

  console.log(b); // ReferenceError: b is not defined
  let b = 5;
  console.log(b); // 5

  var c = 5;
  var c = 6;
  console.log(c); // 6 (no error)

  // let d = 5;
  // let d = 6; // SyntaxError: Identifier 'd' has already been declared

  const e = 5;
  // e=6; // TypeError: Assignment to constant variable.

  let f = 5;
  f=6; // 6

}