// fetch("https://swapi.dev/api")
// Methode Fetch qui prends 2 parametres "url" et "option" ici nous ne prenons que l'URL
// .then((reponse) => console.log(reponse))  =Status OK du serveur,
// il faut transformer cette reponse en Json pour pouvoir l'exploiter dans une 2eme .then
//.then((reponse) => console.log (reponse.json()))  =Renvoie un epromesse en attente; d'ou le 2nd then
// .then((reponse) => reponse.json())
// Promesse, retour de la reponse du fetch.
// la reponse n'est pas visible. On doit refaire un deuxieme .then

// On recupere la 2eme reponse qu'on appelle reponse2 par exemple
// .then((reponse2) => console.log(reponse2.films));

// logique du clique sur Rechercher pour declenché Fetch

let btn = document.getElementById("recherche");

function getValue() {
  let input = document.getElementById("saisie").value;
  console.log(input);

  btn.onclick = function () {
    fetch("https://swapi.dev/api/people/" + input + "/")
      .then((reponse) => reponse.json())

      .then((reponse2) => {
        console.table(reponse2);

        let ul = document.getElementById("output");

        ul.innerHTML += `<li>${reponse2.name}</li>`;
        ul.innerHTML += `<li>${reponse2.height}</li>`;
        ul.innerHTML += `<li>${reponse2.mass}</li>`;
        ul.innerHTML += `<li>${reponse2.hair_color}</li>`;
        ul.innerHTML += `<li>${reponse2.skin_color}</li>`;
        ul.innerHTML += `<li>${reponse2.eye_color}</li>`;
        ul.innerHTML += `<li>${reponse2.birth_year}</li>`;
        ul.innerHTML += `<li>${reponse2.gender}</li>`;
        ul.innerHTML += `<li>${reponse2.films}</li>`;
        ul.innerHTML += `<li>${reponse2.species}</li>`;
        ul.innerHTML += `<li>${reponse2.vehicles}</li>`;
        ul.innerHTML += `<li>${reponse2.starships}</li>`;
      });
  };
}
