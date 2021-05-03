function birthdayParty(input){
 let priceForHall = Number(input[0]);
 let cakePrice = priceForHall * 0.20;
 let drinks = cakePrice - (cakePrice * 0.45);
 let animator = priceForHall / 3;
 console.log(animator + cakePrice + drinks + priceForHall)
}
birthdayParty(["2250"])