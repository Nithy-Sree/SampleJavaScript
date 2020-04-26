var n,i,flag=0;
n = 29;

for(let i=2;i<=n/2;++i){
    if(n%i == 0){
        flag = 1;
        break;
    }
}
if(n==1){
    console.log(`1 is neither prime nor composite.`);
}
else{
    if(flag == 0){
        console.log(`${n} is a prime number.`);
    }
    else{
        console.log(`${n} is not a prime number.`)
    }
}

//Between two numbers
var a,b,j,play;
a = 20;
b = 50;

while(a<b){
    play = 0;
    for(j=2;j<=a/2;++j){
        if(a%j==0){
            play = 1;
            break;
        }
    }
    if(play == 0){
        console.log(a);
    }
    ++a;
}