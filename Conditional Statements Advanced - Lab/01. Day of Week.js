function dayOfWeek(input){
    let number = Number(input[0])

    let output = "";

    switch (number){
        case 1:
            output ="Monday";
        break;
        case 2:
            output = "Tuesday";
        break;
        case 3:
            output = "Wednesday";
        break;
        case 4:
            output = "Thursday";
        break;
        case 5:
            output = "Friday";
        break;
        case 6:
            output = "Saturday";
        break;
        case 7:
            output = "Sunday";
        break; 
        default:
            output = "Error";
        break;                       
    }
    console.log(output)
}
dayOfWeek(["3"])