export function sentence(words: string[]): string {
  if (words.length <= 2) {
    return words.join(" and ")
  }

  const lastWord = words[words.length - 1]
  const joinComma = words.slice(0, words.length - 1).join(", ")
  return `${joinComma} and ${lastWord}`
}
