class SomeClass {
  constructor(public value: string) {}
}

type SomeConstructor = {
  new (s: string): SomeClass;
};

function createInstance(ctor: SomeConstructor, arg: string) {
  return new ctor(arg);
}

// Contoh penggunaan
const instance = createInstance(SomeClass, "hello");
console.log(instance.value); // Output: "hello"

function tests(): void {
  return "nb";
}
