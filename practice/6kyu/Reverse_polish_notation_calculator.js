const calc = expr => {
  let stack = [];

  expr.split(" ").forEach(ele => {
    if (!Object.keys(processOperator).find(operator => operator === ele)) stack.push(ele);
    else processStack(stack, ele);
  });

  return stack[0] === "" ? 0 : parseFloat(stack[0]);
};

const processStack = (arr, operator) => {
  const target = arr.slice(-2).map(string => parseFloat(string));
  const processed = processOperator[operator](target[0], target[1]);
  return arr.splice(-2, 2, `${processed}`);
};

const processOperator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

export default calc;
