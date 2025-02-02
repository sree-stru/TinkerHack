// Handle form submission
document.getElementById('insurance-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show the Bootstrap modal
    var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'), {
        keyboard: false
    });
    myModal.show();
});
