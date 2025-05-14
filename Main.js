Script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('img');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            alert('You clicked on an image of a hummingbird!');
        });
    });
});
