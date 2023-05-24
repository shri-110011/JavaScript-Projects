function Queue() {
  this._front = null;
  this._end = null;
  this.items = {};

  Object.defineProperty(this, "front", {
    get: function () {
      return this._front;
    },
    enumerable: true,
  });

  Object.defineProperty(this, "end", {
    get: function () {
      return this._end;
    },
    enumerable: true,
  });

  this.enqueue = (val) => {
    if (this._front === null) {
      this._front = 0;
      this._end = 0;
    } else {
      this._end++;
    }
    this.items[this._end] = val;
  };

  this.dequeue = () => {
    const x = this.items[this._front];
    delete this.items[this._front];
    this._front++;

    if (this._front > this._end) {
      this._front = null;
      this._end = null;
    }
    return x;
  };

  this.isEmpty = () => {
    if (this._front == null) return true;
    else return false;
  };
}

function Heap(type = "max", items = new Map()) {
  /* this.items is map where the key is an integer starting from 0 and the value 
  contains the nodes. Each node is an object with 2 properties:
  "key": string
  "dValue": number */
  this.items = items;

  /*   this.keyIndexMap is a map whose keys are the ids of the nodes and values are
  the indexes in this.items where the corresponding nodes are stored. */
  this.keyIndexMap = new Map();

  if (typeof type !== "string") {
    throw new Error(`Type of 'type' is: ${type} expected: string.`);
  }

  if (type !== "min" && type !== "max") {
    throw new Error(
      `Value for 'type' must be either 'max' or 'min' but provided: '${type}'.`
    );
  }

  Object.defineProperty(this, "heapSize", {
    get: function () {
      return this.items.size;
    },
  });

  this.insert = (val) => {
    if (this.keyIndexMap.get(val.key) === undefined) {
      this.items.set(this.heapSize, val);
      this.adjustUpwwards(this.heapSize - 1);
    } else {
      throw new Error(`Node having duplicate key: '${val.key}' provided!`);
    }
  };

  this.delete = () => {
    const { key, dValue } = this.items.get(0);
    this.items.set(0, this.items.get(this.heapSize - 1));

    /* Note we must correct the index associated with the node that was at the
    position 'this.heapSize - 1' before we deleted the minimum element from the heap.
    Because now that node is at position 0 in the heap. So we must make the index as
    0 for that node in the  'this.keyIndexMap' otherwise there is a possibility that
    this element may not move down the heap during the 'this.adjustDownWards()'. */
    this.keyIndexMap.set(this.items.get(this.heapSize - 1).key, 0);

    this.items.delete(this.heapSize - 1);
    this.keyIndexMap.delete(key);

    this.adjustDownwards(0);

    return { key: key, dValue: dValue };
  };

  this.adjustUpwwards = (nodeIdx) => {
    // console.log("nodeIdx:",nodeIdx);
    const val = this.items.get(nodeIdx);

    while (nodeIdx != 0) {
      let parentIdx = Math.floor((nodeIdx - 1) / 2);
      let nodeVal = this.items.get(nodeIdx);
      let parentVal = this.items.get(parentIdx);
      if (this._compare(nodeVal, parentVal)) {
        this.keyIndexMap.set(this.items.get(nodeIdx).key, parentIdx);
        this.keyIndexMap.set(this.items.get(parentIdx).key, nodeIdx);

        this._swap(nodeIdx, parentIdx);

        nodeIdx = parentIdx;
      } else {
        break;
      }
    }
    this.keyIndexMap.set(val.key, nodeIdx);
    // console.log("Adjust upwards done!");
  };

  this.adjustDownwards = (nodeIdx) => {
    let leftChildIdx;
    while ((leftChildIdx = 2 * nodeIdx + 1) < this.heapSize) {
      let rightChildIdx = 2 * nodeIdx + 2;
      let parentVal = this.items.get(nodeIdx);
      let leftChildVal = this.items.get(leftChildIdx);
      if (rightChildIdx >= this.heapSize) {
        if (this._compare(leftChildVal, parentVal)) {
          /* We have to change the keyIndexMap before we swap the nodes in items. */
          this.keyIndexMap.set(this.items.get(nodeIdx).key, leftChildIdx);
          this.keyIndexMap.set(this.items.get(leftChildIdx).key, nodeIdx);

          this._swap(leftChildIdx, nodeIdx);
          nodeIdx = leftChildIdx;
        } else {
          break;
        }
      } else {
        let rightChildVal = this.items.get(rightChildIdx);
        if (
          this._compare(leftChildVal, rightChildVal) ||
          leftChildVal.dValue === rightChildVal.dValue
        ) {
          if (this._compare(leftChildVal, parentVal)) {
            this.keyIndexMap.set(this.items.get(nodeIdx).key, leftChildIdx);
            this.keyIndexMap.set(this.items.get(leftChildIdx).key, nodeIdx);

            this._swap(leftChildIdx, nodeIdx);
            nodeIdx = leftChildIdx;
          } else {
            break;
          }
        } else {
          if (this._compare(rightChildVal, parentVal)) {
            this.keyIndexMap.set(this.items.get(nodeIdx).key, rightChildIdx);
            this.keyIndexMap.set(this.items.get(rightChildIdx).key, nodeIdx);

            this._swap(rightChildIdx, nodeIdx);
            nodeIdx = rightChildIdx;
          } else {
            break;
          }
        }
      }
    }
    // console.log("Adjust downwards done!");
  };

  this.heapify = () => {
    let lastNodeIdx = this.heapSize - 1;

    for (let nodeIdx = lastNodeIdx; nodeIdx >= 0; nodeIdx--) {
      // console.log("nodeIdx:",nodeIdx);
      /* Every node has to be first entered into the 'keyIndexMap' so that
        we know the index of every node in 'items' map. 
        
        During the heapify process if the indexes of the nodes in 'items' map 
        change those will also be reflected in 'keyIndexMap'. This can be seen
        in this.adjustDownwards() where the changes to the indexes associated
        with nodes are updated in 'keyIndexMap' just before each call to 
        this._swap() .
        */
      this.keyIndexMap.set(this.items.get(nodeIdx).key, nodeIdx);
      this.adjustDownwards(nodeIdx);
    }
  };

  this.decrementKey = (key, newDvalue) => {
    let idx;
    if ((idx = this.keyIndexMap.get(key)) !== undefined) {
      this.items.get(idx).dValue = newDvalue;

      this.adjustUpwwards(idx);
    }
  };

  this._swap = (idx1, idx2) => {
    let temp = this.items.get(idx1);
    this.items.set(idx1, this.items.get(idx2));
    this.items.set(idx2, temp);
  };

  /* In case of min heap _compare() will check if the val1 is less than val2.
    In case of max heap _compare() will check if the val1 is greater than val2. */
  this._compare = (val1, val2) => {
    if (type === "min") {
      return val1.dValue < val2.dValue;
    } else {
      return val1.dValue > val2.dValue;
    }
  };

  this.isEmpty = () => {
    return this.items.size === 0;
  };
}

