// Create a promise based code that echoes input 5 times after a give delay

printValue = ({ delay, initialValue, reputation = 5 }) => {
    return new Promise(function (resolve, reject) {
        const interval = setInterval(() => {
            if (initialValue === reputation) {
                clearInterval(interval);
            }
            initialValue += 1;
            console.log(initialValue);
            resolve();
        }, delay, reputation);
    })
}

console.log(printValue({ delay: 1000, initialValue: 1 }));