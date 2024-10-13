const phrases = [
  "Chase your dreams",
  "Never give up",
  "Embrace the journey"
];

const dynamicText = document.getElementById("dynamic-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // Wait before starting to delete
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 500); // Wait before typing the next phrase
  } else {
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    setTimeout(typeEffect, typingSpeed);
  }
}

// Start the typing effect
typeEffect();

// Add smooth scrolling for the Apps navigation link
document.addEventListener('DOMContentLoaded', function() {
  const appsNavLink = document.getElementById('apps-nav-link');
  
  appsNavLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    const appsSection = document.getElementById('apps');
    
    appsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactNavLink = document.getElementById('contact-nav-link');
  
  contactNavLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    const email = 'contact@raineyapps.com'; // Replace with your actual email address
    const subject = 'Inquiry from Website';
    const body = 'Hello, I have a question about...';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  });
});
