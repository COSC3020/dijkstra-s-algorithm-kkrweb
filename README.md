# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


//


Name: Kane Kriz

Start Date: 19 March 2025

Last Edited: 11 April 2025

Feedback Request 1 Date: 11 April 2025


//


Response: WIP

First, before analyzing the overall asymptotic complexity of the implementation, we can consider step by step the functionality of the code and build outward with reasoning and conclusions.

The outermost layer of the implementation consists of three functions.
These functions are the main `dijkstra` function and two helper functions, `getNearNode` and `setNodeDistances`.

The functionality of the main dijkstra function is to compute the shortest paths from a given start node to all other nodes in a weighted graph.

First, it initializes the `shortestDistances` and `processedNodes` objects.
The function then iteratively processes nodes by locating the nearest unprocessed node and updating its neighbors' distances.
This repeats until all possible reachable nodes have been processed and considered. 

The work required for the function is due to the initialization loop, which runs in O(V) time, with V representing the number of nodes. 
The main while loop of course has additional work required, but this depends on the implementation and work of the helper functions, covered below.

The functionality of helper function `getNearNode` is to find the nearest unprocessed node by scanning the `shortestDistances` object. 
The `shortestDistances` object initially assigns Infinity to all nodes except the start node which begins at 0.
This Infinity represents that no paths have been discovered yet. 

As the algorithm progresses, nodes found to have confirmed shorter paths have their distances updated within the object and thus can be easily monitored / checked where applicable.

This implementation involves iterating through all nodes to locate the node with the smallest distance, that has not been processed so far.
The work associated with this `getNearNode` function is thus O(V) per call, as it performs a linear scan over all nodes in the worst case in each respective call of the helper.

The functionality of helper function `setNodeDistances` is to update the distances of a node's neighbors by checking if a shorter path exists than the current recorded shortest path through the respective node.

`setNodeDistances` iterates over all neighbors of the given node, computing new distances and updating them if they are shorter than previously recorded values. 

The required work of with this function is O(E) in total across all calls as each edge is processed at most once.
E represents the number of edges.
This reliance upon edge count for the respective runtime of the helper is evident as node count drives the outer loop, but the iterations of the inner loop depend on the connected edges, summing to E work due to this.

Now that we have considered the functionality and necessary work of the three individual function components, we can determine the overall asymptotic complexity. 

The main while loop runs once for each node, resulting in O(V) iterations.
In each iteration, `getNearNode` is called, contributing O(V) work per call, and `setNodeDistances` processes edges in summed O(E) time. 
The dominant term asymptotically is thus the O(V) calls to `getNearNode`, each requiring their own O(V) work.

Due to this, the overall big theta complexity of the implementation is $Θ(V^2)$.


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations: 

Previous Exercises test code and yml files to help me figure out how to actually set up and use workflows properly, ha.

Test code help - https://nodejs.org/api/assert.html

Test code help - https://www.w3schools.com/nodejs/met_assert_strictequal.asp

Test code help - https://www.w3schools.com/nodejs/met_assert_deepequal.asp

Test code help - https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp

Test code help, creating a workflow properly - https://docs.github.com/en/actions/use-cases-and-examples/creating-an-example-workflow

More psuedocode, visualization of dijkstra's - https://www.programiz.com/dsa/dijkstra-algorithm

Logic help, psuedocode - https://pages.cs.wisc.edu/~jsingh/


