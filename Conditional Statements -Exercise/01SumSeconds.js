function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalTime = firstTime + secondTime + thirdTime;
    
    let minute = Math.floor(totalTime / 60);
    let second = totalTime % 60;
    
    if (second <10){
        console.log(`${minute}:0${second}`)
    }
    else
    {
        console.log(`${minute}:${second}`)
    }

}
sumSeconds(["14", "12", 

"10"]) 
