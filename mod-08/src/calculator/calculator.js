class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(x * y);
      }, 200);
    });
  }
}

export default Calculator;
