function fishTank(input){
    let length = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percentige = Number(input[3]);
    
    let volumeFishTank = length*widht*height;
    let waterVolume = volumeFishTank*0.001;
    console.log(waterVolume * (1-percentige/100))
}
fishTank(["105",
"77",
"89",
"18.5"])