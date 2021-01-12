function DoubleLinkedList () {
  this.head = null
  this.tail = null
  this.length = 0

  function Node (data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  DoubleLinkedList.prototype.append = function (data) {
    var newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      newNode.prev = current
      this.tail=newNode
    }
    this.length += 1
  }
  DoubleLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data)
    
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        var current = this.head
        var index = 0
        while (index++ < position) {
          current = current.next
        }
        newNode.next = current
        newNode.prev = current.prev

        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
   }
  DoubleLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null
    var flag = ~~(this.length / 2) >= position
    var current = null
    if (flag) {
      current = this.head
      var index = 0
      while (index++ < position) {
        current = current.next
      }
    } else {
      current = this.tail
      var index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    return current.data
   }
  DoubleLinkedList.prototype.indexOf = function (data) {
    var current = this.head
    var index = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index+=1
    }
    return -1
  }
  DoubleLinkedList.prototype.update = function (position,newData) { 
    if (position < 0 || position >= this.length) return false
    var flag = ~~(this.length / 2) >= position
    var current = null
    if (flag) {
      current = this.head
      var index = 0
      while (index++ < position) {
        current = current.next
      }
    } else {
      current = this.tail
      var index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    current.data = newData
    return true
  }
  DoubleLinkedList.prototype.removeAt = function (position) { 
    if (position < 0 || position >= this.length) return null
    var current = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        var index = 0 
        while (index++ < position) {
          current = current.next
        }
        current.next.prev = current.prev
        current.prev.next = current.next
      }
    }
    this.length-=1
    return current.data
  }
  DoubleLinkedList.prototype.remove = function (data) { 
    var index = this.indexOf(data)
    return this.removeAt(index)
  }
  DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0
   }
  DoubleLinkedList.prototype.size = function () {
    return this.length
  }
  DoubleLinkedList.prototype.getHead = function () {
    return this.head?.data
   }
  DoubleLinkedList.prototype.getTail = function () { 
    return this.tail?.data
  }
  DoubleLinkedList.prototype.toString = function () {
    return this.backwardString()
  }
  DoubleLinkedList.prototype.forwardString = function () {
    var current = this.tail
    var resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }
    return resultString
  }
  DoubleLinkedList.prototype.backwardString = function () {
    var current = this.head
    var resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }
 
}