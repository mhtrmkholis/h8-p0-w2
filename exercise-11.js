function balikKata(kata) {
  var split = kata.split("");
  var reverse = split.reverse();
  var join = reverse.join("")
  return join
}

console.log (balikKata("Hello World and Coders"));
console.log (balikKata("John Doe"));
console.log (balikKata("I am a bookworm"));
console.log (balikKata("Coding is my hobby"));
console.log (balikKata("Super"));