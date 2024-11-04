function fibonacci(num) {
  const fibarray = [0, 1];
  let lastNum = 1;
  let secLastNum = 0;

  if (num === 0) {
    return 0;
  } else {
    for (let i = 2; i < num + 1; i++) {
      let nextNum = lastNum + secLastNum;
      fibarray.push(nextNum);
      secLastNum = lastNum;
      lastNum = nextNum;
    }
    return fibarray[fibarray.length - 1];
  }
}

module.exports = fibonacci;
