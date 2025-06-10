/* write  function which counts vowels in a strig*/
function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (letter of word) {
    if (vowels.includes(letter)) {count ++}
  }

  return count;
}

console.log(countVowels(Byekwaso));
