
// program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
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
	
</script>
