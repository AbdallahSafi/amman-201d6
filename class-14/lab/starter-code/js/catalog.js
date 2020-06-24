/* global Product, Cart */

"use strict";
loadCounter();
// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById("items");
  for (var i in Product.allProducts) {
    var itemsOption = document.createElement("option");
    itemsOption.setAttribute("value", Product.allProducts[i].name);
    itemsOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(itemsOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  counter += 1;
  storeCounter();
  // TODO: suss out the item picked from the select list
  item_selected = items.options[items.selectedIndex].value;

  // TODO: get the quantity
  quantitiyValue = quantityItems.value;

  // TODO: using those, add one item to the Cart
  cart.addItem(item_selected, quantitiyValue);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // console.log(counter);
  var couterSpan = document.getElementById("itemCount");
  couterSpan.textContent = counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
var cartContentDiv = document.getElementById("cartContents");
var list = document.createElement("ul");
cartContentDiv.appendChild(list);

function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
    var listItem = document.createElement("li");
    listItem.textContent = cart.items[counter-1].quantity + ' ' + cart.items[counter-1].product;
    list.appendChild(listItem);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById("catalog");
var quantityItems = document.getElementById("quantity");
var item_selected;
var quantitiyValue;
catalogForm.addEventListener("submit", handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


//Store the counter in the storage
function storeCounter(){
  localStorage.setItem('counter', counter);
}

//load the stored counter and update the cart
function loadCounter(){
  if(localStorage.getItem('counter') === null){
    console.log('there is none');
    return;
  }
  counter = Number(localStorage.getItem('counter')); 
  updateCounter();
}