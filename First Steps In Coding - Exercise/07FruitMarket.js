 function fruitMarket(input){
     let priceStrawbery = Number(input[0]);
     let bananasQuantity = Number(input[1]);
     let orangeQuantity = Number(input[2]);
     let raspberriesQuantity = Number(input[3]);
     let strawberyQuantity = Number(input[4]);

     let raspberriesPrice = priceStrawbery / 2;
     let orangePrice = raspberriesPrice * 0.6;
     let bananasPrice = raspberriesPrice * 0.20;
     
     let totalPrice = priceStrawbery * strawberyQuantity + bananasPrice * bananasQuantity + orangePrice * orangeQuantity + raspberriesPrice * raspberriesQuantity;
     console.log(totalPrice);
 }
 fruitMarket(["48", 

 "10", 
 
 "3.3", 
 
 "6.5", 
 
 "1.7"]) 