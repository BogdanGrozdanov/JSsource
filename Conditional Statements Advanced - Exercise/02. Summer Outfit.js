function summerOutfit(input){
    let temperature = Number(input[0]);
    let timeFromDay = input[1];

    let outfit = "";
    let shoes = "";

    if (temperature >= 10 && temperature <= 18){
        switch (timeFromDay)
        {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":   
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;  
        }
    }
    else if (temperature <= 24)
    {
        switch (timeFromDay)
        {
            case "Morning":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":   
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;  
        }
    }
    else if (temperature > 24)
    {
        switch (timeFromDay)
        {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;  
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":   
                outfit = "Shirt";
                shoes = "Moccasins";
                break;  
        }
    }
    
 if (temperature >= 0 ){
  console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
    }
    else
    {
        console.log("error");
    }
}

summerOutfit(["18", "Afternoon"])