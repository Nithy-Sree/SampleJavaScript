var ar = [];

ar.push(8);
ar.push(10);
ar.push(7);
ar.push(17);
ar.push(5);
ar.push(2);

console.log(ar);
var sum = 0;
ar.map(function(ob, i){
    sum+=ob;
})

console.log(sum);