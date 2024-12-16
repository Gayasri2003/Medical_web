let cart = [ ];

function updateCart() {
    const cartBody = document.getElementById('cart-table-body');
    const totalPriceEl = document.getElementById('total_price');
    let totalPrice = 0;

    cartBody.innerHTML = '';
    cart =[];

    const medicineInputs = document.querySelectorAll('.medicine-item input[type="number"]');
    medicineInputs.forEach(input => {
        const quantity = parseInt(input.value, 10);
        if (quantity > 0) {
            const price = parseFloat(input.dataset.price);
            const medicineName = input.id;
            const category = input.className;

            // Calculate item total
            const itemTotal = price * quantity;
            totalPrice += itemTotal;

             // Add item to cart array
            cart.push({category,medicineName,quantity,itemTotal});

            // Add to the cart table
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${category}</td>
                <td>${medicineName}</td>
                <td>${quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            `;
            cartBody.appendChild(row);
        }
    });

    // total price 
    totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;}

document.querySelectorAll('.medicine-item input[type="number"]').forEach(input => {
    input.addEventListener('input', updateCart);
});

//  buy now
 const btnBuyNow= document.getElementById("buy-now");
 btnBuyNow.addEventListener("click",buyNow);

function buyNow(){
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
    }
    else{
        window.location.href = 'checkout.html';  }
    
    localStorage.setItem('cart', JSON.stringify(cart));}


// add to favorites
const btnAddToFavorite=document.getElementById("add-to-favorites");
btnAddToFavorite.addEventListener("click", addToFavorites);

function addToFavorites(){
    if (cart.length > 0) {
    localStorage.setItem('favorites', JSON.stringify(cart));
    alert('Your order has been added to favorites!');}
    else{
        alert('Your cart is empty.');
    }
}

// apply favorites
const btnApplyFavorite=document.getElementById("apply-favorites");
btnApplyFavorite.addEventListener("click",applyFavorite);

function applyFavorite(){
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if(favorites){
        cart = favorites;
        updateCart();
        alert('Favorite order has been applied.'); } 
    else {
        alert('No favorite order found.'); 
    }
}

// clear order
const btnClearOrder=document.getElementById("clear-order");
btnClearOrder.addEventListener("click", clearOrder);

function clearOrder(){
    const cartBody = document.getElementById('cart-table-body');
    cartBody.innerHTML = ''; 
    document.getElementById("total_price").textContent = "$0.00";
    alert("Order has been cleared!");
}
