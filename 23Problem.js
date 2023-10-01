<script>

// Javascript program to check if
// a number is Automorphic
	
// Function to check
// Automorphic number
function isAutomorphic(N)
{
	// Store the square
	if(N < 0) N = -N;
	let sq = N * N;
	
	// Start Comparing digits
	while (N > 0)
	{
		// Return false, if any
		// digit of N doesn't
		// match with its square's
		// digits from last
		if (N % 10 != sq % 10)
			return -1;
	
		// Reduce N and square
		N /= 10;
		sq /= 10;
	}
	
	return 1;
}
	
// Driver code
let N = 5;
	
let geeks = isAutomorphic(N) ?
			"Automorphic" :
		"Not Automorphic";
	document.write(geeks);
	
// This code is contributed by _saurabh_jaiswal
</script>
