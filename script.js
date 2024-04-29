console.log("hello")

function getProducts() {
fetch("https://fakestoreapi.com/products?limit=5")
.then((data) => {
    return data.json();
})
.then((products) => {
    console.log(products);
    let list = document.querySelector("ul");
    for (let i = 0; i < products.length; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = products[i].title;
        list.appendChild(newLi);
    }
})
.catch((err) => {
    console.log(err);
});
}
getProducts();