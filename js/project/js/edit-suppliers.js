function updateSupplier(event) {
    event.preventDefault(); //Cancela el evento de submit

    let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];
    let item = suppliers.find(item => item.code == supplier.code);

    item.code = form.code.value;
    item.business_name = form.businessInput.value;
    item.category = form.categoryInput.value;
    item.website = form.websiteInput.value;

    item.address.street = form.street.value;
    item.address.postal_code = form.postalCode.value;
    item.address.city = form.city.value;
    item.address.departament = form.departament.value;
    item.address.country = form.country.value;

    item.cuit = form.cuit.value;

    item.contact.name = form.contactName.value;
    item.contact.lastname = form.contactLastname.value;
    item.contact.phone_number = form.phoneNumber.value;
    item.contact.email = form.email.value;
    item.contact.rol = form.rol.value;

    localStorage.setItem("supplier_selected", JSON.stringify(item));
    localStorage.setItem("suppliers", JSON.stringify(suppliers));
    window.location.href = "./suppliers.html"
}



function loadDataForm() {

    form.code.value = supplier.code;
    form.businessInput.value = supplier.business_name;
    form.categoryInput.value = supplier.category;
    form.websiteInput.value = supplier.website;

    form.street.value = supplier.address?.street;
    form.postalCode.value = supplier.address?.postal_code;
    form.city.value = supplier.address?.city;
    form.departament.value = supplier.address?.departament;
    form.country.value = supplier.address?.country;

    form.cuit.value = supplier.cuit;

    form.contactName.value = supplier.contact?.name;
    form.contactLastname.value = supplier.contact?.lastname;
    form.phoneNumber.value = supplier.contact?.phone_number;
    form.email.value = supplier.contact?.email;
    form.rol.value = supplier.contact?.rol;

}

let form = document.getElementById('supplier-form');
const supplier = JSON.parse(localStorage.getItem("supplier_selected"));

loadDataForm();
form.addEventListener("submit", updateSupplier);