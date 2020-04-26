var n1,n2;
n1 = 72;
n2 = 120;

n1 = (n1>0) ? n1: -n1;
n2 = (n2>0) ? n2: -n2;

var gcd,lcm;
for(let i=1;i<=n1 && i<=n2;++i){
    if(n1%i == 0 && n2%i == 0){
        gcd = i;
    }
}

lcm = (n1*n2)/gcd;

console.log(`LCM of ${n1} and ${n2} is ${lcm}`);
