var MyStack = function () {
  this.q1 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;
  while (n > 1) {
    let element = this.q1.shift();
    this.q1.push(element);
    n--;
  }
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  while (n > 1) {
    let element = this.q1.shift();
    this.q1.push(element);
    n--;
  }
  let top = this.q1.shift();
  this.q1.push(top);
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

// Time Complexity:
// push → O(1)

// pop → O(n)

// peek → O(n)

// Space Complexity:
// Space Complexity = O(n)
