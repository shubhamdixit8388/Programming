const gcd = (a, b) => {
    if (a === 0 || b === 0) return 0;
    if (a === b) return a;
    return a > b ? gcd(a-b, b) : gcd(a, b-a);
}

console.log(gcd(54, 72));