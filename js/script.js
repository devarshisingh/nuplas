// Add a class when the navbar becomes sticky
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop; // Get the offset position of the navbar

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


    // Wait for the page to load
    window.addEventListener('DOMContentLoaded', (event) => {
        // Create an intersection observer to detect when an element is in the viewport
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply animation when the image is in the viewport
                    const img = entry.target;
                    // Add appropriate animation class
                    if (img.classList.contains('slide-in-left')) {
                        img.classList.add('slide-in-left');
                    } else if (img.classList.contains('slide-in-right')) {
                        img.classList.add('slide-in-right');
                    }
                    // Once the animation is applied, stop observing the element
                    observer.unobserve(img);
                }
            });
        }, {
            threshold: 0.5 // Trigger when at least 50% of the image is visible
        });

        // Observe each image
        const images = document.querySelectorAll('.certification-img');
        images.forEach(image => {
            observer.observe(image); // Start observing each image
        });
    });

