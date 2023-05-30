//Esta función tiene como objetivo retornar un nuevo array con los elementos únicos del array de entrada
const getUniqueElements = (arr) => {
  let uniqueElements = [];

  arr.forEach((element) => {
    if (uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
  });

  return uniqueElements;
};
module.exports = getUniqueElements;
