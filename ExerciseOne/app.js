function logger () {
    const startNumber = 1;
    const finishNumber = 100;

    const isMultipleOf = (value, divisibleBy) => {
        return value % divisibleBy === 0;
    }

    for (let value = startNumber; value <= finishNumber; value++) {
        if (isMultipleOf(value, 3) && isMultipleOf(value, 5)) {
            console.log('Visual Nuts');
        } else if(isMultipleOf(value, 5)) {
            console.log('Visual');
        } else if(isMultipleOf(value, 3)) {
            console.log('Nuts');
        } else {
            console.log(value);
        }
    }
}

logger();