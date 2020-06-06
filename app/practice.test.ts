import * as Practice from './practice'

describe("sentence", () => {
  it("should be able to handle a single word", () => {
    expect(Practice.sentence(["Apple"])).toEqual("Apple")
  })

  it("should be able to handle two words", () => {
    expect(Practice.sentence(["Apple", "Orange"])).toEqual("Apple and Orange")
  })

  it("should be able to handle three words", () => {
    expect(Practice.sentence(["Apple", "Orange", "Banana"])).toEqual("Apple, Orange and Banana")
  })

  it("should be able to handle four words", () => {
    expect(Practice.sentence(["Apple", "Orange", "Banana", "Pineapple"])).toEqual("Apple, Orange, Banana and Pineapple")
  })
})


