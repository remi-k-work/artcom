// Pretend it is hitting the network
export async function waait() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

// Add a delay for a certain time in milliseconds
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simulate a computationally expensive operation
export function compute(ms: number) {
  const startTime = performance.now();
  while (performance.now() - startTime < ms) {}
}

// Get a random number from the specified range
export function getRandomInt(min: number, max: number) {
  // Use Math.random to get a decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Calculate the range (max - min + 1) to include both min and max
  const range = max - min + 1;

  // Floor the random number and scale it to the range, then add min for the desired range
  return Math.floor(randomDecimal * range) + min;
}
