
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummaryBody = document.getElementById('order-summary-body');
    const orderTotalEl = document.getElementById('order-total');

    let totalPrice = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.category}</td>
            <td>${item.medicineName}</td>
            <td>${item.quantity}</td>
            <td>$${item.itemTotal.toFixed(2)}</td>
        `;
        orderSummaryBody.appendChild(row);

        totalPrice += item.itemTotal;
    });
    orderTotalEl.textContent = `$${totalPrice.toFixed(2)}`;

    // Handle payment method 
    const paymentTypeSelect = document.getElementById('paymentType');
    const cardDetails = document.getElementById('cardDetails');
    const cashDetails = document.getElementById('cashDetails');
    

    paymentTypeSelect.addEventListener('change', () => {
        if (paymentTypeSelect.value === 'card') {
            cardDetails.style.display = 'block';
            cashDetails.style.display = 'none';
        } 
        else{
            cardDetails.style.display = 'none';
            cashDetails.style.display = 'block'; 
        }
    });
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const paymentType = paymentTypeSelect.value;
        let cardNumber = '';
        let expiryDate = '';
        let cvv = '';

        if (paymentType === 'card') {
            cardNumber = document.getElementById('cardNumber').value;
            expiryDate = document.getElementById('expiryDate').value;
            cvv = document.getElementById('cvv').value;
        }
       
        if (!name || !phoneNumber || !email || !address) {
            alert("Please fill in all required fields.");
            return;
        }

        if (paymentType === 'card' && (!cardNumber || !expiryDate || !cvv)) {
            alert("Please fill in all card details.");
            return;
        }

        // delivery date 
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 2); 

        const formattedDate = `${deliveryDate.getDate()}/${deliveryDate.getMonth() + 1}/${deliveryDate.getFullYear()}`;

        //thank-you message
        alert(`Thank you for your purchase, ${name}! Your order will be delivered on ${formattedDate}.`);

        localStorage.removeItem('cart');
    });
});




