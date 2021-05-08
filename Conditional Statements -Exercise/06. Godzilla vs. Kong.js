function godzillaVSKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceClouth = Number(input[2]);
    
    let decor = budget * 0.10 ;
    let totalPriceCloths = priceClouth * statists ;
    if (statists > 150)
    {
        totalPriceCloths *= 0.90 ;
    }

    let amount = decor + totalPriceCloths;

    if (amount <= budget)
    {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - amount).toFixed(2)} leva left.`)
    }
    else
    {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(amount - budget).toFixed(2)} leva more.`)
    }
}
godzillaVSKong(["9587.88", "222", "55.68"])