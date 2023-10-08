
function printValues(a: string | number, b: string | string[]) {
  if (a === b) {
    console.log(a.toUpperCase()); // (parameter) a: string
    console.log(b.toUpperCase()); // (parameter) b: string
  } else {
    console.log(a); // (parameter) a: string | number
    console.log(b); // (parameter) b: string | string[]
  }
}