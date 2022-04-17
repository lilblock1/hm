// this hndlr function will iterate on the response and produce the result. Sometimes it cannot find a response so it will go in the catch statement and just show  nothing

function hndlr(response) {
  try {
    document.getElementById('content').innerHTML += `<div style="color: grey;">About ${response.searchInformation.formattedTotalResults} results (${response.searchInformation.formattedSearchTime} seconds)</div>`
    for (var i = 0; i < response.items.length; i++) {
      document.getElementById("content").innerHTML += `<br><a style="color: grey; font-size: 12px; text-decoration: none;" href=${response.items[i].link} target="_blank">${response.items[i].link}</a><a target="_blank" href=${response.items[i].link} style="text-decoration: none;"><h2 style="margin-top: 2px;">${response.items[i].title}</h2></a><div style="margin-top: -8px;">${response.items[i].htmlSnippet}</div>`;
    }
  } catch(error) {
    document.getElementById('content').innerHTML = '';
  }
}