export const formatName = (string) => {
  const split = string.split("_");
  return split.map(word => word[0].toUpperCase() + word.substr(1)).join(" ");
}