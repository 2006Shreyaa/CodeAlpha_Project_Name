 
const images = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const buyButton = document.getElementById("buy-button");
const closeModal = document.getElementById("close-modal");

images.forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

// Close the modal when clicking the close button or anywhere outside the modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Redirect to the Buy page with the image name and price
buyButton.addEventListener("click", function() {
  const imageSrc = modalImg.src;
  const imageName = imageSrc.split("/").pop(); // Extract the image name
  const price = "$100"; // Example price, you can modify it according to the image
  
  window.location.href = `buy.html?image=${imageName}&price=${price}`;
});
