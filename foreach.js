
function forEach2(z, x) {
    for(i=0; i<z.length;i++){
        console.log(z[i]);
    }
    for (var j in z){
        console.log(j);
    }
    for (var k in z){
        console.log(z[k]);
    }
}
var peopleArray = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];
var regArrary = [[1,2,3],[1,2,3],[1,2,3]]
forEach2(peopleArray);
forEach2(regArrary);
