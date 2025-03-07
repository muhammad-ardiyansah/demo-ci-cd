const { add } = require('./app');

test('menambahkan 2 + 3 harus menghasilkan 5', () => {
  expect(add(2, 3)).toBe(5);
});