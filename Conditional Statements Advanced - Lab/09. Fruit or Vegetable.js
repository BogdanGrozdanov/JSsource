function FruitOrVegetable(input){
    let data = input[0];

    if (data === "banana"||data === "apple"||data === "kiwi"||data === "cherry"||data === "lemon"||data === "grapes")
    {
        console.log("fruit")
    }
    else if (data === "tomato"||data === "cucumber"||data === "pepper"||data === "carrot")
    {
        console.log("vegetable")
    }
    else
    {
        console.log("unknown")
    }
}