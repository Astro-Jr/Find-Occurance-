// <-- The function
function countOccurrences(list, num) {
  if (list.length === 0) {
    return `The list is empty 😕`;
  }
  
  return list.reduce((count, currentNumber) => {
    return currentNumber === num ? count + 1 : count;
  }, 0);
}
