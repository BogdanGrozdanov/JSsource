function cinemaTicket(input){
    let day = input[0];

    let dayPrice = "";
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Friday":        
            dayPrice = 12;
            break;
        case "Wednesday":
        case "Thursday":    
            dayPrice = 14;
            break;   
        case "Saturday":
        case "Sunday":
            dayPrice = 16;
            break;         
    }
    console.log(dayPrice)
}
cinemaTicket(["Monday"])