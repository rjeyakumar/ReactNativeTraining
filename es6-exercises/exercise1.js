// Write a program that prints the output as shown in output section using input shown in input section
// Input:
//     [
//         {text: 'ES6 is awesome', type: 'p’},
//         {text: 'ES6 is significant update in JS history', type: 'li’},
//         {text: 'const creates immutable variables', type: 'li’},
//         {text: 'Block scoping via let and const', type: 'li’},
//         {text: 'ES6 was released in 2015', type: 'h3’}
//     ];

// Output:
//     Element type is li with text ES6 is significant update in JS history
//     Element type is li with text const creates immutable variables
//     Element type is li with text Block scoping via let and const 
// Concepts to use:
//     Block scoping
//     Arrow functions
//     Template literals
//     Destructuring
//     For-of loop

const data = [
    { text: 'ES6 is awesome', type: 'p' },
    { text: 'ES6 is significant update in JS history', type: 'li' },
    { text: 'const creates immutable variables', type: 'li' },
    { text: 'Block scoping via let and const', type: 'li' },
    { text: 'ES6 was released in 2015', type: 'h3' }
];

print = (list) => {
    let str = '';
    for (const value of list) {
        const { text, type } = value;
        str += (type === 'li') ? `Element type is ${type} with text ${text}\n` : '';
    }
    return str;
}

console.log(print(data));