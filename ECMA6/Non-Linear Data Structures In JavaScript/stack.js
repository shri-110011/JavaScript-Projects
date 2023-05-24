function Stack() {
  this._top = null;
  this.items = {};

  this.push = (val) => {
    if (this._top === null) {
      this._top = 0;
    } else {
      this._top++;
    }

    this.items[this._top] = val;
  };

  this.pop = () => {
    const x = this.items[this._top];
    delete this.items[this._top];

    this._top--;

    if (this._top === -1) {
      this._top = null;
    }

    return x;
  };

  this.isEmpty = () => {
    if (this._top === null) return true;
    else return false;
  };
}

let stack = new Stack();

console.log(stack.isEmpty());
stack.push(1);
stack.push(7);
stack.push(14);
stack.push(70);

console.log(stack.items);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
