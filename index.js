function greet(name = 'World') {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

console.log(greet());
console.log(greet('Claude'));
console.log(`2 + 3 = ${add(2, 3)}`);

module.exports = { greet, add };
