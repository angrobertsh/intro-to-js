function uniq(arr){
  //go through array, shovel it into new array unless it's already in new array
  const uniqArr = [];
  for(let i = 0; i<arr.length; i++)
  {
    if (uniqArr.includes(arr[i]) !== true)
    {
      uniqArr.push(arr[i]);
    }
  }

  return uniqArr;
}

// console.log(uniq([1,2,3,1]));


Array.prototype.twoSum = function() {
  const idxArr = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        idxArr.push([i, j]);
      }
    }
  }
  return idxArr;
};

// console.log([-1, 0, 2, -2, 1].twoSum());

function myTranspose(arr) {
  const transposeArr = [];

  for (let l =  0; l < arr[0].length; l++) {
    transposeArr.push([]);
  }

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
      transposeArr[j][i] = arr[i][j];
    }
  }

  return transposeArr;
}

// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
 return this;
};

// var integers = [1, 2, 3, 4];
// integers.myEach(i => console.log(i*i));
// integers.myEach((ele, idx, arr) => {
//   arr[idx] = ele * ele;
// });

Array.prototype.myMap = function(callback) {
  let mapArr = [];
  this.myEach(el => mapArr.push(callback(el)));
//  this.myEach(mapArr.push(callback));
  return mapArr;
};

// let integers = [1, 2, 3, 4];
// console.log(integers.myMap(i => i*i));

Array.prototype.myInject = function(callback, accumulator) {
  if (accumulator === undefined) {
    accumulator = 0;
  }
  this.myEach(function (el)  { accumulator += callback(el);});
  return accumulator;
};

// let integers = [1, 2, 3, 4];
// console.log(integers.myInject(i => i, 0));

function bubbleSort(arr){
  // let sortedArray = [];
  for(let k = 0; k < arr.length; k++)
  {
    for(let i = 0; i < arr.length; i++)
    {
      for(let j = i + 1; j < arr.length; j++)
      {
        if(arr[i] > arr[j])
        {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}

// let integers = [6,5,8,5,4];
// console.log(bubbleSort(integers));


function substrings(str) {
  let subStr = [];
  for(let i = 0; i <= str.length; i++)
  {
    for(let j = i + 1; j <= str.length; j++)
    {
      subStr.push(str.slice(i, j));
    }
  }
  return uniq(subStr);
}
// console.log(substrings("cat"));

function range(start, end) {
  const returnArray = [start];
  return start > end ? [] : returnArray.concat(range(start+1, end));
}

// console.log(range(1,20));

function sumArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const sumArr = arr.shift();
  return sumArr + sumArray(arr);
}

// let integers = [6,5,8,5,4];
// console.log(sumArray(integers));

function exp1(b, n) {
  if(n === 0){
    return 1;
  }
  return b * exp1(b, n-1);
}

//console.log(exp1(2,3));

function exp2(b, n) {
  let g = 1;
  if(n === 0){
    return 1;
  }else if(n === 1){
    return b;
  }
  else if(n % 2 !== 0)
  {
    n--;
    g = b;
  }
  let a = exp2(b, n/2);
  return (a * a * g);

}

// console.log(exp2(2,3));


Array.prototype.deepDup = function() {
  // debugger
  let dupArr = [];
  for(let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      let subDup = this[i].deepDup();
      // console.log(subDup);
      dupArr.push(subDup);
    }
    else {
      dupArr.push(this[i]);
    }
  }
  return dupArr;
};

// let array = [[3, [4]]];
// let dupArray = array.deepDup();
//
// array[0][1].push(250);
// console.log(array);
// console.log(dupArray);

function fibonacci(num) {
  if(num === 0){
    return [];
  }else if (num === 1){
    return [0];
  }else if (num === 2){
    return [0, 1];
  }
  else {
    let newFibArr = fibonacci(num-1);
    let newFibNum = newFibArr[newFibArr.length-1] + newFibArr[newFibArr.length-2];
    let fibAsArr = [newFibNum];
    return newFibArr.concat(fibAsArr);
  }

}

//console.log(fibonacci(7));

function bsearch(array, target) {
  let midIdx = Math.floor(array.length / 2);
  if (array[midIdx] === target) {
    return midIdx;
  }
  else if (array.length === 1) {
    return false;
  }
  else if (array[midIdx] > target) {
    return bsearch(array.slice(0, midIdx), target);
  }
  else if (array[midIdx] < target) {
    let a = bsearch(array.slice(midIdx, array.length), target);
    if (a === false){
      return "Not found!";
    }
    else{
      return midIdx + a;
    }
  }
}

// console.log(bsearch([0,1,2,3,4,5,7], 8));

function mergeSort(arr) {
  if(arr.length === 1)
  {
    return arr;
  }
  else if (arr.length === 0) {
    return arr;
  }
  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx, arr.length);
  merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  let merged = [];
  while(left.length > 0 && right.length > 0)
  {
    if(left[0] < right[0]){
      merged.push(left.shift());
    }
    else {
      merged.push(right.shift());
    }
  }
  merged.concat(left).concat(right);
  return merged;

}


console.log(mergeSort([1,4,0]));
