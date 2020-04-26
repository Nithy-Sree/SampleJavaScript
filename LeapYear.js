var year;
year = 700;

if(year%400 == 0)
{
    if(year%100 == 0)
    {
        if(year%400 == 0)
        {
            console.log(`${year} is a leap year.`)
        }
        else
        {
            console.log(`${year} is not a leap year.`)
        }
    }
    else{
        console.log(`${year} is a leap year.`)
    }
}
else{
    console.log(`${year} is not a leap year.`)
}