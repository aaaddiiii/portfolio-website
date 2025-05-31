document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let currentSection = sections[0];
    let minDistance = Infinity;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= -150 && sectionTop < minDistance) {
        minDistance = sectionTop;
        currentSection = section;
      }
    });

    // Special case: highlight last nav link if near bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      currentSection = sections[sections.length - 1];
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection.getAttribute('id'))) {
        link.classList.add('active');
      }
    });
  });

  // Contact form submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      emailjs.sendForm('service_in3m63s', 'template_rlh2bwq', this)
        .then(function() {
          alert('Message sent successfully!');
          contactForm.reset();
        }, function(error) {
          alert('Failed to send message. Please try again later.');
          console.error(error);
        });
    });
  }

  // Typing animation for "Frontend Developer"
  const text = "Flutter Developer";
  const typedText = document.getElementById('typed-text');
  let idx = 0;

  function type() {
    if (typedText && idx <= text.length) {
      typedText.textContent = text.slice(0, idx);
      idx++;
      setTimeout(type, 100);
    }
  }
  type();
  // Hire button scroll and autofill
  const hireBtn = document.querySelector('.hero-buttons .btn.accent-bg');
  if (hireBtn) {
    hireBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      const subjectInput = document.querySelector('input[name="subject"]');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (subjectInput) {
        subjectInput.value = "Hiring Inquiry";
        subjectInput.readOnly = true;
      }
    });
  }
});