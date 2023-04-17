type Fruit = { kind: "apple" } | { kind: "banana" } | { kind: "orange" };


function nom(fruit: Fruit) {
  switch (fruit.kind) {
    case "apple": return "apple";
    case "banana": return "banana";
    default: return "orange";
  }
}