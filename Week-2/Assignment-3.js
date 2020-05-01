/*---Average Price of Products---*/
function avg(data) {
    let products = data.products;
    let size = data.size;
    let totalPrc = 0;
    for (var i = 0; i < products.length; i++) {
        totalPrc += products[i].price;
    }
    let avgPrc = totalPrc / size;
    return avgPrc;
}



console.log(avg({
    size: 3, products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
})
) // should print the average price of all products