$(document).ready(function() {
    // Theme toggle functionality
    const toggleTheme = () => {
        $('body').toggleClass('dark-mode light-mode');
        $('.card').toggleClass('card-dark card-light');
        $('.testimonial').toggleClass('card-dark card-light');
    };

    $('#themeToggle').click(toggleTheme);

    window.addEventListener('resize', function() {
        var navbarHeight = document.querySelector('nav').offsetHeight;
        var themeToggleBtn = document.getElementById('themeToggle');
        themeToggleBtn.style.top = `${navbarHeight + 10}px`; // Position below the navbar
    });    

    // Visitor Counter
    const visitorsRef = db.ref('visitors');
    visitorsRef.once('value').then(snapshot => {
        const currentCount = (snapshot.val() || 0) + 1;
        visitorsRef.set(currentCount);
        $('#visitorCount').text(`Visitor Count: ${currentCount}`);
    }).catch(error => {
        console.error('Error updating visitor count: ', error);
    });
});

// --- Could not Handle it --- //

// // Form submission handling
// $('#contactForm').submit(function(event) {
//     event.preventDefault();
//     const name = $('#name').val();
//     const email = $('#email').val();
//     const message = $('#message').val();

//     // Get a new key for a new message
//     const newMessageKey = db.ref().child('messages').push().key;

//     // Set the message to Firebase
//     db.ref('messages/' + newMessageKey).set({
//         name: name,
//         email: email,
//         message: message
//     }).then(() => {
//         // Success callback
//         alert('Message sent successfully!');
//         $('#contactForm')[0].reset(); // Reset form after successful submission
//     }).catch(error => {
//         // Error handling
//         console.error('Error sending message: ', error);
//         alert('Failed to send message. Please try again.');
//     });
// });
