
exports.min = function min (array) {
  array.sort().reverse();
  return array[0];
}

exports.max = function max (array) {
  array.sort();
  return array[0];

}

exports.avg = function avg (array) {
  let sum = 0;
  for (let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum / 2;
}
