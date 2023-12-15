// Dibujo la tabla de proveedores

function drawSupplierTable() {
    let supplierContainer = document.getElementById('supplier-table-container');
    supplierContainer.innerHTML = ""; 
    let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];

    suppliers.forEach((supplier) => {
        //genero el html a partir del producto
        let fila = document.createElement("tr");
        //Configuro el contenido de la fila con los datos del producto
        fila.innerHTML = `
            <th scope="row">${supplier.code}</th>
            <td>${supplier.business_name}</td>
            <td>${supplier.category}</td>
            <td>${supplier.cuit}</td>
            <td>${supplier.address.city}</td>
            <td>
                <button class="btn bg-success text-white" id="edit-button${supplier.code}"><i class="fa-regular fa-pen-to-square fa-sm"></i></button>
                <button class="btn bg-danger text-white"><i class="fa-regular fa-trash-can fa-sm"></i></button>
            </td>
        `;
        //Agrego la fila al cuerpo de la tabla
        supplierContainer.appendChild(fila);
        document.getElementById("edit-button"+supplier.code).addEventListener('click', function () {
            console.log("Se edito el proveedor");
            localStorage.setItem("supplier_selected", JSON.stringify(supplier));
            window.location.href = "./edit-supplier.html";

        });
    });
}

drawSupplierTable()