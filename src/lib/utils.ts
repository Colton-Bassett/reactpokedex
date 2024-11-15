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
