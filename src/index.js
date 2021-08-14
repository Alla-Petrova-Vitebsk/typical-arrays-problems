exports.min = function min(array) {
    if (array == undefined || array.length == 0) return 0;

    let minval = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minval > array[i]) {
            minval = array[i]
        }
    }
    return minval;
}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) return 0;
    let maxval = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxval < array[i]) {
            maxval = array[i]
        }
    }
    return maxval;
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) return 0;

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / array.length);
}