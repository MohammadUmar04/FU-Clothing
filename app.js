
  // Initialize the carousel when the document is ready
  $(document).ready(function () {
    // Activate the carousel
    $('#carouselExampleAutoplaying').carousel();

    // Set the interval for auto-sliding (adjust the value as needed)
    $('#carouselExampleAutoplaying').carousel({
      interval: 2000 // Set the interval to 2000 milliseconds (2 seconds)
    });
  });

    // JavaScript function to handle subscription
    function subscribe() {
      // Get the email input value
      var emailInput = document.querySelector('.memail');
      var email = emailInput.value;
  
      // Perform validation (you can add more validation if needed)
      if (email.trim() === '') {
        alert('Please enter a valid email address.');
        return;
      }
  
      // You can perform an AJAX request here to submit the form data to the server
      // For demonstration purposes, we'll just show an alert
      alert('Subscribed! Email: ' + email);
    }
    