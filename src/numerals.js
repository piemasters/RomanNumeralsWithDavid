const symbols = {
  M:  1000,
  L:  500,
  C:  100,
  D:  50,
  X:  10,
  V:  5,
  IV: 4,
  I:  1
};

function convertToNumerals(input) {
  let handleNextNumeral = (currentInputAndString, symbol) =>
    handleNumeral(symbol, symbols[symbol], currentInputAndString);

  return Object.keys(symbols)
    .reduce(handleNextNumeral, {input: input, string: ""})
    .string;
}

function handleNumeral(symbol, value, state) {
  if (state.input / value >= 1) {
    let remainder = state.input % value;
    state.string += symbol.repeat(state.input / value);
    state.input = remainder;
  }
  return state;
}

module.exports = convertToNumerals;
