// iPhone 11 128GB Black event handler
// Increment prices
document.getElementById('add-btn').addEventListener('click', function(){
   increment('item-status')
   updatePrice('item-status', 'iphoneGB-price', 1219, 'sub-total', 'iphoneSlice-price');
   taxTotalAmount('item-status', 'item-status2', 10, 'tax')
})

// Decrement prices
document.getElementById('remove-btn').addEventListener('click', function(){
   decrement('item-status')
   let displayStatus = document.getElementById('item-status').value;
   validation(displayStatus, 'item-status');
   decreasePrice('item-status', 'iphoneGB-price', 1219, 'sub-total', 'iphoneSlice-price');
   taxTotalAmount('item-status', 'item-status2', 10, 'tax')
})


// iPhone 11 Silicone Case - Black event handler
// Increment prices
document.getElementById('add-value').addEventListener('click', function(){
   increment('item-status2');
   updatePrice('item-status2', 'iphoneSlice-price', 59, 'sub-total', 'iphoneGB-price');
   taxTotalAmount('item-status2', 'item-status', 10, 'tax')
})

// Decrement prices
document.getElementById('remove-value').addEventListener('click', function(){
   decrement('item-status2');
   let displayStatus2 = document.getElementById('item-status2').value;
   validation(displayStatus2, 'item-status2');
   decreasePrice('item-status2', 'iphoneSlice-price', 59, 'sub-total', 'iphoneGB-price');
   taxTotalAmount('item-status2', 'item-status', 10, 'tax')
})

// Update phone price
function updatePrice(displayNumId, iphoneGBPrice, price, subTotal, slicePrice){
   const displayPrice = document.getElementById(displayNumId).value;
   const totalPrice = displayPrice * price;
   document.getElementById(iphoneGBPrice).innerText = totalPrice;
   const iSlicePhone = document.getElementById(slicePrice).innerText;
   const iSlicePhoneNum = parseInt(iSlicePhone)
   document.getElementById(subTotal).innerHTML = iSlicePhoneNum + totalPrice;
}

// Decrease Phone Price
function decreasePrice(displayNumId, iphoneGBPrice, price, subTotal, slicePrice){
   const displayPrice = document.getElementById(displayNumId).value;
   const totalPrice = displayPrice * price;
   document.getElementById(iphoneGBPrice).innerText = totalPrice;
   const iSlicePhone = document.getElementById(slicePrice).innerText;
   const iSlicePhoneNum = parseInt(iSlicePhone)
   document.getElementById(subTotal).innerHTML = iSlicePhoneNum + totalPrice;
}

// Total balance and total taxes
function taxTotalAmount(displayNumId1, displayNumId2, taxFee, taxInput){
   const displayPrice1 = document.getElementById(displayNumId1).value;
   const displayPrice1N = parseInt(displayPrice1)
   const displayPrice2 = document.getElementById(displayNumId2).value;
   const displayPrice2N = parseInt(displayPrice2)
   const totalIdAmount = displayPrice1N + displayPrice2N;
   const totalTax = totalIdAmount * taxFee;
   document.getElementById(taxInput).innerText = totalTax;
   const subTotal = document.getElementById('sub-total').innerText;
   const subTotalN = parseInt(subTotal)
   const wholeAmount = subTotalN + totalTax;
   document.getElementById('total').innerText = wholeAmount;
}

// Increment input value
function increment(id){
   document.getElementById(id).stepUp();
}

// Decrement input value
function decrement(id){
   document.getElementById(id).stepDown();
}

// Input validation
function validation(validationName, id){
   if(validationName == -1){
      alert("input cannot be negative")
      document.getElementById(id).value = 0;
   }
}