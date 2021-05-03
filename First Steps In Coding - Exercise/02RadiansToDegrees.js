function radiansToDegrees(input){
    let radian = Number(input[0]);
    let result = (radian*180/Math.PI).toFixed(0);
    console.log(result)
}
radiansToDegrees(["3.1416"])