// 225. Implement Stack using Queues
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  let element = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return element;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  let top = this.q1.shift();
  this.q2.push(top);

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

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

// pop/top → O(n)

// empty → O(1)

// Space Complexity:
// Space Complexity = O(1)
