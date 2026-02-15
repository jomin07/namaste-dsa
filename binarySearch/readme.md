3 Versions of Binary Search:

1.  while (l <= r) {
    mid = Math.floor((left + right) / 2);
    l = mid + 1;
    r = mid - 1;
    }

2.  while (l < r) {
    mid = Math.floor((left + right) / 2);
    l = mid + 1;
    r = mid;
    }

3.  while (l < r -1 ) {
    mid = Math.floor((left + right) / 2);
    l = mid;
    r = mid;
    }
