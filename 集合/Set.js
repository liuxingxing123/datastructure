function Set () {
  this.items = {}

  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false
    }
    this.items[value] = value
    return true
  }
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }
  Set.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }
  Set.prototype.clear = function () {
    this.items = {}
  }
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }
}