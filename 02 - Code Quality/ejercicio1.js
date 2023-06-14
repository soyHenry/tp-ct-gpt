function complicatedLevelOne(arr) {
   var result = 0;

   for (var i = 0; i < arr.length; i++) {
      result += arr[i];
   }

   if (arr[i] % 2 === 0) {
      result *= i;
   } else {
      result -= i;
   }

   return result;
}

console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5]));
