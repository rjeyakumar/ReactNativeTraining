// Create a class called TableGenerator, which contains data and title properties. Develop render method which generates html markup as table for given input data.
// Input:

// let data = [
//     {title: 'apple', price: 2, qty: 30},
//     {title: 'banana', price: 1, qty: 30},
//     {title: 'chikoo', price: 1, qty: 30}
// ];

// title = “fruits”

class TableGenerator {
    constructor() {
        this.title = 'fruits';
        this.data = [
            { title: 'apple', price: 2, qty: 30 },
            { title: 'banana', price: 1, qty: 30 },
            { title: 'chikoo', price: 1, qty: 30 }
        ];
    }

    renderTable() {
        const thead = `<thead><tr>${Object.keys(this.data[0]).map(key => `<td>${key}</td>`)}</tr></thead>`;
        const tbody = `<tbody>${this.data.map(row => `<tr><td>${row.title}</td><td>${row.price}</td><td>${row.qty}</td></tr>`)}</tbody>`;
        return `<table>${thead}${tbody}</table>`;
    }
}

const tableGenerator = new TableGenerator();
tableGenerator.renderTable();