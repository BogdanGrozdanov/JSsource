function areaOfFigures(input){
  let figure=input[0];
  let result;
  switch (figure){
      case "square":
          result = (input[1] * input[1]);
          break;
      case "rectangle":
        result = (input[1] * input[2]);
          break;
      case "circle":
        result = (Math.PI * Math.pow(input[1], 2) );
          break; 
      case "triangle":
        result = (input[1] * input[2] / 2);  
          break;    
  }
    console.log(result.toFixed(3)) 
}
areaOfFigures(["rectangle", "7","2.5"])