document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the actual form submission

        const formData = new FormData(contactForm);
        console.log('Name:', formData.get('name'));
        console.log('Email:', formData.get('email'));
        console.log('Message:', formData.get('message'));

        // Here you would typically send the data to a server
        alert('Thank you for your message!');
    });
});
