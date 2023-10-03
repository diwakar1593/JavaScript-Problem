// Duck Number using Javascript

// Function to check whether given number is duck number or not.
function check_duck(num)
{
	
	// Ignore leading 0s
	let i = 0, n = num.length;
	while (i < n && num[i] == '0')
		i++;

	// Check remaining digits
	while (i < n)
	{
		if (num[i] == '0')
			return true;
			
		i++;
	}
	return false;
}

// Driver code
let num = "1023";

if (check_duck(num))
	document.write("It is a duck number");
else
	document.write("It is not a duck number");
	
