function fruitShop(input){
    let fruit = input[0]
    let day = input[1]
    let quantity = input[2]
    
    let totalPrice =0;
    if (day === "Monday"||day === "Tuesday"||day === "Wednesday"||day === "Thursday"||day === "Friday")
    {
        switch (fruit)
        {
            case "banana":
                totalPrice = quantity * 2.50
                break;
            case "apple":
                totalPrice = quantity * 1.20
                break;
            case "orange":
                totalPrice = quantity * 0.85
                break;
            case "grapefruit":
                totalPrice = quantity * 1.45
                break;
            case "kiwi":
                totalPrice = quantity * 2.70
                break;
            case "pineapple":
                totalPrice = quantity * 5.50  
                break;
            case "grapes":
                totalPrice = quantity * 3.85
                break; 
                default:
                    console.log("error")
                    break;     
        }
    }
    else if (day === "Sunday"||day === "Saturday")
    {
        switch (fruit)
        {
            case "banana":
                totalPrice = quantity * 2.70
                break;
            case "apple":
                totalPrice = quantity * 1.25
                break;
            case "orange":
                totalPrice = quantity * 0.90
                break;
            case "grapefruit":
                totalPrice = quantity * 1.60
                break;
            case "kiwi":
                totalPrice = quantity * 3.00
                break;
            case "pineapple":
                totalPrice = quantity * 5.60  
                break;
            case "grapes":
                totalPrice = quantity * 4.20
                break;
                default:
                    console.log("error")
                    break;      
        }
    }
    else
    {
       console.log("error")
    }
    if (totalPrice != 0)
    {
     console.log(totalPrice.toFixed(2))
    }   
}

