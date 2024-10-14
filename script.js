// script.js

// Add event listener to the button
document.querySelector('.button a').addEventListener('click', function() {
    // Add class to the button
    this.classList.add('active');
});

// Add event listener to the Products
document.querySelectorAll('.products .card').forEach(function(card) {
    card.addEventListener('mouseover', function() {
        // Add class to the card
        this.classList.add('active');
    });

    card.addEventListener('mouseout', function() {
        // Remove class from the card
        this.classList.remove('active');
    });
});