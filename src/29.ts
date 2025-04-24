function findLongestWord(text: string): string {
  const words = text.toLowerCase().split(' ');
  let longestWord = '';

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}
