"use strict";
exports.__esModule = true;
exports.absoluteValuesSumMinimization = void 0;
function absoluteValuesSumMinimization(a) {
    var min = Infinity;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            var curr = Math.abs(a[i] - a[j]);
            if (curr < min)
                min = curr;
        }
    }
    return min;
}
exports.absoluteValuesSumMinimization = absoluteValuesSumMinimization;
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
