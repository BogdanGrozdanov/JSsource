function numbersIs(input){
    let currentNumber = Number(input[0]);
    if(currentNumber < 100 ){
        console.log("Less than 100")
    } 
    else if(currentNumber > 200)
    {
        console.log("Greater than 200")
    } 
    else
    {
        console.log("Between 100 and 200")
    } 
}
numbersIs(["7"])