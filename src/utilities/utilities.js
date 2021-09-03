export const formatName = (string) => {
  return string.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);
}

