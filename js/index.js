// your code here

const rootURL = 'https://api.github.com'

function getRepositories() {
  const name = document.getElementById('username').value
  const uri = rootURL + '/users/' + name + '/repos'
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('load', showRepositories);
  xhr.open('GET', 'uri');
  xhr.send();
  return false
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
}
