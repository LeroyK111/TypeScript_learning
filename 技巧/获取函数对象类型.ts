function add(a: number, b: number) {
  return a + b;
}



type AddType = typeof add;
type AddReturnType = ReturnType<AddType>
type AddParmsType = Parameters<AddType>



