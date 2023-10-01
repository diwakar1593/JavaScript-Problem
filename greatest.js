function findLargestElement(nestedArray) { 

  let largest = nestedArray[0][0]; 

  for (let arr of nestedArray) { 

    for (let num of arr) { 

      if (num > largest) { 

        largest = num; 

      } 

    } 

  } 

  return largest; 

} 

