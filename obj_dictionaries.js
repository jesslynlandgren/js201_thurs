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
