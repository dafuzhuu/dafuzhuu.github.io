// utils.js

export function accumulate(data) {
    return data.reduce((acc, currentValue, index) => {
        if (index === 0) {
            acc.push(currentValue);
        } else {
            acc.push(acc[index - 1] + currentValue);
        }
        return acc;
    }, []);
}
