const pokemon = require('./data.js');

const pokemonGame = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

console.dir(pokemon, { maxArrayLength: null });
console.log(pokemonGame);

// Separate arcade game object
const arcadeGame = {
  title: "Space Invaders",
  genre: "Arcade",
  players: 1
};

arcadeGame.difficulty = "Hard";

console.log(arcadeGame);

// Step 1: Find the first starter Pokémon
const starterPokemon = pokemon.find(p => p.starter === true);

// Step 2: Add it to the game.party array
game.party.push(starterPokemon);

console.log('Starter Pokémon added to party:', starterPokemon);
console.log('Updated party:', game.party);

// Choose an Electric-type
const electricPokemon = pokemon.find(p => p.type === 'Electric');

// Choose one with HP > 80
const highHPPokemon = pokemon.find(p => p.HP > 80);

// Choose a non-starter Water-type
const waterPokemon = pokemon.find(p => p.type === 'Water' && p.starter === false);

// Add them to the party
game.party.push(electricPokemon, highHPPokemon, waterPokemon);

console.log('Updated party:', game.party);

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

console.log('Updated gyms:', game.gyms);

// Evolution map: maps starter Pokémon's ID to its evolution's ID
const evolutions = {
  1: 2,   // Bulbasaur -> Ivysaur
  4: 5,   // Charmander -> Charmeleon
  7: 8,   // Squirtle -> Wartortle
  25: 26  // Pikachu -> Raichu
};

// Find the index of the starter Pokémon in the party
const starterIndex = game.party.findIndex(p => p.starter === true);

// Get the starter Pokémon's ID
const starterID = game.party[starterIndex].id;

// Get the evolved Pokémon's ID using the evolution map
const evolvedID = evolutions[starterID];

// Find the evolved Pokémon in the `pokemon` array
const evolvedPokemon = pokemon.find(p => p.id === evolvedID);

// Replace the starter with the evolved form in the party
game.party.splice(starterIndex, 1, evolvedPokemon);

console.log('Starter evolved!');
console.log('Updated party:', game.party);

console.log('Your current party:');

game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

const starterPokemonList = pokemon.filter(p => p.starter === true);

console.log('Starter Pokémon:');
starterPokemonList.forEach(p => {
  console.log(p.name);
});

// Step 1: Add the method to the existing game object
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Step 2: Choose a Pokémon to catch — e.g., Jigglypuff
const jigglypuff = pokemon.find(p => p.name === 'Jigglypuff');

// Step 3: Use the method to catch it
game.catchPokemon(jigglypuff);

console.log('Caught Jigglypuff! 🎤');
console.log('Updated party:', game.party);

game.catchPokemon = function(pokemonObj) {
  // Add the Pokémon to the party
  this.party.push(pokemonObj);

  // Find the pokeball item in the items array
  const pokeballItem = this.items.find(item => item.name === 'pokeball');

  game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
      gym.completed = true;
    }
  });
  
  console.log('Updated gyms:', game.gyms);

  const gymTally = { completed: 0, incomplete: 0 };

  game.partyCount = function () {
    return this.party.length;
  };

  const count = game.partyCount();
  console.log('Number of Pokémon in party:', count);

  console.log('Final game state:', game);
