export function separatePokemonTypes(type: string): string[] {
  // List of all valid Pokémon types
  const validTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  // Find both types if they exist
  const types = validTypes.filter((validType) => type.includes(validType));

  return types;
}

// for route navigation
export function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// formatting pokemon name and types from fetchPokemonFromAPI()
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// for getting pokemon from db
export function getRandomNumbers(
  count: number,
  min: number,
  max: number,
): number[] {
  const numbers: Set<number> = new Set();

  // Keep generating random numbers until we have the required count
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }

  return Array.from(numbers);
}
