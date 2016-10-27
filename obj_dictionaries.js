//Exercise 1 -  Phone Numbers
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};
console.log(phonebookDict.Elizabeth);
phonebookDict.Kareem = '938-489-1234';
delete phonebookDict.Alice;
phonebookDict.Bob = '968-345-2345';
for (var entry in phonebookDict) {
    console.log(entry + ':  ' + phonebookDict[entry]);
}

function histogram(string) {
    tally = {};
    for (i=0; i<string.length; i++) {
        if (!(string[i] in tally)) {
            tally[string[i]] = 1;
        } else {
            tally[string[i]] += 1;
        }
    }
    return tally;
}
console.log(histogram('bananas'));

function topTwo(string) {
    tally = histogram(string);
    var arrayTally = [];
    for (var letter in tally) {
        arrayTally.push([letter, tally[letter]])
    }
    arrayTally.sort(function (a,b) {return b[1] - a[1];});
    return [arrayTally[0][0], arrayTally[1][0]];
}
console.log(topTwo('bananas'));
