/**
 * Utility that takes a string and returns an array of word objects with indices for animation.
 * Used by animate-in, text-reveal, and text-image-reveal hooks.
 */

export interface WordEntry {
  word: string
  index: number
}

/**
 * Splits a string into an array of word objects, preserving line breaks as separate entries.
 */
export function splitWords(text: string): WordEntry[] {
  const words = text.replace(/\n/g, ' <br> ').split(' ')
  const result: WordEntry[] = []
  let index = 0

  for (const word of words) {
    if (word.trim() === '') continue
    result.push({ word, index })
    index++
  }

  return result
}

/**
 * Splits text into words suitable for the text-reveal overlay pattern.
 * Returns just the words array without line break markers.
 */
export function splitWordsFlat(text: string): string[] {
  return text.split(' ').filter((w) => w.trim() !== '')
}
