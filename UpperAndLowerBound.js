function lowerBound(arr, n, x) {
    for (let i = 0; i < n; i++) {
        if (arr[i] >= x) {
            // lower bound found:
            return i;
        }
    }
    return n;
}

function upperBound(arr, x, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] > x) {
            // upper bound found:
            return i;
        }
    }
    return n;
}

let arr = [3, 5, 8, 9, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);

n = 6, x = 9;
let ind1 = upperBound(arr, x, n);
console.log("The upper bound is the index:", ind1);






