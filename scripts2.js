//Do Lab "6" --> Output to the DOM instead of console.log
function addStuff() {
event.preventDefault();
var name2 = document.getElementById("itemName").value;
var price2 = document.getElementById("itemPrice").value *1;

var addedStuff = {name: name2, price: price2};

groceries.push(addedStuff);
console.log(groceries);

document.getElementById('list').innerHTML = "";
document.getElementById('div2').innerHTML = "";

runList();
runTotal();
}


var groceries = [
{name: 'Cereal', price: 2.99},
{name: 'Milk', price: 2.75},
{name: 'Bread', price: 2.89},
{name: 'Beer', price: 9.99},
];

function runList() {
for (i=0; i<groceries.length; i++) {
var newDiv = document.getElementById('list');
newDiv.innerHTML += "<p>"+groceries[i].name + ": $" + groceries[i].price+"</p>";
}
}

runList();

function runTotal () {
  var sum = 0;
for (x=0; x<groceries.length; x++){
  var otherDiv = document.getElementById('div2');
  sum += groceries[x].price;
  otherDiv.innerHTML = "<p>" + "Total: $"+sum + "</p>";
}
}

runTotal()
/*Add a form with text inputs for Name and Price and a button that allows you to add elements to the shopping list.
Clicking 'Add' updates the list on the page.
Clicking 'Add' also updates the total.
Be prepared to demo your work */
