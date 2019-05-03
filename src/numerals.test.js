const convertToNumerals = require('./numerals');

it("returns an empty string given 0", () =>{
  let result = convertToNumerals(0);
  expect(result).toBe("");
});

it("returns 'I' given 1", () =>{
  let result = convertToNumerals(1);
  expect(result).toBe("I");
});

it("returns 'II' given 2", () =>{
  let result = convertToNumerals(2);
  expect(result).toBe("II");
});

it("returns 'III' given 3", () =>{
  let result = convertToNumerals(3);
  expect(result).toBe("III");
});

it("returns 'IV' given 4", () => {
  let result = convertToNumerals(4);
  expect(result).toBe("IV");
});

it("returns 'V' given 5", () => {
  let result = convertToNumerals(5);
  expect(result).toBe("V");
});

it("returns 'VI' given 6", () => {
  let result = convertToNumerals(6);
  expect(result).toBe("VI");
});

it("returns 'VII' given 7", () => {
  let result = convertToNumerals(7);
  expect(result).toBe("VII");
});

it("returns 'VIII' given 8", () => {
  let result = convertToNumerals(8);
  expect(result).toBe("VIII");
});

it("returns 'X' given 10", () => {
  let result = convertToNumerals(10);
  expect(result).toBe("X");
});

it("returns 'XX' given 20", () => {
  let result = convertToNumerals(20);
  expect(result).toBe("XX");
});

it("returns 'XV' given 15", () => {
  let result = convertToNumerals(15);
  expect(result).toBe("XV");
});

it("returns 'XXV' given 25", () => {
  let result = convertToNumerals(25);
  expect(result).toBe("XXV");
});

it("returns 'XI' given 11", () => {
  let result = convertToNumerals(11);
  expect(result).toBe("XI");
});

it("returns 'XIV' given 14", () => {
  let result = convertToNumerals(14);
  expect(result).toBe("XIV");
});

it("returns 'XXI' given 21", () => {
  let result = convertToNumerals(21);
  expect(result).toBe("XXI");
});

it("returns 'XXXI' given 31", () => {
  let result = convertToNumerals(31);
  expect(result).toBe("XXXI");
});

it("returns 'D' given 50", () => {
  let result = convertToNumerals(50);
  expect(result).toBe("D");
});

it("returns 'C' given 100", () => {
  let result = convertToNumerals(100);
  expect(result).toBe("C");
});

it("returns 'M' given 1000", () => {
  let result = convertToNumerals(1000);
  expect(result).toBe("M");
});


it("returns 'L' given 500", () => {
  let result = convertToNumerals(500);
  expect(result).toBe("L");
});

it("returns 'CCLXXXIX' given 289", () => {
  let result = convertToNumerals(289);
  expect(result).toBe("CCLXXXIX");
});
