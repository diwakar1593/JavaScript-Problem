/* Merge Sort */

function merge_sort(left,right) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
			// j is the only index left_part
			results.push(right[j]);
			j++;
		} 
      else if (j === right.length || left[i] <= right[j]) {
			results.push(left[i]);
			i++;
		} else {
			results.push(right[j]);
			j++;
		}
	}
	return results;
}

console.log(merge_sort([1,3,4], [3,7,9]));
