const fetchButton = document.getElementById('fetch-button');
const userContainer = document.getElementById('user-container');

fetchButton.addEventListener('click', fetchUsers);

async function fetchUsers() {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    displayUsers(data.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function displayUsers(users) {
  userContainer.innerHTML = '';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const avatarImg = document.createElement('img');
    avatarImg.src = user.avatar;
    avatarImg.alt = `${user.first_name} ${user.last_name}`;
    userDiv.appendChild(avatarImg);

    const name = document.createElement('h2');
    name.textContent = `${user.first_name} ${user.last_name}`;
    userDiv.appendChild(name);

    const email = document.createElement('p');
    email.textContent = user.email;
    userDiv.appendChild(email);

    userContainer.appendChild(userDiv);
  });
}