function GraphUsingAdjacencyList() {
  this.adjacenyList = new Map();

  this.addVertex = (vertexId) => {
    if (typeof vertexId !== "string") {
      throw new Error(
        `'vertexId' must be of type 'string' given: '${vertexId}'!`
      );
    }

    if (this.adjacenyList.get(vertexId) === undefined) {
      this.adjacenyList.set(vertexId, new Map());
    } else {
      throw new Error(`'vertexId': '${vertexId}' is not unique!`);
    }
  };

  /* src -> source vertex id
  dest -> destination vertex id 
  And we right now have a graph that is undirected and unweighted. 

  We are using a Map where the key is the vertex id and the value a Map whose
  key stores the vertex's neighbour's id and value contains info about this
  edge like the weight.
  */
  this.addEdge = (src, dest, weight = 1) => {
    const srcConnections = this.adjacenyList.get(src);
    if (srcConnections === undefined) {
      throw new Error(`'src': '${src}' doesn't exist in the graph!`);
    }

    const destConnections = this.adjacenyList.get(dest);
    if (destConnections === undefined) {
      throw new Error(`'dest': '${dest}' doesn't exist in the graph!`);
    }

    srcConnections.set(dest, { weight: weight });
    destConnections.set(src, { weight: weight });
  };

  /* start -> start vertex id */
  this.bfsTraverse = (start) => {
    if (this.adjacenyList.size > 0) {
      const startConnections = this.adjacenyList.get(start);
      if (startConnections === undefined) {
        throw new Error(`'start': '${start}' doesn't exist in the graph!`);
      }

      let queue = new Queue();
      let visitedVerticesIds = {};

      queue.enqueue(start);

      while (!queue.isEmpty()) {
        let vertexId = queue.dequeue();
        visitedVerticesIds[vertexId] = true;

        let vertexConnections = this.adjacenyList.get(vertexId);
        console.log(vertexId);

        for (let key of vertexConnections.keys()) {
          if (!visitedVerticesIds[key]) {
            // console.log(`key: ${key} visited: ${!visitedVerticesIds[key]}`);
            queue.enqueue(key);
            visitedVerticesIds[key] = true;
          }
        }
      }
      console.log("BFS traversal of the graph completed!");
    }
  };

  this.findShortestDistanceFrom = (vertextId) => {
    let sdo = {};
    let items = [];
    let count = 0;
    for (let key of this.adjacenyList.keys()) {
      if (key === vertextId) {
        sdo[key] = 0;
        items.push([count, { key: key, dValue: 0 }]);
      } else {
        sdo[key] = Infinity;
        items.push([count, { key: key, dValue: Infinity }]);
      }
      count++;
    }

    // console.log(sdo);
    // console.log(items);

    const heap = new Heap("min", new Map(items));
    heap.heapify();

    // console.log(heap.items);
    // console.log(heap.keyIndexMap);

    while (!heap.isEmpty()) {
      let node = heap.delete();

      // console.log("After delete:");
      // console.log(heap.items);
      // console.log(heap.keyIndexMap);
      // console.log("node:", node);

      let adjacentNodes = this.adjacenyList.get(node.key);
      for (let adjacentNodeId of adjacentNodes.keys()) {
        // console.log("Adjacent Node:", adjacentNodeId);
        if (
          sdo[adjacentNodeId] >
          sdo[node.key] + adjacentNodes.get(adjacentNodeId).weight
        ) {
          let newDValue =
            sdo[node.key] + adjacentNodes.get(adjacentNodeId).weight;
          sdo[adjacentNodeId] = newDValue;
          // console.log("newDValue:",newDValue);
          heap.decrementKey(adjacentNodeId, newDValue);

          // console.log("After decrementKey:");
          // console.log(heap.items);
          // console.log(heap.keyIndexMap);
        }
      }
    }

    return sdo;
  };

  this.findShortestPath = (srcVertexId, destVertexId) => {
    const sdo = this.findShortestDistanceFrom(srcVertexId);

    let currentVertexId = destVertexId;
    let path = [];
    path.push(currentVertexId);

    while (currentVertexId !== srcVertexId) {
      // adjaentNodes contains the nodes adjacent to currentVertexId.
      let adjaentNodes = this.adjacenyList.get(currentVertexId);

      for (let adjacentNodeId of adjaentNodes.keys()) {
        console.log("adjacentNodeId:", adjacentNodeId);
        /* When adjacentNodeId is same as srcVertexId then we can't say:
        currentVertexId = adjacentNodeId
        because the srcVertexId has the least dValue of all the adjacent nodes of
        currentVertexId.
        and there may be a case when:
        sdo[srcVertexId] + adjaentNodes.get(srcVertexId).weight > sdo[currentVertexId]
        in which case the direct link b/w srcVertexId and currentVertexId is not there.
         */
        if (adjacentNodeId === srcVertexId) {
          if (
            sdo[adjacentNodeId] + adjaentNodes.get(adjacentNodeId).weight ===
            sdo[currentVertexId]
          ) {
            currentVertexId = adjacentNodeId;
          }
        } else {
          if (sdo[adjacentNodeId] < sdo[currentVertexId]) {
            currentVertexId = adjacentNodeId;
          }
        }
      }

      /* In case when there is no path from srcVertexId to destVertexId then the
      'path' array will contain  just a single element that is the destVertexId. */
      if (currentVertexId === destVertexId) break;
      else {
        console.log("currentVertexId:", currentVertexId);
        path.push(currentVertexId);
      }
    }

    /* We are reversing the 'path' so that the vertices ids appear in the order from 
    srcVertex to destVertex. */
    return path.reverse();
  };
}

let graph = new GraphUsingAdjacencyList();
// graph.addVertex('A');
// graph.addVertex('B');
// // graph.addVertex('A');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A','B',3);
// graph.addEdge('A','D');
// graph.addEdge('C','B');
// graph.addEdge('F','B');
// graph.addEdge('E','F');

// console.log(graph.adjacenyList);

// graph.bfsTraverse('A');

// console.log(graph.findShortestDistanceFrom("A"));

// --------------------------------------------

graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addVertex("7");
graph.addVertex("8");

graph.addEdge("1", "0", 3);
graph.addEdge("1", "2", 4);
graph.addEdge("2", "0", 8);
graph.addEdge("1", "4", 4);
graph.addEdge("3", "5", 2);
graph.addEdge("2", "3");
graph.addEdge("4", "3", 3);
graph.addEdge("4", "5");
graph.addEdge("5", "7", 5);
graph.addEdge("7", "4", 6);
graph.addEdge("8", "6", 1);
graph.addEdge("7", "8", 2);
graph.addEdge("5", "6", 2);

console.log(graph.findShortestDistanceFrom("0"));
console.log(graph.findShortestPath("0", "7"));
