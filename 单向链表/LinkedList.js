function LinkedList () {
  this.head = null
  this.length = 0

  function Node (data) {
    this.data = data
    this.next = null
  }

  LinkedList.prototype.append = function (data) {
    var newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length += 1
  }
  LinkedList.prototype.insert = function (position,data) {
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      var index = 0
      var current = this.head
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
    return true
   }
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
 }
  LinkedList.prototype.indexOf = function (data) {
    var current = this.head
    var index = 0

    while (current) {
      if (current.data === data) {
        return index
      }
      index += 1
      current=current.next
    }
    return -1
   }
  LinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) return false
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = newData
    return true
   }
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false
    var current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      var index = 0
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }
  LinkedList.prototype.remove = function (data) { 
    var position = this.indexOf(data)
    return this.removeAt(position)
  }

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  LinkedList.prototype.size = function () {
    return this.length
  }
  LinkedList.prototype.toString = function () {
    var current = this.head
    var listString = ''
    while (current) {
      listString += current.data + " "
      current = current.next
    }
    return listString
  }

}