function isLeapYear(inputValue) {

    var d = new Date(inputValue);
    if (isNaN(d.getTime())) {
        return `Invalid Date`;
    } else {
        let fullYear = d.getFullYear();
        if (new Date(fullYear, 1, 29).getDate() === 29) {
            return `${fullYear} is a leap year`;
        } else {
            return `${fullYear} is not a leap year`;
        }
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);