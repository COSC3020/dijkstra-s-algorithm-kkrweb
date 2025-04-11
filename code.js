// Kane Kriz
// UWYO COSC 3020
// Dijkstra Exercise
// 9 April 2025
//


//


function dijkstra(graph, startNode)
{
    var shortestDistances = {};
    var processedNodes = {};
    
    //initializing the nodes as directed within the exercise description
    for(var node in graph)
    {
        if(node == startNode)
        {
            shortestDistances[node] = 0;
        }
            
        else
        {
            shortestDistances[node] = Infinity;
        }
    }
    
    var currentNode = getNearNode();
    
    while(currentNode != null)
    {
        processedNodes[currentNode] = true;
        setNodeDistances(currentNode);
        currentNode = getNearNode();
    }
    
    return shortestDistances;

    
    //

    //gets the nearest unprocessed node
    function getNearNode()
    {
        var closestNode;
        var shortestDistance = Infinity;
        
        for(var node in shortestDistances)
        {
            if(!processedNodes[node])
            {
                if(shortestDistances[node] < shortestDistance)
                {
                    closestNode = node;
                    shortestDistance = shortestDistances[node];
                }
            }
        }
        
        return closestNode;
    }

    
    //

    //updates changing node neighbor distances
    function setNodeDistances(node)
    {
        var neighborNodes = graph[node];
        var currentDistance = shortestDistances[node];
        
        for(var n in neighborNodes)
        {
            var newDistance = (currentDistance + neighborNodes[n]);
            
            if(newDistance < shortestDistances[n])
            {
                shortestDistances[n] = newDistance;
            }
        }
    }
}

//
