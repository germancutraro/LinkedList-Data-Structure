function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Add nodes methods

LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

// Remove nodes methods
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let value = this.head.value;
  this.head = this.head.next;

  if (this.head) this.head.prev = null;
  else this.tail = null;

  return value;

}

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let value = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;

  return value;
}

// Search method

LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

const list = new LinkedList();

list.addToHead(1);
list.addToTail(2);

console.log(list.search(1));
console.log(list.search(2));
console.log(list.search(3000));

