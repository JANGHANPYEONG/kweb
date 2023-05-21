function getDivisors(num) {
  const result = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result.push(i);

      if (i !== Math.sqrt(num)) {
        result.push(num / i);
      }
    }
  }

  result.sort(function (a,b) { return a-b;});

  return result;
}