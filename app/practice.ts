
function joinWords(words: string[], separator: string): string {
  return words.filter(w => w).join(separator)
}

export function sentence(words: string[]): string {
  const lastWord = words[words.length - 1]
  const wordsExceptLastWord = words.slice(0, words.length - 1)

  return joinWords(
    [wordsExceptLastWord.join(","), lastWord],
    " and "
  )
}
