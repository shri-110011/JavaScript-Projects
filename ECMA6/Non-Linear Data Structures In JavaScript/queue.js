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

let queue = new Queue();
queue.enqueue(13);
queue.enqueue(10);
queue.enqueue(3);
queue.enqueue(8);
console.log(queue.items);

console.log(queue.dequeue());
console.log(queue.items);
