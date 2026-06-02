const { greet, add } = require('./index');

let passed = 0;
let failed = 0;

function assert(description, condition) {
  if (condition) {
    console.log(`  PASS: ${description}`);
    passed++;
  } else {
    console.log(`  FAIL: ${description}`);
    failed++;
  }
}

console.log('Running tests...\n');

assert('greet() returns Hello, World!', greet() === 'Hello, World!');
assert('greet("Claude") returns Hello, Claude!', greet('Claude') === 'Hello, Claude!');
assert('add(2, 3) returns 5', add(2, 3) === 5);
assert('add(-1, 1) returns 0', add(-1, 1) === 0);

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
