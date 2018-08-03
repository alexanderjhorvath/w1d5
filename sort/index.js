var input = process.argv[2];
var sorting = require("./sort");

sorting.add(5);
sorting.add(6);
sorting.add(7);
sorting.add(2);
sorting.add(10);

console.log(sorting.sorted());