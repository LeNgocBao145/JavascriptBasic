// Toán tử ++ --
// Prefix & Postfix

//Postfix
var a = 1;

// Việc 1: Tạo biến mới là copy của a, 'a copy' = 1
// Việc 2: Tăng giá trị của a lên 1, a = 2
// Việc 3: Trả về giá trị của 'a copy'
var output = a++;

console.log('output: ', output); // 1

//Prefix
var a = 1;

// Việc 1: Tăng giá trị của a lên 1, a = 2
// Việc 2: Trả về giá trị của 'a sau khi tăng'
var output = ++a;

console.log('output: ', output); // 2

var num = 6;

var result = num++ + --num; // 6 + 6 = 12
// 1. num++ = 6, num = 7
// 2. --num = 6, num = 6

console.log('result: ', result); // 12