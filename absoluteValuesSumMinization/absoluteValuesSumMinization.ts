export function absoluteValuesSumMinimization(a: number[]): number {
    // let min = Infinity;

    // for (let i = 0; i < a.length; i++) {
    //     for (let j = i + 1; j < a.length; j++) {
    //         let curr = Math.abs(a[i] - a[j]);
    //         if (curr < min) min = curr;
    //     }
    // }
    // return min;
    const isEven = a.length % 2 === 0;

    return isEven ? a[(a.length / 2) - 1] : a[Math.floor(a.length / 2)];q
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));