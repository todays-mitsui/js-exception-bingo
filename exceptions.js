try {
  [].length = -1
} catch (e) {
  console.info('RangeError: invalid array length')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}

try {
  0..toFixed(101)
} catch (e) {
  console.info('RangeError: precision is out of range')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}

try {
  0..toString(37)
} catch (e) {
  console.info('RangeError: radix must be an integer')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}

try {
  [].reduce((l, r) => l + r)
} catch (e) {
  console.info('TypeError: Reduce of empty array with no initial value')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}

try {
  Object.create()
} catch (e) {
  console.info('TypeError: More arguments needed')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}

try {
  Object.setPrototypeOf({})
} catch (e) {
  console.info('TypeError: More arguments needed')
  console.info('Name:', e.name);
  console.info('Message:', e.message);
  console.log('========')
}
