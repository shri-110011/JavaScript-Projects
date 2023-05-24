function Heap(type='max') {
    this.items = new Map();

    if(typeof type !== "string") {
        throw new Error(`Type of 'type' is: ${type} expected: string.`);
    }

    if(type !== "min" && type !== "max") {
        throw new Error(`Value for 'type' must be either 'max' or 'min' but provided: '${type}'.`);
    }

    Object.defineProperty(this, 'heapSize', {
        get: function () {
            return this.items.size;
        }
    })

    this.insert = (val) => {
        this.items.set(this.heapSize, val);
        this.adjustUpwwards(this.heapSize-1);
    }

    this.delete = () => {
        const x = this.items.get(0);
        this.items.set(0, this.items.get(this.heapSize-1));
        this.items.delete(this.heapSize-1);
        this.adjustDownwards(0);
        return x;
    }

    this.adjustUpwwards = (nodeIdx) => {
        // console.log("nodeIdx:",nodeIdx);
        while(nodeIdx != 0) {
            // console.log("nodeIdx:",nodeIdx);
            let parentIdx = Math.floor((nodeIdx-1)/2);
            let nodeVal = this.items.get(nodeIdx);
            let parentVal = this.items.get(parentIdx);
            if(this._compare(nodeVal, parentVal)) {
                this._swap(nodeIdx, parentIdx);
                nodeIdx = parentIdx;
            }
            else {
                break;
            }
        }
        // console.log("Adjust upwards done!");
    }

    this.adjustDownwards = (nodeIdx) => {
        let leftChildIdx;
        while((leftChildIdx = 2*nodeIdx+1) < this.heapSize) {
            let rightChildIdx = 2*nodeIdx+2;
            let parentVal = this.items.get(nodeIdx);
            let leftChildVal = this.items.get(leftChildIdx);
            if(rightChildIdx >= this.heapSize) {
                if(this._compare(leftChildVal, parentVal)) {
                    this._swap(leftChildIdx, nodeIdx);
                    nodeIdx = leftChildIdx;
                }
                else {
                    break;
                }
            }
            else {
                let rightChildVal = this.items.get(rightChildIdx);
                if(this._compare(leftChildVal, rightChildVal) || leftChildVal === rightChildVal) {
                    if(this._compare(leftChildVal, parentVal)) {
                        this._swap(leftChildIdx, nodeIdx);
                        nodeIdx = leftChildIdx;
                    }
                    else {
                        break;
                    }
                }
                else {
                    if(this._compare(rightChildVal, parentVal)) {
                        this._swap(rightChildIdx, nodeIdx);
                        nodeIdx = rightChildIdx;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        // console.log("Adjust downwards done!");
    }

    this._swap = (idx1, idx2) => {
        let temp = this.items.get(idx1);
        this.items.set(idx1, this.items.get(idx2));
        this.items.set(idx2, temp);
    }

    /* In case of min heap _compare() will check if the val1 is less than val2.
    In case of max heap _compare() will check if the val1 is greater than val2. */
    this._compare = (val1, val2) => {
        if(type === 'min') {
            return val1 < val2;
        }
        else {
            return val1 > val2;
        }
    }
}

let heap = new Heap(type="max");
heap.insert(10);
heap.insert(8);
heap.insert(4);
heap.insert(9);
heap.insert(1);
heap.insert(6);
heap.insert(23);
heap.insert(11);
heap.insert(-1);
heap.insert(5);

console.log(heap.items);

console.log(heap.delete());
// console.log(heap.items);
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.delete());
console.log(heap.items);

let heap2= new Heap(type="max");
heap2.insert(10);
heap2.insert(8);
heap2.insert(40);

console.log(heap2.items);

console.log(heap2.delete());