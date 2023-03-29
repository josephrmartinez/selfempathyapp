export function returnSixRandomValues(list) {
  const numFeelings = list.length;
  const selectedIndices = [];
  while (selectedIndices.length < 6) {
    const randomIndex = Math.floor(Math.random() * numFeelings);
    if (!selectedIndices.includes(randomIndex)) {
      selectedIndices.push(randomIndex);
    }
  }
  return selectedIndices.map(index => list[index]);
}