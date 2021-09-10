//Foo-Bar Tests
//testing function
function assert(expected, input, func) {
  const actual = func(input);
  if (actual == expected) {
    return true;
  } else {
    return false;
  }
}

function fooBar(input) {
  let outputString = "";
  if (input % 3 == 0) {
    outputString += "Foo";
  }
  if (input % 5 == 0) {
    outputString += "Bar";
  }
  if (outputString == "") {
    return "" + input;
  } else {
    return outputString;
  }
}

console.log("15 Shoud Return FooBar: ", assert("FooBar", 15, fooBar));
console.log("18 Should Return Foo: ", assert("Foo", 18, fooBar));
console.log("20 Should Return Bar: ", assert("Bar", 20, fooBar));
console.log("120 Shoud Return FooBar: ", assert("FooBar", 120, fooBar));
console.log("112 Should Return 112: ", assert("112", 112, fooBar));
