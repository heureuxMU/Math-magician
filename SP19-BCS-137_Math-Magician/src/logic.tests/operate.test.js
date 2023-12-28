import operate from "../logic/operate";

describe("Test the operate function", () => {
  test("Sum 4 + 2 to equal 6:", () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = "+";
    const output = "6";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Sub 10 - 6 to equal 4:", () => {
    const numberOne = 10;
    const numberTwo = 6;
    const operation = "-";
    const output = "4";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Mul 9 x 5 to equal 45:", () => {
    const numberOne = 9;
    const numberTwo = 5;
    const operation = "x";
    const output = "45";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Div 60 ÷ 10 to equal 6:", () => {
    const numberOne = 60;
    const numberTwo = 10;
    const operation = "÷";
    const output = "6";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Div 60 ÷ 0 to be error message:", () => {
    const numberOne = 60;
    const numberTwo = 0;
    const operation = "÷";
    const output = "Can't divide by 0.";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Mod 5 % 3 to equal 2:", () => {
    const numberOne = 5;
    const numberTwo = 3;
    const operation = "%";
    const output = "2";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });

  test("Mod 8 % 0 to be error message:", () => {
    const numberOne = 8;
    const numberTwo = 0;
    const operation = "%";
    const output = "Can't find modulo as can't divide by 0.";

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(output);
  });
});
