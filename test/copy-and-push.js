export function copyAndPush(arr, n) {
  const newArray = [...arr];

  newArray.push(n);

  return newArray;
}
