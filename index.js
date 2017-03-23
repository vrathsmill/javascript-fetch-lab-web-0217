function getIssues() {
  const repo = 'vrathsmill/javascript-fetch-lab/issues'
  const root = 'https://api.github.com/repos/'
  let token = ''
  fetch(`${root}${repo}`, {
      headers: {
             Authorization: `token ${token}`
           }
         }).then(res => res.json()).then(json => showResults(json));
 }


function showIssues(json) {
  var t = document.getElementById("issues-template").innerHTML
  var template = Handlebars.compile(t)
  var html = template(json)
  document.getElementById('issues').innerHTML = html
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let data = {title: `${title}`, body: `${body}`}
  const repo = 'vrathsmill/javascript-fetch-lab/issues'
  const root = 'https://api.github.com/repos/'
  fetch(`${root}${repo}`,
    {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`
      },
      body: JSON.stringify(data)
    }).then(resp => getIssues())
}

function showResults(json) {
  var t = document.getElementById("repo-template").innerHTML
  //debugger
  var template = Handlebars.compile(t)

  var html = template(json)
  document.getElementById("results").innerHTML = html

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const root = 'https://api.github.com/repos/'
  let token = ''
 fetch(`${root}${repo}`, {
     method: 'post',
     headers: {
            Authorization: `token ${token}`
          }
        }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
