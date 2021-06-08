export function capitalizeAndFilter(arr) {
  const array = [];
  for(const str of arr) {
    if(str.charAt(0) !== 'f' && str.charAt(0) !== 'F') {
      array.push(str.charAt(0).toUpperCase() + str.slice(1));
    } 
  }
  return array;
}
