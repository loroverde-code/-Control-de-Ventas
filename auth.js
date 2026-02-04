function getUsers(){
  return JSON.parse(localStorage.getItem("users") || '{"Maricela":"8322"}');
}

function login(user, pass){
  let users = getUsers();
  return users[user] === pass;
}

function addUser(user, pass){
  let users = getUsers();
  users[user] = pass;
  localStorage.setItem("users", JSON.stringify(users));
}
