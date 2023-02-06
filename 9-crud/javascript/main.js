"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFilds();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbClient")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("dbClient", JSON.stringify(dbClient));
// CRUD = CREATE  READ  UPDATE  DELETE

// CRUD - DELETE
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};
// CRUD - UPDATE
const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

// CRUD - READ
const readClient = () => getLocalStorage();

// CRUD - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const isValidFilds = () => {
  return document.getElementById("form").reportValidity();
};
//Interação com o layout
const clearFilds = () => {
  const filds = document.querySelectorAll(".modal-field");
  filds.forEach((field) => (field.value = ""));
};
const saveClient = () => {
  if (isValidFilds()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    const index = document.getElementById("nome").dataset.index;
    if (index == "new") {
      createClient(client);
      alert("Cliente cadastrado");
      updateTable();
      closeModal();
    } else {
      updateClient(index, client);
      updateTable();
      alert(`Cliente ${client.nome} Alterado com sucesso`);
      closeModal();
    }
  }
};
const creatRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${client.nome}</td>
      <td>${client.email}</td>
      <td>${client.celular}</td>
      <td>${client.cidade}</td>
      
      <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">Excluir</button>
      </td>
  `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
};
const clearTable = () => {
  const rows = document.querySelectorAll("#tableClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};
const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(creatRow);
};
const fillFields = (client) => {
  document.getElementById("nome").value = client.nome;
  document.getElementById("email").value = client.email;
  document.getElementById("celular").value = client.celular;
  document.getElementById("cidade").value = client.cidade;
  document.getElementById("nome").dataset.index = client.index;
};
const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
};
const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");

    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm(
        `Deseja realmente excluir o cliente ${client.nome}`
      );
      if (response) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};

updateTable();

// Eventos
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);

document
  .querySelector("#tableClient>tbody")
  .addEventListener("click", editDelete);
