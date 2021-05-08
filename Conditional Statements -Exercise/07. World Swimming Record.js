function worldSwimmingRecord(input){
    let wordRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMetre = Number(input[2]);

    let delay = Math.floor(distance / 15)
    let delayTime = delay * 12.5 ;
    let totalTime = (distance * timeForMetre) + delayTime ;

    if (totalTime >= wordRecord)
    {
        console.log(`No, he failed! He was ${(totalTime - wordRecord).toFixed(2)} seconds slower.`)
    }  
    else 
    {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])