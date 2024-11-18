function greet(name: string, date: Date) {
  console.log(`halo ${name}, today is ${date.toDateString()}`);
}

greet("jono", new Date());
