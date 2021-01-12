function PriortyQueue () {
  this.items = []

  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }

  PriortyQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priorityif)
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < this.items.length; i++){
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) { 
        this.items.push(queueElement)
      }
    }
  }
  PriortyQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  PriortyQueue.prototype.front = function () {
    return this.items[0]
  }
  PriortyQueue.prototype.size = function () {
    return this.items.length
  }
  PriortyQueue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  PriortyQueue.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + '-' + this.items[i].priority + ' ';
    }
    return resultString;
  }

}