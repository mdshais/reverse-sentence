module.exports = reverse;

function reverse(sentence) {
  const wordArray = sentence.split(" ");
  const reversedArray = wordArray.reverse();
  const reversedSentence = reversedArray.join(" ");
  return reversedSentence;
}
