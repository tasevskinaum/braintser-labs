window.onload = function () {
    totalClients();
}

const totalClients = () => {
    const clients_table_container = document.querySelector(".clients-container");
    const clients_row = document.querySelectorAll(".clients-table .client-row");
    const totalClientsSpan = document.createElement('span');

    totalClientsSpan.classList.add("total-clients");
    totalClientsSpan.innerHTML = "Вкупно апликации: " + clients_row.length;
    clients_table_container.prepend(totalClientsSpan);
};