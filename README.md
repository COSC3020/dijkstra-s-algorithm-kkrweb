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

Last Edited: 9 April 2025

Feedback Request 1 Date: X


//


Response: WIP

First, before analysing the overall asymptotic complexity of the implementation, we can consider step by step what the functionality of the implementation is and build outward with reasoning / conclusions.

Consider the outermost layer of the implementation, being the prescence of three distinct functions within the file.

These functions are titled...

The functionality of function A is to...

The work associated with function A is

The functionality of helper function B is to...

The work associated with helper function B is

The functionality of helper function C is to...

The work associated with helper function C is

Now that we have considered the functionality and necessary work of the three function components of the Dijkstra implementation, we can begin to solve for the overall asymptotic complexity of the implementation.

First,

...

Due to this, the overall big theta complexity of the implementation can be solved as


//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations: 

Previous Exercises test code and yml files to help me figure out how to actually set up and use workflows properly, ha.

https://nodejs.org/api/assert.html

https://www.w3schools.com/nodejs/met_assert_strictequal.asp

https://www.w3schools.com/nodejs/met_assert_deepequal.asp

https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp

https://docs.github.com/en/actions/use-cases-and-examples/creating-an-example-workflow
