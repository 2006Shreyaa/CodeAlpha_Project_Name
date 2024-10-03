 // JavaScript for smooth scrolling between sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop - 60,  // Offset to account for the fixed navigation bar
        behavior: 'smooth'
    });
}

// Highlight active section in navigation as the user scrolls
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 60;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
            navLinks[index].classList.add('active'); // Add active class to the current section
        }
    });
});

// Add a sticky navigation bar that stays at the top
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑ Back to Top';
scrollToTopBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollToTopBtn);

// Style the button dynamically
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 20px';
scrollToTopBtn.style.backgroundColor = '#4CAF50';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none'; // Initially hide the button

// Show the button when user scrolls down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
