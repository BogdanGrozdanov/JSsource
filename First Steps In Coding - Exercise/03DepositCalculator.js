function depositCalculator(input){
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let arp = Number(input[2]);
    let totalSum = depositSum + period * ((depositSum*arp/100)/12);
    console.log(totalSum)
}
depositCalculator(["2350",
"6",
"7"])