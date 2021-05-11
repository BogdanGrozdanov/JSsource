function tradeCommissions(input){
    let town = input[0]
    let sells = Number(input[1])
    
    let comisions = 0;

    if (sells >= 0 && sells <= 500)
    {
        switch (town)
        {
            case "Sofia":
                comisions = sells * 0.05
                break;
            case "Varna":
                comisions = sells * 0.045
                break;
            case "Plovdiv":
                comisions = sells * 0.055
                break;
        }
    }
    else if (sells <=1000)
    {
        switch (town)
        {
            case "Sofia":
                comisions = sells * 0.07
                break;
            case "Varna":
                comisions = sells * 0.075
                break;
            case "Plovdiv":
                comisions = sells * 0.08
                break;
        }
    } 
    else if (sells <= 10000)
    {
        switch (town)
        {
            case "Sofia":
                comisions = sells * 0.08
                break;
            case "Varna":
                comisions = sells * 0.10
                break;
            case "Plovdiv":
                comisions = sells * 0.12
                break;
        }
    }
    else if (sells > 10000)
    {
        switch (town)
        {
            case "Sofia":
                comisions = sells * 0.12
                break;
            case "Varna":
                comisions = sells * 0.13
                break;
            case "Plovdiv":
                comisions = sells * 0.145
                break;
        }
    }
   
    
    if (comisions > 0)
    {
        console.log(comisions.toFixed(2))
    }
    else
    {console.log("error")}
    
}

tradeCommissions(["kas", "-50"])