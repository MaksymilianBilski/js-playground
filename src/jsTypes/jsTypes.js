"use strict";

export const jsTypes = () => {
  // reading var value that is out of scope
  var x = 1;

  if (x === 1) {
    var x = 2;

    console.log(x);
    // Expected output: 2
  }

  console.log(x);
  // Expected output: 2

  // var is odded to global object, where its property descriptor cannot be deleted using delete
  for (var a of [1, 2, 3]);
  console.log(a); // 3

  // global declaration without global initialization
  console.log(bar);
  var bar = "element";
  console.log(bar);

  // ovverides the function name by var, because it is in same scope
  var b = 1;
  function b() {}
  console.log(b); // 1

  // order is important!
  var c = d,
    d = 10;
  console.log(c, d);

  var x = 0; // Declares x within file scope, then assigns it a value of 0.

  console.log(typeof z); // "undefined", since z doesn't exist yet

  function outerScope() {
    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

    console.log(x, y); // 0 2

    function e() {
      x = 3; // Assigns 3 to existing file scoped x.
      y = 4; // Assigns 4 to existing outer y.
      z = 5; // Creates a new global variable z, and assigns it a value of 5.
      // (Throws a ReferenceError in strict mode.)
    }

    e(); // Creates z as a global variable.
    console.log(x, y, z); // 3 4 5
  }

  outerScope(); // Also calls b.
  console.log(x, z); // 3 5
  console.log(typeof y); // "undefined", as y is local to function a
};

// let modernMedicine = new WeakMap();
// let cancerHealing = { chance: "13%" };

// modernMedicine.set(cancerHealing, "methodology");

// cancerHealing = null;
// console.log("MODERN MEDICINE test:", modernMedicine);
