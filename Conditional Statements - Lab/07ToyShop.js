function toyShop(input){
let tripPrice = Number(input[0]);
let puzelsNum = Number(input[1]);
let dollsNum = Number(input[2]);
let tedyNum = Number(input[3]);
let minionNum = Number(input[4]);
let trucksNum = Number(input[5]);

let puzelsPrice = 2.6;
let dollsPrice = 3.0;
let tedyPrice = 4.10;
let minionPrice = 8.20;
let truckPrice = 2.0;

let toyNums =puzelsNum + dollsNum + tedyNum + minionNum + trucksNum;
let totalMoney = 2.6*puzelsNum + 3.0*dollsNum + 4.10*tedyNum + 8.20*minionNum + 2.0*trucksNum;

if (toyNums >= 50)
{
 totalMoney = totalMoney * 0.75;
}
totalMoney*=0.9;


 if (totalMoney >= tripPrice){
     let diff = totalMoney - tripPrice;
    console.log(`Yes! ${diff.toFixed(2)} lv left.`)
 }
 else {
    diff = tripPrice - totalMoney;
   console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
 }
}

toyShop(["40.8","20","25","30","50","10"])