function metricConverter(input){
let value = Number(input[0]);
let inMesure = input[1];
let outMesure = input[2];
let outValue = 0.0;

if (inMesure === "mm"){
  if (outMesure === "cm"){
    outValue = value * 0.01;
  }
  else if (outMesure === "m")
  {
    outValue = value * 0.001;
  }
}
else if (inMesure === "cm")
{
    if (outMesure === "mm"){
        outValue = value * 10;
    }
    else if (outMesure === "m")
    {
        outValue = value * 0.001;
    }
}
else if (inMesure === "m")
{
   if (outMesure === "mm"){
        outValue = value * 1000;
   }
   else if(outMesure === "cm")
   {
     outValue = value * 100
   }
}
console.log(outValue.toFixed(3));
}
metricConverter(["1204.34","mm","cm"])