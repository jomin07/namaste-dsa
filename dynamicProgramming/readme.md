Dynamic Programming
Dynamic programming is both a mathematical optimization method and an algorithmic paradigm. The method was developed by Richard Bellman in the 1950s.

It is an optimisation technique use along with data structures.
Applied in mathematics and optimisation.
Dynamic Programming = Intelligent Laziness
Dynamic Programming (DP) can be thought of as intelligent laziness. The idea is simple:

We want to solve a problem efficiently, without doing the same hard work again and again.
In a brute-force approach, we try to solve a problem by breaking it down into smaller subproblems. However, many of these subproblems turn out to be repeated. If we solve them every single time they appear, we end up wasting a lot of time and effort.
Dynamic Programming avoids this waste. Instead of re-solving the same subproblem multiple times, we solve it once, store the result (in memory, an array, or a table), and reuse it whenever the same subproblem appears again.
This way:
We still break down a big problem into smaller ones (divide and conquer).
But we don’t repeat ourselves — we remember what we have already done.
This makes the solution much faster than the naive brute-force approach.
In-short DP means:
Break the big problem into subproblems.
Solve each subproblem only once.
Store the result.
Reuse it when needed.
Example of DP:

1. Google Maps
2. DNA Matching
3. Alignment Algorithms
4. Stock market Predictions
5. Video Games AI
   Dynamic Programming:
   DP is an optimisation technique used to solve problems that can be broken down into overlapping subproblems that have an optimal structure.

Overlapping Subproblems: While solving a big problems, we repeatedly solve same smaller problems.
Optimal Substructure: The solution to the big problem can be constructed from solution of smaller sub problems.
Remember:
“DP is about storing and reusing the results of smaller sub problems, instead of recalculating again”.
Dynamic Programming is simply optimized recursion To understand DP, you must first understand recursion.

---

Fibonacci Numbers using DP
Prerequisite: Recursion

N = 4

This recursion has exponential time complexity, as the recursion tree grows significantly when n increases.
For example, if n = 6.

Overlapping Subproblems:
As you can see, some subproblems repeat. If you encounter the same subproblems again and again, this is known as overlapping subproblems.

Optimal Substructure:
When solving smaller subproblems helps in solving the bigger problem, the problem is said to have an optimal substructure.

Note:
If any problem satisfies these two properties (overlapping subproblems and optimal substructure), it is an ideal candidate for Dynamic Programming (DP).

Time Complexity:
The time complexity of this problem using plain (naive) recursion is O(2n).
Now, applying DP to this problem: DP works on the DRY (Don’t Repeat Yourself) principle. Instead of recalculating overlapping subproblems, we save their results and reuse them.

In this above image (Focus on the left side -→ it symbolizes an arrow), we maintain a storage (memoization table or DP array) to keep previously computed results.

By doing this, we can fetch already computed results from the storage. This way, we don’t need to calculate the same subproblems again and again.
By storing these values, the time complexity reduces from O(2n) to O(n)..
Fib(100):
This would take longer than universe’s age with naive recursion, but with DP you can solve it instantelously.

Fib(n):
where n is for bigger values.

Exponential growth leads to Astronomically large number of operations, making it computationally infeasible within a reasonable timeframe.

DP Vs Greedy: (When to use:)
Greedy: Make the best local choice and hope to reach the Global Optimal Solution.
DP: Explore all possibilities store result of subproblem and reach the result.
