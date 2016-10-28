function leetSpk(string) {
    strArray = string.split('');
    return strArray.map(checkLeet).join('');
}

function checkLeet(letter) {
    var leetDict = {'A':'4', 'E':'3', 'G':'6', 'L':'1', 'O': '0', 'S':'5', 'T':'7'};
    upperLetter = letter.toUpperCase();
    if (upperLetter in leetDict) {
        return leetDict[upperLetter];
    }
    return letter;
}
console.log(leetSpk('Leet'));
console.log(leetSpk('Jesslyn'));
