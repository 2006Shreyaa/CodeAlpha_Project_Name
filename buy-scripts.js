// Get image and price from URL
const urlParams = new URLSearchParams(window.location.search);
const imageName = urlParams.get("image");
const imagePrice = urlParams.get("price");

// Set the image and price on the page
const imageElement = document.getElementById("purchase-img");
const priceElement = document.getElementById("price");

imageElement.src = `images/${imageName}`; // Assuming images are stored in an "images" folder
priceElement.textContent = imagePrice;

// Handle payment form submission
const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
  
  alert(`Proceeding to payment using ${selectedPaymentMethod}.`);
  // Here, you can add actual payment processing logic
});
