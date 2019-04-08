// your code here

const rootURL = 'https://api.github.com'
function getRepositories() {
  const name = document.getElementById('username').value
  const uri = rootURL + '/users/' + name + '/repos'
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
