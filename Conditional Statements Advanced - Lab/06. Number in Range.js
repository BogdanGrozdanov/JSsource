function numberInRange(input){
    let number = Number(input[0])

    if (number == 0 || number < -100 || number > 100){
        console.log("No")
    }
    else
    {
        console.log("Yes")
    }

}
numberInRange(["-45"])