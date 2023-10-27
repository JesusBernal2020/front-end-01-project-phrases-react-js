export const getRamdom = (elements) => {
  const ranmdonIndex = Math.floor(Math.random() * elements.length);

  return elements[ranmdonIndex];
};
