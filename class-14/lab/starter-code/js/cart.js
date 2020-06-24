/* global Cart */
"use strict";
loadCounter();

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.tBodies[0].innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
var tableBody;
function showCart() {
  // TODO: Find the table body
  tableBody = table.tBodies[0];
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var row = document.createElement("tr");
    // row.setAttribute('id', i );
    // TODO: Create a TD for the delete link, quantity,  and the item
    var cellDelete = document.createElement("td");
    var linkItem = document.createElement("a");
    linkItem.textContent = "delete";
    linkItem.setAttribute("id", i);
    cellDelete.appendChild(linkItem);
    var cellQuantity = document.createElement("td");
    cellQuantity.textContent = cart.items[i].quantity;
    var cellItem = document.createElement("td");
    cellItem.textContent = cart.items[i].product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    row.appendChild(cellDelete);
    row.appendChild(cellQuantity);
    row.appendChild(cellItem);
    tableBody.appendChild(row);
  }
}

var deleteItem = document.getElementById("deleteItem");
if (deleteItem !== null) {
  deleteItem.addEventListener("click", removeItemFromCart);
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // console.log(event.target.id);
  cart.removeItem(event.target.id);
  updateCounter();
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // console.log(counter);
  var couterSpan = document.getElementById("itemCount");
  couterSpan.textContent = counter;
}

//creating and appending the user form
var formInputs = document.createElement("form");
formInputs.getAttribute("id", "checkout");
var fieldSET = document.createElement("fieldset");

formInputs.appendChild(fieldSET);
var leg = document.createElement("legend");
leg.textContent = "Checkout";
fieldSET.appendChild(leg);
var namelabel = document.createElement("label");
namelabel.setAttribute("for", "name");
namelabel.textContent = "Name";
var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
// nameInput.setAttribute('required');
fieldSET.appendChild(namelabel);
fieldSET.appendChild(nameInput);

var streetlabel = document.createElement("label");
streetlabel.setAttribute("for", "street");
streetlabel.textContent = "street";
var streetInput = document.createElement("input");
streetInput.setAttribute("type", "text");
streetInput.setAttribute("id", "street");
// streetInput.setAttribute('required');
fieldSET.appendChild(streetlabel);
fieldSET.appendChild(streetInput);

var citylabel = document.createElement("label");
citylabel.setAttribute("for", "city");
citylabel.textContent = "city";
var cityInput = document.createElement("input");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("id", "street");
// cityInput.setAttribute('required');
fieldSET.appendChild(citylabel);
fieldSET.appendChild(cityInput);

var statelabel = document.createElement("label");
statelabel.setAttribute("for", "state");
statelabel.textContent = "state";
var stateInput = document.createElement("input");
stateInput.setAttribute("type", "text");
stateInput.setAttribute("id", "state");
// stateInput.setAttribute('required');
fieldSET.appendChild(statelabel);
fieldSET.appendChild(stateInput);

var ZIPCodelabel = document.createElement("label");
ZIPCodelabel.setAttribute("for", "ZIPCode");
ZIPCodelabel.textContent = "ZIPCode";
var ZIPCodeInput = document.createElement("input");
ZIPCodeInput.setAttribute("type", "text");
ZIPCodeInput.setAttribute("id", "ZIPCode");
// ZIPCodeInput.setAttribute('required');
fieldSET.appendChild(ZIPCodelabel);
fieldSET.appendChild(ZIPCodeInput);

var phoneNumberlabel = document.createElement("label");
phoneNumberlabel.setAttribute("for", "phoneNumber");
phoneNumberlabel.textContent = "phoneNumber";
var phoneNumberInput = document.createElement("input");
phoneNumberInput.setAttribute("type", "text");
phoneNumberInput.setAttribute("id", "phoneNumber");
// phoneNumberInput.setAttribute('required');
fieldSET.appendChild(phoneNumberlabel);
fieldSET.appendChild(phoneNumberInput);

var creditCardNumberlabel = document.createElement("label");
creditCardNumberlabel.setAttribute("for", "creditCardNumber");
creditCardNumberlabel.textContent = "creditCardNumber";
var creditCardNumberInput = document.createElement("input");
creditCardNumberInput.setAttribute("type", "number");
creditCardNumberInput.setAttribute("id", "creditCardNumber");
creditCardNumberInput.setAttribute("maxlength", 16);
// creditCardNumberInput.setAttribute('required');

fieldSET.appendChild(creditCardNumberlabel);
fieldSET.appendChild(creditCardNumberInput);

var inputSub = document.createElement("input");
inputSub.setAttribute("type", "submit");
inputSub.setAttribute("value", "Process Order");

fieldSET.appendChild(inputSub);

var mainTag = document.getElementsByTagName("main")[0];
mainTag.appendChild(formInputs);
