function cipher(string) {
    strArray = string.split('');
    return strArray.map(cipherLetter).join('');
}

function cipherLetter(letter) {
    var cip = 'nopqrstuvwxyzabcdefghijklm';
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var changeCase = false;
    if (abc.indexOf(letter) < 0) {
        letterLower = letter.toLowerCase();
        changeCase = true;
    } else {
        letterLower = letter;
    }
    if (letterLower == abc[-1]) {
        letterNew = cip[-1];
    } else if (letterLower == ' '){
        letterNew = letter;
    } else {
        pos = abc.indexOf(letterLower);
        letterNew = cip[pos];
    }
    if (changeCase) {
        letterNew = letterNew.toUpperCase();
    }
    return letterNew;
}
console.log(cipher('Genius without education is like silver in the mine'));
