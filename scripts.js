//Do Lab "6" --> Output to the DOM instead of console.log
var groceries = [
{name: 'Cereal', price: 2.99},
{name: 'Milk', price: 2.75},
{name: 'Bread', price: 2.89},
{name: 'Beer', price: 9.99},
];

for (i=0; i<groceries.length; i++) {
var newDiv = document.getElementById('list');
newDiv.innerHTML += "<p>"+groceries[i].name + ": $" + groceries[i].price+"</p>";
}

var sum = 0;
for (x=0; x<groceries.length; x++){
  var otherDiv = document.getElementById('div2');
  sum += groceries[x].price;
  otherDiv.innerHTML = "<p>" + "Total: $"+sum + "</p>";
}
