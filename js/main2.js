// instanciation de l'objet pour gérer les requêtes et les réponses
let httpRequest = new XMLHttpRequest();

// Code déclanché quand une réponse arrive du serveur
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      let data = JSON.parse(httpRequest.responseText);
      console.log(data);
      let list = document.getElementById("swapi");
      for (let ressource in data) {
        list.innerHTML += "<div>" + ressource + "</div>";
      }
    }
  } else {
    // pas encore prête
    console.log("chargement en cours");
  }
};
httpRequest.open("GET", "https://swapi.dev/api");
httpRequest.send();
