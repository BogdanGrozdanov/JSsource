function newHouse(input){
    let flowers = input[0];
    let count = Number(input[1])
    let budget = Number(input[2])

    let priceRoses = 5.0;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3.0;
    let priceGladiolus = 2.50;

    let totalAmount = 0;

    if (flowers === "Roses" && count >80){
        totalAmount = priceRoses * count * 0.90;
    }
    else if(flowers === "Roses")
    {
        totalAmount = priceRoses * count;
    }

    if (flowers === "Dahlias" && count > 90){
        totalAmount = priceDahlias * count * 0.85;
    }
    else if (flowers ==="Dahlias")
    {
        totalAmount = priceDahlias * count;
    }

    if (flowers === "Tulips" && count > 80){
        totalAmount = priceTulips * count * 0.85;
    }
    else if (flowers === "Tulips")
    {
        totalAmount = priceTulips * count;
    }

    if (flowers === "Narcissus" && count < 120){
        totalAmount = priceNarcissus * count * 1.15;
    }
    else if (flowers === "Narcissus")
    {
        totalAmount = priceNarcissus * count;
    }

    if (flowers === "Gladiolus" && count < 80){
        totalAmount = priceGladiolus * count * 1.20;
    }
    else if (flowers === "Gladiolus")
    {
        totalAmount = priceGladiolus * count;
    }

    if (budget >= totalAmount)
    {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${(budget - totalAmount).toFixed(2)} leva left.`)
    }
    else
    {
        console.log(`Not enough money, you need ${(totalAmount - budget).toFixed(2)} leva more.`)
    }

}
newHouse(["Roses", "55","250"])