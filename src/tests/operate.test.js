import operate from '../logic/operate';

describe('Unit testing for operate.js', () => {
  test('adds 2 + 4 to equal 6', () => {
    expect(operate('2', '4', '+')).toBe('6');
  });
  test('subtract 5 - 3 to equal 2', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });
  test('multiply 10 * 10 to equal 100', () => {
    expect(operate('10', '10', 'x')).toBe('100');
  });
  test('divide 100 ÷ 10 to equal 10', () => {
    expect(operate('100', '10', '÷')).toBe('10');
  });
  test('check 5 % 3 to equal 2', () => {
    expect(operate('5', '3', '%')).toBe('2');
  });
  test("check 5 ÷ 0 to equal Can't divide by 0.", () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });
  test("check 5 % 0 to equal Can't find modulo as can't divide by 0.", () => {
    expect(operate('5', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });
});
