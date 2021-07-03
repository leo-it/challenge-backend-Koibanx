const isSolved = require("./app");


  test('returns 1 if x wins in a row ', () => {
    const solucion = isSolved([
      [1, 1, 1],
      [0, 2, 2],
      [1, 1, 0],
    ])
    expect(solucion).toBe(1)
  })
  test('returns 2 if O wins in a row ', () => {
    const solucion = isSolved([
      [1, 2, 1],
      [0, 1, 2],
      [2, 2,2],
    ])
    expect(solucion).toBe(2)
  })
  test('returns 1 if x wins in a column ', () => {
    const solucion = isSolved([
      [1, 0, 1],
      [1,2, 2],
      [1, 1, 0],
    ])
    expect(solucion).toBe(1)
  })
  test('returns 2 if O wins in a column ', () => {
    const solucion = isSolved([
      [1, 2, 2],
      [0, 1, 2],
      [2,0,2],
    ])
    expect(solucion).toBe(2)
  })

  test('returns 1 if x wins in a diagonal ', () => {
    const solucion = isSolved([
      [1, 2, 1],
      [0, 1, 2],
      [1, 0, 0],
    ])
    expect(solucion).toBe(1)
  })
  test('returns 2 if O wins in a diagonal ', () => {
    const solucion = isSolved([
      [0, 2, 2],
      [0, 2, 1],
      [2, 0,2],
    ])
    expect(solucion).toBe(2)
  })

  test('return -1 if not yet finished ', () => {
    const solucion = isSolved([
      [2, 1, 2],
      [1, 0, 1],
      [2, 0,2],
    ])
    expect(solucion).toBe(-1)
  })

  test('return -1 if not yet finished ', () => {
    const solucion = isSolved([
      [2, 1, 1],
      [1, 2, 2],
      [2, 1,1],
    ])
    expect(solucion).toBe(0)
  })
