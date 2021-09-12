function fearNotLetter(str) {
  let i = 0;
  while (str.charCodeAt(i) === str.charCodeAt(0) + i) {
    i++;
  }
  return str.length > i
    ? String.fromCharCode(str.charCodeAt(0) + i)
    : undefined;
}

fearNotLetter("abce");
