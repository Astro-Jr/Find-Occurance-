// <-- The Function

function FindOccurance(list, num){
  // <-- Check If the List is empty
  if(list.length === 0 || list.length === null){
      return `The ${list} is empty 😕`;
  }

  // <-- Variables
   let count = 0;

  // <-- Main Process

  for(let i = 0; i < list.length; i++){
    if(list[i] === num){
      count++;
    }
  }
  return `num --> ${count}`;

}
