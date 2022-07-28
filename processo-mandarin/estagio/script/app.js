function buscar_pokemon() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let pokes = document.getElementsByClassName('pokemons');
    
  for (i = 0; i < pokes.length; i++) { 
      if (!pokes[i].innerHTML.toLowerCase().includes(input)) {
          pokes[i].style.display="none";
      }
      else {
          pokes[i].style.display="list-item";                 
      }
  }
}

const div = document.querySelector('div#pokemons')

const pokemonUrl = `https://api-pokemon-teste-mandarin.herokuapp.com/pokemons` //url da API

fetch(pokemonUrl) // Faz chamada HTTP para a API
    .then(response => response.json()) // Quando a chamada acabar, transforma a resposta em JSON
    .then(data => {
      console.log(data) // Printa no console os dados dos Pokémons
  
    data.forEach(pokemon => {
      div.innerHTML += `
        <div class="pokemon">
            <ul style="list-style: none;">
                <li class='pokemons'>
                    <img src=${pokemon.image_url} style="background-image:url(${pokemon.background_image_url})">
                        <p><strong>${pokemon.name}</strong> - ${pokemon.category}</p>
                </li>
            </ul>
        </div>
      `
    })
});