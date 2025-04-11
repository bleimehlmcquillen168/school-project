function fibonacci(num: number): number {
    if (num <= 1) return num;
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= num; i++) {
        [previous, current] = [current, previous + current];
    }
    return current;
}

console.log(fibonacci(10));
