let price=Number(prompt("pls insert the total amount of items u bought"));
console.log(price);
let amountToBePaid;
if (price>=100){
    amountToBePaid=price- price*10/100
}else{
    amountToBePaid=price
};
console.log(amountToBePaid)