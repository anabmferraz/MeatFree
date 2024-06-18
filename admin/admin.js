document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const searchInput = document.getElementById('search');
    
	
    form.addEventListener('submit', event => {
        event.preventDefault();
        addUser();
    });

    document.getElementById('clearButton').addEventListener('click', clearForm);
    document.getElementById('clearAllButton').addEventListener('click', clearAllUsers);
    document.getElementById('searchButton').addEventListener('click', searchUsers);
    document.getElementById('clearSearchButton').addEventListener('click', clearSearch);

	let nextUserId = 1;
	
    loadUsers();

	function addUser() {
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;

    if (user && email) {
        const userId = generateUserId(); // Gerar um ID único
        const userObject = {
			id: userId,
			user,
			email,
			date: new Date().toLocaleString()
		};

		let users = JSON.parse(localStorage.getItem('users')) || [];
		users.push(userObject);
		localStorage.setItem('users', JSON.stringify(users));

		appendUserToDOM(userObject);
		clearForm();
		}
	}

	function generateUserId() {
		return nextUserId++;
	}

	function appendUserToDOM(userObject) {
		const li = document.createElement('li');
		li.textContent = `[ID: ${userObject.id}] ${userObject.date} - ${userObject.user} - ${userObject.email}`;
		li.appendChild(createDeleteButton(userObject));
		userList.appendChild(li);
	}

    function createDeleteButton(userObject) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            deleteUser(userObject);
        });
        return deleteButton;
    }

	function deleteUser(userObject) {
		let users = JSON.parse(localStorage.getItem('users')) || [];
		users = users.filter(user => user.id !== userObject.id);
		localStorage.setItem('users', JSON.stringify(users));
		loadUsers();
	}

    function loadUsers() {
        userList.innerHTML = '';
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(userObject => {
            appendUserToDOM(userObject);
        });
    }

    function clearForm() {
        document.getElementById('user').value = '';
        document.getElementById('email').value = '';
    }

    function clearAllUsers() {
        localStorage.removeItem('users');
        loadUsers();
    }

    function searchUsers() {
        const searchTerm = searchInput.value.toLowerCase();
        userList.innerHTML = '';
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users
            .filter(user => user.user.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm))
            .forEach(userObject => {
                appendUserToDOM(userObject);
            });
    }

    function clearSearch() {
        searchInput.value = '';
        loadUsers();
    }
});