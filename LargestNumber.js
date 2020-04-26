var a,b,c;
a=10;
b=30;
c=25;
if(a>=b && a>=c)
{
    console.log(`${a} is greater than ${b} and ${c}`);
}
else if(b>=a && b>=c)
{
    console.log(`${b} is greater than ${a} and ${c}`);
}
else{
    console.log(`${c} is greater than ${a} and ${b}`);
}