// 1
function convert() {
    let newArgs = [];
    for (let i = 0, j = arguments.length; i < j; i++) {
        if (typeof arguments[i] === 'string') {
            newArgs.push(Number(arguments[i]));
        } else {
            newArgs.push(String(arguments[i]));
        }
    }
    return newArgs;
}

// convert('1', 2, 3, '4');

// 2

function executeforEach(array, callback) {
    for (const element of array) {
        callback(element);
    }
}

// executeforEach([1,2,3,5], function(el) { console.log(el * 12) });

// 3

function mapArray(array, callback) {
    for (const element of array) {
        if (typeof element === 'string') {
            let elementToNumber = Number(element);
            callback(elementToNumber);
        } else {
            callback(element);
        }
    }
}

// mapArray([2, '5', 8], function(el) {console.log(el + 3)});

// 4

function filterArray(array, callback) {
    const EVEN = 2;
    let evenArray = [];
    for (const element of array) {
        if (element % EVEN === 0) {
            callback(element);
            evenArray.push(element);
        }
    }
    return evenArray;
}

// filterArray([2, 5, 8, 12, 4, 5, 1, 4], function(el) { return el % 2 === 0 });

// 5

function flipOver(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// flipOver('hey world');

// 6

function makeListFromRange(array) {
    let newArray = [];
    let minValue = array[0];
    let maxValue = array[1];

    do {
        newArray.push(minValue);
        minValue++;
    } while (minValue !== maxValue + 1)
    return newArray;
}

// makeListFromRange([2, 15]);

// 7

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    },
    {
        name: 'Jhon',
        age: 28
    }
];

function getArrayOfKeys(array, property) {
    let newArray = [];
    for (const element of array) {
        newArray.push(element[property]);
    }
    return newArray;
}

// getArrayOfKeys(actors, 'name');

// 8

function substitute(array) {
    const VALUETOCOMPARE = 30;
    let newArray = [];
    for (const element of array) {
        if (element < VALUETOCOMPARE) {
            newArray.push('*');
        } else {
            newArray.push(element);
        }
    }
    return newArray;
}

// substitute([58, 14, 48, 2, 31, 29]);

// 9
const YEAR = 2019;
const MONTH = 0;
const DAY = 2;
const date = new Date(YEAR, MONTH, DAY);

let Months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

function getPastDay(date, days) {
    const MSINDAY = 86400000;
    let difference = date - days * MSINDAY;
    let newDate = new Date(difference);
    return `${newDate.getDate()}, (${newDate.getDate()} ${Months[newDate.getMonth()]} ${newDate.getFullYear()})`;
}

// getPastDay(date, 1);
// getPastDay(date, 2);
// getPastDay(date, 365);

// 10

function formatDate(date) {
    const TWODIGITS = 10;
    let newFormat, getHours, getMinutes;

    if (date.getHours() < TWODIGITS) {
        getHours = `0${date.getHours()}`;
    } else {
        getHours = `${date.getHours()}`;
    }

    if (date.getMinutes() < TWODIGITS) {
        getMinutes = `0${date.getMinutes()}`;
    } else {
        getMinutes = `${date.getMinutes()}`;
    }
    newFormat = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${getHours}:${getMinutes}`;
    return newFormat;
}

// formatDate(new Date('6/15/2018 09:15:00'));
// formatDate(new Date());