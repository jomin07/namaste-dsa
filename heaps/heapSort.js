function heapSort(arr) {
  let n = arr.length;

  //1. create max heap from end of arr
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // number of parents is n / 2 and leaf nodes can be ignored
    heapifyDown(arr, i, n);
  }

  //2. sort
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapifyDown(arr, largest, n);
  }
}

let arr = [10, 4, 5, 1, 3];
const sortedArray = heapSort(arr);
console.log(sortedArray);
