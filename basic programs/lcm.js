// Method 1
const gcd = (a, b) => {
    if (a === 0 || b === 0) return 0;
    if (a === b) return a;
    return a > b ? gcd(a-b, b) : gcd(a, b-a);
}
const lcm = (a, b) => a*b/gcd(a, b);

// Method 2
const lcm2 = (a, b) => {
    let max = a > b ? a : b;
    while (1) {
        if (max % a === 0 && max % b === 0) break;
        max++;
    }
    return max;
}

console.log(lcm(42, 21));
console.log(lcm2(42, 21));