
const { expect } = require("@jest/globals");
const isSolved = require("./app");
  test('Tic tac toe ', () => {
    const solucion = isSolved([
      [1, 1, 1],
      [0, 1, 2],
      [1, 1, 0],
    ])
    expect(solucion).toBe(1)
  })
 