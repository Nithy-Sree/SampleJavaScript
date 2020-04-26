var n1,n2;
n1 = 81;
n2 = -153;

n1 = (n1>0) ? n1: -n1;
n2 = (n2>0) ? n2: -n2;

var gcd;
for(let i=1;i<=n1 && i<=n2;++i){
    if(n1%i == 0 && n2%i == 0){
        gcd = i;
    }
}

console.log(`GCD of ${n1} and ${n2} is ${gcd}`);

while(n1!=n2)
{
    if(n1>n2){
        n1 -= n2;
    }
    else{
        n2 -= n1;
    }
}
console.log(`GCD is ${n1}`);