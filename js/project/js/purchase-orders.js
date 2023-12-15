// Dibujo la tabla de ordenes de compra

function drawPurchaseOrderTable() {
    let orderContainer = document.getElementById('order-table-container');
    orderContainer.innerHTML = ""; 
    let purchaseOrders = JSON.parse(localStorage.getItem("purchaseOrders")) || [];

    purchaseOrders.forEach((order) => {
        
        let fila = document.createElement("tr");
        //Configuro el contenido de la fila con los datos de la orden
        fila.innerHTML = `
            <th scope="row">${order.order_num}</th>
            <td>${order.issue_date}</td>
            <td>${order.deadline}</td>
            <td>${order.address}</td>
            <td>${order.product}</td>            
            <td>${order.supplier}</td>
            <td>${order.count}</td>
            <td>
                <button class="btn bg-success text-white" id="edit-button${order.order_num}"><i class="fa-regular fa-pen-to-square fa-sm"></i></button>
                <button class="btn bg-danger text-white"><i class="fa-regular fa-trash-can fa-sm"></i></button>
            </td>
        `;
        //Agrego la fila al cuerpo de la tabla
        orderContainer.appendChild(fila);
        document.getElementById("edit-button" + order.order_num).addEventListener('click', function () {
            console.log("Se edito la orden de compra");
            localStorage.setItem("order_selected", JSON.stringify(order));
            window.location.href = "./edit-purchase-order.html";

        });
    });
}

drawPurchaseOrderTable()