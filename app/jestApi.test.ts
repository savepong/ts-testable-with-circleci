describe("Sample Jest API", () => {
  it("toBe", () => {
    expect(1).toBe(1)

    // This will failed
    // expect({a: 1}).toEq({a: 1})
  })

  it("toEqual", () => {
    expect({a: 1}).toEqual({a: 1})
  })

  it("Others", () => {
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()

    expect(1).toBeDefined()

    // Truthy
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
    // This will failed
    // expect("").toBeTruthy()
    // expect(0).toBeTruthy()

    // Falsy
    expect(false).toBeFalsy()
    expect(0).toBeFalsy()
  })

  it("floating equal", () => {
    // This will failed
    // expect(0.1 + 0.2).toEqual(0.3)

    expect(0.1 + 0.2).toBeCloseTo(0.3)
  })

  it("Throw error", () => {
    const testSubject = (): void => {
      throw Error("MyError")
    }

    expect(testSubject).toThrow()

    const thisFunctionWillThrowFor0 = (input: number): number => {
      if (input === 0) {
        throw Error("No Zero")
      }
      return 1
    }

    // Testing the above
    expect(() => thisFunctionWillThrowFor0(0)).toThrow()
    expect(() => thisFunctionWillThrowFor0(1)).not.toThrow()
  })

  // More information: https://jestjs.io/docs/en/getting-started
})
