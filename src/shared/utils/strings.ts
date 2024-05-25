export const removeTrailingSlash = (str: string): string => {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

export const truncateStringByLastWord = (input: string, length: number): string => {
  if (input.length <= length) {
    return input;
  }

  let truncated = input.slice(0, length);

  if (input[length] !== ' ') {
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      truncated = truncated.slice(0, lastSpaceIndex);
    }
  }

  return truncated + '...';
}