function dijkstra(graph, startNode) {
    const numNodes = graph.length;
    const distances = new Array(numNodes).fill(Number.POSITIVE_INFINITY);
    const visited = new Array(numNodes).fill(false);
  
    distances[startNode] = 0;
  
    for (let i = 0; i < numNodes - 1; i++) {
      const minDistanceNode = findMinDistanceNode(distances, visited);
  
      visited[minDistanceNode] = true;
  
      for (let j = 0; j < numNodes; j++) {
        if (
          !visited[j] &&
          graph[minDistanceNode][j] !== 0 &&
          distances[minDistanceNode] + graph[minDistanceNode][j] < distances[j]
        ) {
          distances[j] = distances[minDistanceNode] + graph[minDistanceNode][j];
        }
      }
    }
  
    return distances;
  }
  
  function findMinDistanceNode(distances, visited) {
    let minDistance = Number.POSITIVE_INFINITY;
    let minDistanceNode = -1;
  
    for (let i = 0; i < distances.length; i++) {
      if (!visited[i] && distances[i] < minDistance) {
        minDistance = distances[i];
        minDistanceNode = i;
      }
    }
  
    return minDistanceNode;
  }
  
  // Example usage:
  const graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0],
  ];
  
  const startNode = 0;
  const shortestDistances = dijkstra(graph, startNode);
  
  console.log("Shortest distances from node", startNode);
  for (let i = 0; i < shortestDistances.length; i++) {
    console.log(`Node ${i}: ${shortestDistances[i]}`);
  }
  