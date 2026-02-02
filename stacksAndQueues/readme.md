What is a Stack?
Stack follows the LIFO (Last-In-First-Out) principle. The last element added is the first one to come out.

Stack Operations
Push: Add an element to the top
Pop: Remove the top element
Peek/Top: View the top-most element

Example Flow
stack.push(1) → [1]
stack.push(3) → [1, 3]
stack.pop() → returns 3 → [1]
stack.peek() → returns 1
Examples
Stacks of Books
Undo/Redo feature
Recursion (Function Call Stack)
Browsing History
What is a Queue?
Queue follows the FIFO (First-In-First-Out) principle. The first element added is the first to be removed.

Queue Operations
Enqueue: Add an element to the end
Dequeue: Remove element from the front
Peek/Front: View the front-most element

Examples
Ticket Counter
OS Task Scheduling
Printers
Queues (in general)
Why Use Stack and Queue❓
Organize data logically (based on problem’s need).
Order of Operations Matter
Optimize time & memory for specific scenarios
Use Cases
Recursion (stack)
Level Order Traversal (queue)
BFS (queue)
DFS (stack)
Language Implementation

let stack = [];
stack.push(10);
stack.push(7);
stack.pop(); // returns 7
stack.pop(); // returns 10

Stack vs Queue
📥 Stack
Last-In-First-Out
Access only from top
Used in DFS, Recursion
📤 Queue
First-In-First-Out
Access from front & rear
Used in BFS, Scheduling

Push: Add an element to the top of the stack
Pop: Remove the top-most element from the stack
Peek/Top: View the top-most element without removing it
Stack in JavaScript
let stack = []; // Simply, Use Array as Stack.

stack.push(1); // Add inside stack
stack.push(2);  
stack.push(3);  
console.log(stack); // [1, 2, 3]

stack.pop(); // A stack is LIFO (Last In, First Out), so the element that goes in last will come out first. In this case, 3 will be removed.
stack.pop();  
console.log(stack); // [1]

stack.push(7); // [1, 7]

// For Top element
let top = stack[stack.length - 1];
console.log(top); // 7

// Invalid: stack[3] – violates stack discipline
// It works fine because it's treated as an array, but this is invalid in the context of a stack.
// Always use push, pop, and peek for proper stack usage.
Queue:
A Queue is a FIFO (First-In-First-Out) data structure where the first element added is the first to be removed.

Common Operations → Queue
Enqueue: Add an element to the end of the queue
Dequeue: Remove the element from the front of the queue
Peek/Front: View the front element without removing it
Queue in JavaScript
let q = [];

// Enqueue
q.push(1);
q.push(2);
q.push(3);
console.log(q); // [1, 2, 3]

// Dequeue: Remove from front of the Queue
q.shift(); // Removes 1

// Peek: Get first element of queue.
let front = q[0];
console.log(front); // 2

// Invalid Syntax:
q.pop(); // This works because it's an array method, but it removes from the end and breaks queue logic.
// Queue should only remove from the front.
