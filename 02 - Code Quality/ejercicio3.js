function complicatedLevelThree(obj) {
   var result = '';
   var keys = Object.keys(obj);
   var values = Object.values(obj);
   var sum = values.reduce((acc, curr) => acc + curr, 0);

   for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = values[i];
      if (value % 2 === 0) {
         result += key + ' is even. ';
      } else {
         var temp = value;
         while (temp > 0) {
            result += key + ', ';
            temp--;
         }
      }
   }

   var finalResult = '';
   var count = 0;
   while (count < sum) {
      finalResult += result;
      count++;
   }

   var reversedResult = finalResult.split('').reverse().join('');
   var formattedResult = reversedResult.toUpperCase();

   return formattedResult;
}

var obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

console.log(complicatedLevelThree(obj));
