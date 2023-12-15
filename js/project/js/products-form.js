function createProduct(event) {
    event.preventDefault();
    let form = document.forms[0];
    let product = {
        "sku": form.sku.value,
        "supplier_id": parseInt(form.supplier.value),
        "category": form.category.value,
        "name": form.product_name.value,
        "description": form.description.value,
        "price": parseInt(form.price.value)

    }
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "./products.html"
}



document.getElementById("product-form").addEventListener("submit", createProduct);