function petShop(input){
    let dogs = Number(input[0]);
    let animal = Number(input[1]);

    let result = (dogs *2.50) + (animal * 4.0);
    console.log(result);
}
petShop(["13", "9"])