/* global Cart */
"use strict";

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
    var linkItem = document.createElement('a');
    linkItem.textContent = 'delete';
    linkItem.setAttribute('id', cart.items[i].product);
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
  

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
