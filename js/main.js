// **********************  PERSONNAGES *******************

function getStarWarsPers() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // déserialise la reponse
        let response = JSON.parse(httpRequest.responseText);
        let ul = document.getElementById("starwarslist");
        console.log(response);

        for (let starwars in response) {
          //FOr In pour parcourir dans la string
          ul.innerHTML += `<li>${starwars} ${response[starwars]}</li>`; //$ pour dire que c'est une variable que l'on veut recevoir
        }
      } else {
      }
    }
  };
  httpRequest.open("GET", "https://swapi.dev/api/people/");
  httpRequest.send();
}

// ************************* Planets **************************
