// Positive Numbers
function positiveNumbers(numArray) {
    var pos = numArray.filter(function(a) {return a > 0;});
    return pos;
}
console.log(positiveNumbers([5, 6, -1, 4, -3, 9, -10]));

//Even Numbers
function evenNumbers(numArray) {
    var even = numArray.filter(function(a) {return a % 2 === 0;});
    return even;
}
console.log(evenNumbers([5, 6, -1, 4, -3, 9, -10]));
console.log(evenNumbers([[5, 6, -1, 4, -3, 9, -10],
                        [5, 6, -1, 4, -3, 9, -10]]));
//Square the Numbers
function squareNumbers(numArray) {
    var square =  numArray.map(function(a) {return Math.pow(a,2);});
    return square;
}
console.log(squareNumbers([5, 6, -1, 4, -3, 9, -10]));

//Cities 1
function coldCities(cityArray) {
    var cold = cityArray.filter(
        function (a) {
            return a.temperature < 70;
        }
    );
    return cold;
}
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
console.log(coldCities(cities));

//Cities2
function nameCities(cityArray) {
    var name = cityArray.map(
        function (a) {
            return a.name;
        }
    );
    return name;
}
console.log(nameCities(cities));

//Good Job!
function goodJob(personArray) {
    var goodjob = function(a) {
        console.log('Good Job, ' + a + '!');
    };
    personArray.forEach(goodjob);
}
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
goodJob(people);

//Sort an array
function sort1(personArray) {
    var alpha = personArray.sort(function(a, b) {return a - b;});
    return alpha;
}
console.log(sort1(people));

//Sort an array 2
function sort2(personArray) {
    var length = personArray.sort(function(a, b) {return a.length - b.length;});
    return length;
}
console.log(sort2(people));

//Sort an array 3
function sort3(multArray) {
    var sumInner = multArray.sort(function(a,b) {
        return (a.reduce(function(a,b) {return a+b;})) - (b.reduce(function(a,b) {return a+b;}));
    });
    return sumInner;
}
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
console.log(sort3(arr));

//3 times
function hello() {
    console.log('Hello, world!');
}

function call3Times(fun) {
    fun();
    fun();
    fun();
}
call3Times(hello);
console.log("");

//n times
function callNTimes(fun,times){
    for(i=0; i<times; i++) {
        fun();
    }
}
callNTimes(hello,5);

//sum an array
function sumNumbers(numArray) {
    var sum = numArray.reduce(function(a,b) {return a+b;});
    return sum;
}
console.log(sumNumbers([1,2,3]));

//Acronym
function getFirst(word) {
    // var letters = word.split('');
    return word[0].toUpperCase();
}

function acronym(wordArray) {
    newArray = wordArray.map(getFirst);
    return newArray.reduce(function(a,b) {return a+b;});
}
console.log(acronym(['very', 'important', 'person']));
console.log(acronym(['national', 'aeronautics', 'space', 'administration']));


//Bonus: forEach
function doubleName(person){
    console.log('Hello, ' + person.name + person.name + '!');
}

function forEach2(arr, fun) {
    for (var pos in arr) {
        fun(arr[pos]);
    }
}
var peopleArray = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];
forEach2(peopleArray,doubleName);


//Bonus: map
function upperName(person){
    return person.toUpperCase();
}

function map2(arr, fun) {
    newArray = [];
    for (var i in arr) {
        newArray.push(fun(arr[i]));
    }
    return newArray;
}
var peopleArray2 = ['Bob', 'Alice', 'Joe'];
console.log(map2(peopleArray2,upperName));
