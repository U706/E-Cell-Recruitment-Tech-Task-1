// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});