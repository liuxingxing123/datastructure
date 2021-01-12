function Stack() {
  this.items = [];

  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  Stack.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' ';
    }
    return resultString;
  };
}
//栈的使用
var s = new Stack();
s.push(20);
s.push(30);
s.push(40);
s.push(50);
console.log(s);

s.pop();
s.pop();
console.log(s);

console.log(s.peek());

console.log(s.size());

console.log(s.isEmpty());

console.log(s.toString());
