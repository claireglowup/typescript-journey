// generic will be return same type with the parameter if like this
function identity<Type>(arg: Type): Type {
  return arg;
}
