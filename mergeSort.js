// iterative fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let c;

  let arr = [];
  arr.push(a)
  arr.push(b)

  for (let i = 2; i < n; i++) {
    arr.push(c = a + b)
    a = b;
    b = c;
  }
  return arr;
}


// recursive fibonacci
function fibsRec(n) {
  if (n <= 2) return [0, 1] 

  let recursive = fibonacci(n-1)
  recursive.push(recursive[recursive.length - 1] + recursive[recursive.length - 2])
  return recursive;
}

// recursive mergeSort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right];
}



