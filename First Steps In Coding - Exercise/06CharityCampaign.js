 function charityCampaign(input){
     let numDays = Number(input[0]);
     let bakers = Number(input[1]);
     let countCakes = Number(input[2]);
     let countGofrets = Number(input[3]);
     let panecakes = Number(input[4]);
     let price = bakers * ((countCakes * 45) + (countGofrets * 5.80) + (panecakes * 3.20))*numDays; 
    let finalPrice=price - (price/8);
    console.log(finalPrice)
 }
 charityCampaign(["131",
 "5",
 "9",
 "33",
 "46"])