
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    let yenAmount = euroAmount * oneEuroIs.JPY ;
    return  yenAmount;
}
function fromEuroToDollar(euroAmount) {
    let dollarAmount = euroAmount * oneEuroIs.USD;
    return dollarAmount;
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    let poundAmount = euroAmount * oneEuroIs.GBP;
    return poundAmount;
}

module.exports = {
    fromDollarToYen, 
    fromEuroToDollar,
    fromYenToPound,
}