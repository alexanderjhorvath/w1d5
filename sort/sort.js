var list = [];

module.exports = {
  add: function(input) {
    list.push(input);
    return list;
  },
  sorted: function() {
    sorting();
    var sorted = list;
    return sorted;
  }
};

function sorting() {
  list.sort(function(a,b) {
    return a - b
  })
}