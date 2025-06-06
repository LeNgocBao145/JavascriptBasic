var a = 1;
var b = 2;

/* 
    0
    false
    null
    undefined
    NaN
    ''
*/

// Trong toán tử logic &&, nếu toán hạng đầu tiên là true thì 
// sẽ đọc tiếp toán hạng thứ hai cho đến khi gặp toán hạng là false hoặc hết toán hạng.
// Nếu toán hạng đầu tiên là false thì sẽ trả về toán hạng đầu tiên đó.

var result = 'A' && 'B' && 'C';
console.log(result); // Output: "C"

var result1 = 'A' && null && 'C';
console.log(result1); // Output: null

var result2 = NaN && 'B' && 'C';
console.log(result2); // Output: NaN

var result3 = 'A' && 'B' && 'C' && 'D' && 0;
console.log(result3); // Output: 0

// Trong toán tử logic ||, nếu toán hạng đầu tiên là false thì
// sẽ đọc tiếp toán hạng thứ hai cho đến khi gặp toán hạng là true hoặc hết toán hạng.
// Nếu toán hạng đầu tiên là true thì sẽ trả về toán hạng đầu tiên đó.
result = 'A' || 'B' || 'C';
console.log(result); // Output: "A"

result1 = null || 'B' || 'C';
console.log(result1); // Output: "B"

result2 = 'A' || NaN || 'C';
console.log(result2); // Output: "A"

result3 = 'A' || 'B' || 0;
console.log(result3); // Output: "A"
