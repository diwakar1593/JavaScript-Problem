/**
 * Creates a debounced function that delays invoking the provided function until after a certain amount of time has passed since the last invocation.
 * @param {Function} func - The function to be debounced.
 * @param {number} delay - The delay time in milliseconds.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

// Example usage
const myFunction = () => {
  console.log("Hello from debounced function!");
};

const debouncedFunction = debounce(myFunction, 1000); // Delay time set to 1000 milliseconds (1 second)

// Calling debouncedFunction multiple times in quick succession
debouncedFunction();
debouncedFunction();
debouncedFunction();
