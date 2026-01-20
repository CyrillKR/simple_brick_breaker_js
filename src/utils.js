export function flattenArray(twoDimArr) {
  let flatArr = [];
  console.log(flatArr);

  for (let i = 0; i < twoDimArr.length; i++) {
    for (let j = 0; twoDimArr[i].length; j++) {
      flatArr.push(twoDimArr[i][j]);
    }
  }

  return flatArr;
}
