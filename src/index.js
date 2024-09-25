// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        return matrix.reduce((acc, subArr, i) => {
            return acc.concat(!(i % 2) ? subArr : subArr.reverse());
        }, []);
    } else {
        return [];
    }
};
