function countNumbers(str) {
    let strArray = str.split('').sort();
    let Counts = {};

    for (let i = 0; i < strArray.length; i++) {
        Number(strArray[i]);
        if (!isNaN(strArray[i])) {

            if (!Object.prototype.hasOwnProperty.call(Counts, strArray[i])) {
                var count = 1;
                Counts[strArray[i]] = count;
            } else {
                count++;
                Counts[strArray[i]] = count;
            }
        }
    }

    return JSON.stringify(Counts, null, 1);

}

countNumbers('erer384jj4444666888jfd123');