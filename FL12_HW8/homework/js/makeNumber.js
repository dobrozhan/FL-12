function makeNumber (str) {
    let strArray = str.split('');
    let strNum = '';
    for (let i = 0; i < strArray.length; i++) {
        Number(strArray[i]);
        if (!isNaN(strArray[i])) {
          strNum += strArray[i];
        }       
     }
    return strNum;
}

makeNumber('erer384jjjfd123'); 