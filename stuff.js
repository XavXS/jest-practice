function capitalize(str) {
    if(!(typeof str === 'string' || str instanceof String))
        throw 'no string was received';
    if(str === '')
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if(!(typeof str === 'string' || str instanceof String))
        throw 'no string was received';
    return str.split('').reverse().join('');
}

const calculator = {
    add: function(a, b) {
        if(isNaN(a) || isNaN(b)) throw 'param missing/is NaN';
        return a + b;
    },
    subtract: function(a, b) {
        if(isNaN(a) || isNaN(b)) throw 'param missing/is NaN';
        return a - b;
    },
    multiply: function(a, b) {
        if(isNaN(a) || isNaN(b)) throw 'param missing/is NaN';
        return a * b;
    },
    divide: function(a, b) {
        if(isNaN(a) || isNaN(b)) throw 'param missing/is NaN';
        return a / b;
    },
};

function caesarCipher(str, offset = 1) {
    if(!(typeof str === 'string' || str instanceof String))
        throw 'no string was received';
    if(isNaN(offset))
        throw 'offset is NaN';
    
    let result = '';
    for(let c of str)
        result += processLetter(c, offset);
    return result;

    function processLetter(c, offset) {
        let code = c.charCodeAt(0);
        if(code >= 97 && code <= 122) {
            code = mod(code + offset - 97, 26) + 97;
            return String.fromCharCode(code);
        } else if(code >= 65 && code <= 90) {
            code = mod(code + offset - 65, 26) + 65;
            return String.fromCharCode(code);
        }
        return c;
    }

    function mod(n, m) { return ((n % m) + m) % m; }
}

function analyzeArray(arr) {
    if(!Array.isArray(arr)) throw 'no array was received';
    if(arr.length === 0) throw 'array is empty';
    let avg = 0;
    let min = arr[0];
    let max = arr[0];
    for(let n of arr) {
        if(n < min) min = n;
        if(n > max) max = n;
        avg += n;
    }
    avg /= arr.length;
    return {
        average: avg,
        min: min,
        max: max,
        length: arr.length
    }
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};