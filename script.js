const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
// Add this to your script.js file

// Close mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Simple form validation + fake submit (replace URL with your Apps Script or EmailJS)
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success-message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // basic validation
  let valid = true;
  ['name', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    const err = el.nextElementSibling;
    if (!el.value.trim()) { err.innerText = 'This field is required'; valid = false } else { err.innerText = '' }
  });

  if (!valid) return;

  submitBtn.querySelector('.loader').classList.remove('hidden');
  submitBtn.disabled = true;

  // simulate network
  setTimeout(() => {
    submitBtn.querySelector('.loader').classList.add('hidden');
    submitBtn.disabled = false;
    success.classList.remove('hidden');
    form.reset();
    setTimeout(() => success.classList.add('hidden'), 4000);
  }, 1200);
});

// Reveal animations on scroll
const revealElems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('active'); }
  });
}, { threshold: 0.2 });
revealElems.forEach(el => revealObserver.observe(el));

// Smooth activate nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a, header a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-accent'));
      const id = entry.target.id;
      document.querySelectorAll(`a[href="#${id}"]`).forEach(a => a.classList.add('text-accent'));
    }
  })
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));