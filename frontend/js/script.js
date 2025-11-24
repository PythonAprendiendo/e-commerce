document.addEventListener("DOMContentLoaded", function () {

    const cartBtn = document.getElementById("cartBtn");

    if (cartBtn) {
        cartBtn.addEventListener("click", function (event) {
            event.preventDefault();

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
            } else {
                window.location.href = "shopping_Cart.html";
            }
        });
    }

});
