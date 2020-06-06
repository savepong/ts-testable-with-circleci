import { sentence } from './practice'

describe("sentence", () => {
  it("Can join a word to a single word", () => {
    const result = sentence(["Chris"])

    expect(result).toEqual("Chris")
  })

  it("Can join two words with and", () => {
    const result = sentence(["Apple", "Orange"])

    expect(result).toEqual("Apple and Orange")
  })

  it("Can join three words together", () => {
    const result = sentence(["Apple", "Orange", "Banana"])

    expect(result).toEqual("Apple, Orange and Banana")
  })

  it("Can join four words together", () => {
    const result = sentence(["Apple", "Orange", "Banana", "Papaya"])

    expect(result).toEqual("Apple, Orange, Banana and Papaya")
  })

  it("Can join zero word together", () => {
    const result = sentence([])

    expect(result).toEqual("")
  })
})
