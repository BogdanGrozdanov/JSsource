function speedInfo(input){
let speed = Number(input[0]);
let info = "";
if (speed <= 10){
info = "slow"
}
else if (speed <=50)
{
 info = "average";
}
else if (speed <= 150)
{
    info = "fast";
}
else if (speed <= 1000)
{
 info = "ultra fast";
}else
{
    info = "extremely fast"
}
console.log(info)
}
speedInfo(["12345"])