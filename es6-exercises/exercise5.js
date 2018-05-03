// Create a generator function that returns 10 random numbers between 10 and 50

function* generateRandomNumbers({ min, max, count = 10 }) {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
        let randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomNumbers.indexOf(randomnumber) > -1) continue;
        randomNumbers.push(randomnumber);
    }
    yield randomNumbers;
}

const randomNumbers = generateRandomNumbers({ min: 10, max: 50 });
console.log(randomNumbers.next().value);