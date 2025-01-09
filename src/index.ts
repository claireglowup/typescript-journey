type P = string | number;

function P(p: P): string {
  if (typeof p === "string") {
    return "bjir";
  }

  return "bukan string";
}
