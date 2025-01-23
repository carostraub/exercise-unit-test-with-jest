
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar} = require ('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
})
test("5.35 Dollars should be 782.5 Yen", function(){
    const {fromDollarToYen} = require ('./app.js');
    const yenAmount = fromDollarToYen(5.35);
    const expected = (5.35 / 1.07) * 156.5;
    expect(yenAmount).toBe(expected)
})

test ("Yen to Pound", function() {
    const {fromYenToPound} =require ('./app.js')
    const poundAmount = fromYenToPound (782.5);
    const expected = (782.5/156.5) * 0.87;
    expect(poundAmount).toBe(expected)
} ) 