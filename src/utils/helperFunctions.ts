export const getPokemonId = (url: string) =>
  url.split("/").filter(Boolean).pop();
