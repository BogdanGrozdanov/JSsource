function cinema(input){
    let type = input[0]
    let row = Number(input[1])
    let col = Number(input[2])

    let totalMoney =0;

    if(type === "Premiere")
    {
        totalMoney = 12.00 * row * col
    }
    else if(type === "Normal")
    {
        totalMoney = 7.50 * row * col
    }
    else if(type === "Discount")
    {
        totalMoney = 5.00 * row * col
    }

    console.log(totalMoney.toFixed(2))
}