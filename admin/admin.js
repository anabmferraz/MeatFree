document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const userList = document.getElementById("userList");
  const searchInput = document.getElementById("search");
  let nextUserId = 1;

  document
    .getElementById("clear-button")
    .addEventListener("click", clearSearch);
  document
    .getElementById("clear-button-all")
    .addEventListener("click", clearAllUsers);
  document
    .getElementById("search-button")
    .addEventListener("click", searchUsers);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addUser();
  });

  function addUser() {
    const userName = document.getElementById("user").value.trim();
    const userEmail = document.getElementById("email").value.trim();

    if (userName && userEmail) {
      const userObject = {
        id: generateUserId(),
        user: userName,
        email: userEmail,
        date: new Date().toLocaleString(),
      };

      let users = getUsersFromLocalStorage();
      users.push(userObject);
      localStorage.setItem("users", JSON.stringify(users));

      appendUserToDOM(userObject);
      clearForm();
    }
  }

  function generateUserId() {
    return nextUserId++;
  }

  function appendUserToDOM(userObject) {
    const li = document.createElement("li");
    li.className = "user-item";
    li.textContent = `[ID: ${userObject.id}] ${userObject.date} - ${userObject.user} - ${userObject.email}`;
    li.appendChild(createDeleteButton(userObject));
    userList.appendChild(li);
  }

  function createDeleteButton(userObject) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
      deleteUser(userObject);
    });
    return deleteButton;
  }

  function deleteUser(userObject) {
    let users = getUsersFromLocalStorage();
    users = users.filter((user) => user.id !== userObject.id);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
  }

  function loadUsers() {
    userList.innerHTML = "";
    let users = getUsersFromLocalStorage();
    users.forEach((userObject) => {
      appendUserToDOM(userObject);
    });
  }

  function clearForm() {
    document.getElementById("user").value = "";
    document.getElementById("email").value = "";
  }

  function clearAllUsers() {
    localStorage.removeItem("users");
    loadUsers();
  }

  function searchUsers() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    userList.innerHTML = "";
    let users = getUsersFromLocalStorage();

    users
      .filter(
        (user) =>
          user.id.toString() === searchTerm ||
          user.user.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm)
      )
      .forEach((userObject) => {
        appendUserToDOM(userObject);
      });
  }

  function clearSearch() {
    searchInput.value = "";
    loadUsers();
  }

  function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  loadUsers();
});
