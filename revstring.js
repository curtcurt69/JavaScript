var reverseString = function (s) {
    const revStr = [];
    const length = s.length - 1;
    for (let i = length; i >= 0; i--) {
        revStr.push(s[i]);
    }
    return revStr;
};

console.log(reverseString("Loxahatchee"));