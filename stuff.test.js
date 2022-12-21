import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './stuff';

test('check if capitalized', () => {
    expect(capitalize('apple')).toBe('Apple');
    expect(capitalize('Apple')).toBe('Apple');
});

test('capitalize edge case', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('1')).toBe('1');
    expect(capitalize('a')).toBe('A');
});

test('throw wrong type capitalize', () => {
    expect(() => capitalize()).toThrow();
    expect(() => capitalize(true)).toThrow();
    expect(() => capitalize(12)).toThrow();
    expect(() => capitalize(null)).toThrow();
});

test('check if reversed', () => {
    expect(reverseString('aPple')).toBe('elpPa');
});

test('reverse edge case', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
});

test('throw wrong type reverse', () => {
    expect(() => reverseString(1)).toThrow();
    expect(() => reverseString(true)).toThrow();
    expect(() => reverseString()).toThrow();
    expect(() => reverseString(null)).toThrow();
});

test('operations correct', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(10, 2)).toBe(8);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.multiply(2, 5)).toBe(10);
});

test('throw wrong type calculator', () => {
    expect(() => calculator.add(1)).toThrow();
    expect(() => calculator.add()).toThrow();
    expect(() => calculator.add(true)).toThrow();
    expect(() => calculator.add('false')).toThrow();

    expect(() => calculator.subtract(1)).toThrow();
    expect(() => calculator.subtract()).toThrow();
    expect(() => calculator.subtract(true)).toThrow();
    expect(() => calculator.subtract('false')).toThrow();

    expect(() => calculator.divide(1)).toThrow();
    expect(() => calculator.divide()).toThrow();
    expect(() => calculator.divide(true)).toThrow();
    expect(() => calculator.divide('false')).toThrow();

    expect(() => calculator.multiply(1)).toThrow();
    expect(() => calculator.multiply()).toThrow();
    expect(() => calculator.multiply(true)).toThrow();
    expect(() => calculator.multiply('false')).toThrow();
})

test('caesar cipher check', () => {
    expect(caesarCipher('aAbBc, CdDeE.')).toBe('bBcCd, DeEfF.');
    expect(caesarCipher('aAbBc, CdDeE.', 2)).toBe('cCdDe, EfFgG.');
    expect(caesarCipher('aAbBc, CdDeE.', 0)).toBe('aAbBc, CdDeE.');
    expect(caesarCipher('aAbBc, CdDeE.', -1)).toBe('zZaAb, BcCdD.');
    expect(caesarCipher('aAbBc, CdDeE.', 26)).toBe('aAbBc, CdDeE.');
    expect(caesarCipher('aAbBc, CdDeE.', -26)).toBe('aAbBc, CdDeE.');
    expect(caesarCipher('zZaAb, BcCdD.')).toBe('aAbBc, CdDeE.');
})

test('throw wrong type cipher', () => {
    expect(() => caesarCipher()).toThrow();
    expect(() => caesarCipher(12, 12)).toThrow();
    expect(() => caesarCipher('abcde', 'something')).toThrow();
})

test('analyze array check', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})

test('throw wrong type analyze', () => {
    expect(() => analyzeArray([])).toThrow();
    expect(() => analyzeArray()).toThrow();
    expect(() => analyzeArray(123)).toThrow();
    expect(() => analyzeArray('lol')).toThrow();
})