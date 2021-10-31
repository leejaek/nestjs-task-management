function addNumbers(num1, num2) {
  return num1 + num2;
}

describe('addNumbers', () => {
  it('adds two Numbeers', () => {
    expect(addNumbers(2, 2)).toEqual(4);
  });
});
