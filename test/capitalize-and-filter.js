export function capitalizeAndFilter(arr) {
  const capitalizedArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  return capitalizedArray.filter(str => str.charAt(0) !== 'F');
}
