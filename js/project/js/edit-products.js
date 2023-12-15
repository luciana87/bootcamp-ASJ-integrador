

function updateProduct (event) {
    event.preventDefault(); //Cancela el evento de submit
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let item = products.find(item => item.sku == product.sku);

    item.supplier_id = form.supplier.value;
    item.sku = form.sku.value;
    item.name = form.productName.value;
    item.category = form.category.value;
    item.price = form.price.value;
    item.description = form.description.value;

    localStorage.setItem("product_selected", JSON.stringify(item));
    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "./products.html"
}



function loadDataForm () {
    form.supplier.value = product.supplier_id;
    form.sku.value = product.sku;
    form.productName.value = product.name;
    form.category.value = product.category;
    form.price.value = product.price;
    form.description.value = product.description;
    
}

let form = document.getElementById('product-form');
const product = JSON.parse(localStorage.getItem("product_selected"));

loadDataForm();
document.getElementById("product-form").addEventListener("submit", updateProduct);