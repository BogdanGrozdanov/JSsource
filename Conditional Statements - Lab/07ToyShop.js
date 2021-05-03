function toyShop(input){
let tripPrice = Number(input[0]);
let puzelsNum = Number[input[1]];
let dollsNum = Number(input[2]);
let tedyNum = Number(input[3]);
let minionNum = Number(input[4]);
let trucksNum = Number(input[5]);

let puzelsPrice = puzelsNum * 2.6;
let dollsPrice = dollsNum * 3.0;
let tedyPrice = tedyNum * 4.10;
let minionPrice = minionNum * 8.20;
let truckPrice = trucksNum * 2;

let toyNums = puzelsNum + dollsNum + tedyNum + minionNum + trucksNum;
let totalMoney = puzelsPrice*puzelsNum + dollsPrice*dollsNum + tedyPrice*tedyNum + minionPrice*minionNum + truckPrice*trucksNum;

if(toyNums >= 50 ){
totalMoney *= 0.75;
}

let result = totalMoney * 0.90 - tripPrice;

 if(result >= 0){
console.log(`Yes! ${result} lv left.`)
 }
 else
 {
console.log(`Not enough money! ${Math.abs(result)} lv needed.`)
 }
}
toyShop([40.8,
    20,
    25,
    30,
    50,
    10])