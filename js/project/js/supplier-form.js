function createSupplier(event) {
    event.preventDefault();

    let form = document.forms[0];
    let supplier =  {
        "code": form.code.value,
        "business_name": form.businessInput.value,
        "category": form.categoryInput.value,
        "website": form.websiteInput.value,
        "address": {
            "street": form.street.value, 
            "postal_code": form.postalCode.value,
            "city": form.city.value,
            "departament": form.departament.value,
            "country": form.country.value
        },
        "cuit": form.cuit.value,
        "contact": {
            "name": form.contactName.value,
            "lastname": form.contactLastname.value,
            "phone_number": form.phoneNumber.value,
            "email": form.email.value,
            "rol": form.rol.value
        }
    }

    let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];
    suppliers.push(supplier);
    localStorage.setItem("suppliers", JSON.stringify(suppliers));
    window.location.href = "./suppliers.html"
}



document.getElementById("supplier-form").addEventListener("submit", createSupplier);