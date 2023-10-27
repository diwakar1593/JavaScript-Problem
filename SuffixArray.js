// Build a suffix array in O(n^2*log n);
// kinda too much, but now you can search for a pattern in O(n*log n) where `n` is number of characters in `str`

function searchPattern(str) {
    var strLen = str.length;
    var suffixArray = new Array(strLen);
    var suffixes = new Array(strLen);
  
    for (var i = strLen-1; i >= 0; i--) {
      suffixes[i] = [i, str.substr(i)];
    }
   
    suffixes.sort(function(a, b) { 
      return a[1] < b[1] ? -1 : 1;
    });
   
    for (var i = 0; i < strLen; i++) {
      suffixArray[i] = suffixes[i][0];
    }
    
    return function(pattern) {
      var l = 0;
      var r = strLen-1;
      while (l <= r) {
        var mid = (l + r) >> 1;
        var cmp = pattern.localeCompare( suffixes[suffixArray[mid]][1] );
        if (cmp === 0) {
          return mid;
        } else if (cmp > 0) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      return -1;
    }
  }
