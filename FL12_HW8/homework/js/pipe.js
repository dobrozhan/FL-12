function pipe(num, addOne) {
    let sum = addOne(num);

    for (let i = 3; i <= arguments.length; i++) {
        num = sum;
        sum = addOne(num);
    }

    return sum;
}

  function addOne(x) {
    return x + 1;
}

pipe(1, addOne, addOne);