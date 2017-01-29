// alert("javascript module properly installed :) please build js modues from scripts/modules/**.js folder");
function reqListener () {
  // console.log(this.responseText);
wiki_data = JSON.parse(oreq.responseText);
console.log(wiki_data);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm");
oReq.send();
