function yardGreening(input){
    let area = Number(input[0]);
    let price = 7.61;
    let totalPrice = (area * price)*0.82;
    let discount = (area*price)-totalPrice;
    console.log(`The final price is: ${totalPrice.toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}
yardGreening(["550"]);