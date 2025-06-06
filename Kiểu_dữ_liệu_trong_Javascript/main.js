/*
  Kiểu dữ liệu trong Javascript

  1. Kiểu dữ liệu nguyên thủy (Primitive Data Types):
    - Number: Đại diện cho các số, có thể là số nguyên hoặc số thực.
    - String: Đại diện cho chuỗi ký tự, được đặt trong dấu nháy đơn hoặc nháy kép.
    - Boolean: Đại diện cho giá trị đúng (true) hoặc sai (false).
    - Undefined: Đại diện cho biến chưa được gán giá trị.
    - Null: Đại diện cho giá trị "không có giá trị" hoặc "không tồn tại".
    - Symbol: Đại diện cho một giá trị duy nhất và không thể thay thế, thường được sử dụng để tạo ra các thuộc tính riêng biệt trong đối tượng.

  2. Kiểu dữ liệu tham chiếu (Reference Data Types):
    - Object: Đại diện cho một tập hợp các cặp khóa-giá trị, cho phép lưu trữ nhiều giá trị khác nhau.
    - Array: Đại diện cho một danh sách có thứ tự các giá trị, có thể là các kiểu dữ liệu khác nhau.
    - Function: Đại diện cho một khối mã có thể được gọi và thực thi, có thể nhận tham số và trả về giá trị.
*/

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique
console.log(id === id2);

// Function
var myFunction = function () {
    console.log('Hello, world!');
}

myFunction(); // Gọi hàm

// Object types
var myObject = {
    name: 'Son Dang',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function () {

    }
};
console.log('myObject', myObject);

var myArray = [
    'Son Dang',
    18,
    true,
    function () {
        console.log('Hello, world!');
    }
];

console.log('myArray', myArray);

var isNull = null; // Null value

var isUndefined; // Undefined value

console.log(typeof isNull); // object (this is a known quirk in JavaScript)
console.log(typeof isUndefined); // undefined
console.log(typeof id); // symbol
console.log(typeof myFunction); // function
console.log(typeof myObject); // object
console.log(typeof myArray); // object