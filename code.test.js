// Kane Kriz
// UWYO COSC 3020 Algorithms
// Dijkstra's Algorithm Exercise - JS test file
// 9 April 2025
//
//


//


const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//

function test() 
{
    var testGraph_1 = 
    {
        A: { B: 3, C: 1, D: 7 },
        B: { A: 3, D: 2, E: 4 },
        C: { A: 1, D: 5, F: 2 },
        D: { A: 7, B: 2, C: 5, E: 3, F: 6 },
        E: { B: 4, D: 3, G: 5 },
        F: { C: 2, D: 6, G: 1 },
        G: { E: 5, F: 1 }
    };
    
    var shortestPaths_1 = dijkstra(testGraph_1, 'A');

    assert.strictEqual(shortestPaths_1.A, 0);
    assert.strictEqual(shortestPaths_1.C, 1);
    assert.strictEqual(shortestPaths_1.D, 5);
    assert.strictEqual(shortestPaths_1.G, 4);

//

    var testGraph_2 = 
    {
        A: { B: 2, C: 1 },
        B: { A: 2, C: 1, D: 3 },
        C: { A: 1, B: 1, D: 2 },
        D: { B: 3, C: 2 }
    };
    
    var shortestPaths_2 = dijkstra(testGraph_2, 'A');
  
    assert.strictEqual(shortestPaths_2.A, 0);
    assert.strictEqual(shortestPaths_2.B, 2);
    assert.strictEqual(shortestPaths_2.C, 1);
    assert.strictEqual(shortestPaths_2.D, 3);

//

    var testGraph_3 = 
    {
        A: { B: 2 },
        B: { A: 2, C: 1 },
        C: { B: 1 },
        X: { Y: 3 },
        Y: { X: 3 },
        Z: {}
    };
    
    var shortestPaths_3 = dijkstra(testGraph_3, 'A');
  
    assert.strictEqual(shortestPaths_3.A, 0);
    assert.strictEqual(shortestPaths_3.B, 2);
    assert.strictEqual(shortestPaths_3.C, 3);
    assert.strictEqual(shortestPaths_3.X, Infinity);
    assert.strictEqual(shortestPaths_3.Y, Infinity);
    assert.strictEqual(shortestPaths_3.Z, Infinity);

//

    var testGraph_4 = //full
    {
        A: { B: 1, C: 1, D: 1, E: 1 },
        B: { A: 1, C: 1, D: 1, E: 1 },
        C: { A: 1, B: 1, D: 1, E: 1 },
        D: { A: 1, B: 1, C: 1, E: 1 },
        E: { A: 1, B: 1, C: 1, D: 1 }
    };
    
    var shortestPaths_4 = dijkstra(testGraph_4, 'A');
  
    assert.strictEqual(shortestPaths_4.A, 0);
    assert.strictEqual(shortestPaths_4.B, 1);

//

    var testGraph_5 = //empty
    {
        A: {}
    };
    
    var shortestPaths_5 = dijkstra(testGraph_5, 'A');
  
    assert.strictEqual(shortestPaths_5.A, 0);

//

    var testGraph_6 = 
    {
        A: {},
        B: {},
        C: {},
        D: {},
        E: {},
        F: {},
        G: {},
        H: {}
    };
    
    var shortestPaths_6 = dijkstra(testGraph_6, 'A');
  
    assert.strictEqual(shortestPaths_6.A, 0);
    assert.strictEqual(shortestPaths_6.H, Infinity);
}

test();
