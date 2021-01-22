class Dictionary{
  constructor() {
    this.items = {}
  }

  set (key, value) {
    this.items[key] = value
  }

  get (key) {
    return this.item[key]
  }

  remove (key) {
    return Reflect.deleteProperty(this.items,key)
  }

  get keys () {
    return Reflect.ownKeys(this.items)
  }

  get values () {
    return Reflect.ownKeys(this.items).reduce((r, c, i) => {
      r.push(this.items[c])
      return r
    },[])
  }
}