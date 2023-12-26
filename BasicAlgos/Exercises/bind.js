// Implement Function.prototype.bind

Function.prototype.bind = function(context, args) {
  const fn = this;

  return function() {
    fn.apply(context, [...args]);
  }
}