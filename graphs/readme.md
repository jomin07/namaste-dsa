Introduction to Graphs

Graphs
A graph is a data structure that helps us represent relationships or connection between objects.

It consists of:
Vertices(Node): Entities or objects.
Edges: Links or connection between vertices.
Mathematically, A graph is written as G = (V, E)

Degree
How many connections does the node have. As how many edges going from the particular nodes.

Examples: How many degree’s they have?
3 → 4 degree’s
7 → 2 degree’s
2 → 1 degree’s
There is a special type of graph called a directed graph, which has in-degree and out-degree.(Further, we learn about these topics in detail)

Path
It is a way to go from one node to another node.

Different Paths in above Graph

2 → 7 → 3 → 5
2 → 7 → 3 → 6 → 9
2 → 7 → 3 → 1 → 6 → 9
We can go from one place to another using different paths; there can be many paths or sometimes no path at all.
Cycle
If some components are connected to each other in a loop, they form a cycle.

Example: 3 → 1 → 6

Basically, if you start from any node and reach the same node again after traversing some other nodes, it is called a cycle.

Real-World Analogy
Example 1:
Let’s take Facebook friends as an example.

friends
B has 3 friends (A, C, and, D) means, B Node has 3 degree
C has 2 friends (B and G)
D has 2 friends (B and E)
In conclusion, if we need to store the data of friends, we can use a graph data structure.

Example 2:
Cities

If someone has to travel from Jaipur to Mussoorie, they can take many different routes.

Jaipur → Delhi → Dehradun → Mussoorie
Jaipur → Delhi → Chandigarh → Dehradun → Mussoorie
Two Types of Graphs

1. Undirected Graphs

We saw this graph in the previous examples.

Facebook Friends
Cities 2. Directed Graph (Digraphs)
Directed Graph shows the realtionship between the two entities or two objects in one direction.

Examples:

Instagram Followers
Web Pages
Dependencies 3. Weighted Graphs
If we assign weights to the edges, it becomes a weighted graph.

∙ From the above example, we can give some weighted to the edges.

∙ Also, weights are also referred to by terms such as cost, distance, time, price, or weight.

4. Unweighted Graphs
   ∙ All edges are considered equal.

∙ You only care about connections, not their cost/weight.

5. Cyclic Graphs

∙ Atleast one cycle.

6. Acyclic Graphs

∙ No Cycles

∙ You only care about connections, not their cost/weight.

7. Directed Acyclic Graphs

Examples: NPM Dependencies, Version Control (git), Trees (It is a special type of graph)

Directed Graphs
Indegree and Outdegree

∙ Indegree: It is the number of edges pointing into a vertex.

Example: Indegree ‘C’: 1

∙ Outdegree: It is the number of edges pointing out of a vertex

Example: Outdegree ‘C’: 2

8. Connected Graphs

∙ Atleast one path between each pair of node.

∙ Everything is reachable.

Example: Path: C → D, D → E, B → C and more.

9. Disconnected Graphs

Disconnected Graphs uses:
∙ Grouped Friend Circle

∙ Unconnected Clusters

Summary
