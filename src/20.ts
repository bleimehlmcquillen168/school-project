function sumNumbers(nums: number[]): number {
  if (!nums || nums.length === 0) {
    throw new Error("The input array cannot be empty.");
  }

  const total = nums.reduce((acc, curr) => acc + curr, 0);

  return total;
}
