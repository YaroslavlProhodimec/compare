const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [4, 5, 6, 7, 8];
function hotSingles(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      resultArr.push(arr1[i]);
    }
  }


  return [...new Set(resultArr)];
}
console.log(hotSingles(arrayOne,arrayTwo));
