const findLargestWord = (sentence) => {
   let words = sentence.split(' ');
   let largestWord = '';

   words.forEach((word) => {
      if (word.length > largestWord.length) {
         largestWord = word;
      }
   });

   return largestWord;
};

module.exports = findLargestWord;
