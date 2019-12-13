const inputList = input => {
  if (input.length !== 500) return false;

  let filteredInput = input.filter(num => typeof num === "number");
  return filteredInput.length === 500;
};

const inputNum = input => {
  return typeof input === "number";
};

const updateElement = (input, numList) => {
  let index = numList.findIndex(number => number > input);
  if (index === -1) {
    numList.push(input);
  }
  numList.splice(index, 0, input);
  numList.pop();
};

const numSort = input => {
  return input.sort((a, b) => a - b);
};

module.exports = {
  inputList,
  inputNum,
  updateElement,
  numSort
};
