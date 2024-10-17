function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); 
