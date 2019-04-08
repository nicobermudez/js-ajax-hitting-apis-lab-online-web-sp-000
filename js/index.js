// your code here

const rootURL = 'https://api.github.com'
function getRepositories() {
  const name = document.getElementById('username').value
  const uri = rootURL + '/users/' + name + '/repos'
  const xhr = new XMLHttpRequest()
  req.addEventListener('load', showRepositories);
  req.open('GET', 'uri');
  req.send();
}
