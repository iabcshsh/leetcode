/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.get(key)) {
    return -1;
  }
  const node = this.cache.get(key);
  this.MoveToHead(node);
  return node.value;
};
LRUCache.prototype.put = function (key, value) {
  let newNode = {
    prev: null,
    next: null,
    key: key,
    value: value,
  };
  if (this.cache.has(key)) {
    var currentNode = this.cache.get(key);
    currentNode.value = newNode.value;
    this.MoveToHead(currentNode);
  } else {
    if (this.cache.size >= this.capacity) {
      this.removeFromTail();
    }
    this.addToHead(newNode);
    this.cache.set(key, newNode);
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.MoveToHead = function (node) {
     if (node === this.head) {
      return;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

  if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  
};
LRUCache.prototype.addToHead = function (node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
     
    }  else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
};
LRUCache.prototype.removeFromTail = function () {
    if(this.head==this.tail){
      this.cache.delete(this.tail.key);
      this.head=null;
      this.tail=null;
      return;
    }
     if (!this.tail) {
      return;
    }
    this.cache.delete(this.tail.key);
    
    if (this.tail.prev) {
      this.tail.prev.next = null;
    }
    this.tail = this.tail.prev;
};