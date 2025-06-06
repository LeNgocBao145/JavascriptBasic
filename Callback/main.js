Array.prototype.map2 = function (callback) {
    var arr = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            arr.push(callback(this[i], i));
        }
    }
    return arr;
}
Array.prototype.find2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i)) {
                return this[i];
            }
        }
    }
    return undefined;
}
Array.prototype.filter2 = function (callback) {
    var arr = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i)) {
                arr.push(this[i]);
            }
        }
    }
    return arr;
}
Array.prototype.forEach2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i);
        }
    }
}
Array.prototype.reduce2 = function (callback, initialValue) {
    var start = 0;
    var accumulator;
    var length = this.length;
    if (arguments.length < 2) {
        accumulator = this[start];
        start++;
    } else {
        accumulator = initialValue;
    }
    for (var i = start; i < length; i++) {
        accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
}
Array.prototype.some2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i)) {
                return true;
            }
        }
    }
    return false;
}
Array.prototype.every2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i) == false) {
                return false;
            }
        }
    }
    return true;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubled = numbers.map2(function (num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
var found = numbers.find2(function (num) {
    return num > 5;
});
console.log(found); // 6
var filtered = numbers.filter2(function (num) {
    return num % 2 === 0;
});
console.log(filtered); // [2, 4, 6, 8, 10]
numbers.forEach2(function (num) {
    console.log(num); // 1 2 3 4 5 6 7 8 9 10
});
var sum = numbers.reduce2(function (acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 55
var hasEven = numbers.some2(function (num) {
    return num % 2 === 0;
});
console.log(hasEven); // true
var allEven = numbers.every2(function (num) {
    return num % 2 === 0;
});
console.log(allEven); // false
