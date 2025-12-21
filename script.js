// Initialize EmailJS
emailjs.init({
  publicKey: window.CONFIG.EMAILJS_PUBLIC_KEY,
});

const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}

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

if (form) {
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

    // EmailJS Send
    const serviceID = window.CONFIG.EMAILJS_SERVICE_ID;
    const templateID = window.CONFIG.EMAILJS_TEMPLATE_ID;

    // Note: 'form' is available in scope. 
    // If using 'this' inside an arrow function, it refers to the outer context.
    // Use 'form' or 'e.target'.
    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        submitBtn.querySelector('.loader').classList.add('hidden');
        submitBtn.disabled = false;
        success.textContent = 'Message sent successfully!';
        success.classList.remove('hidden', 'bg-red-100', 'text-red-700');
        success.classList.add('bg-green-100', 'text-green-700');
        form.reset();
        setTimeout(() => success.classList.add('hidden'), 4000);
      }, (err) => {
        submitBtn.querySelector('.loader').classList.add('hidden');
        submitBtn.disabled = false;
        success.textContent = 'Failed to send message. Please try again.';
        success.classList.remove('hidden', 'bg-green-100', 'text-green-700');
        success.classList.add('bg-red-100', 'text-red-700');
        console.error('EmailJS Error:', JSON.stringify(err));
        setTimeout(() => success.classList.add('hidden'), 4000);
      });
  });
}

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

// --- NEW SCRIPT for 'See More' Certificates ---
const seeMoreBtn = document.getElementById('see-more-certs-btn');
if (seeMoreBtn) {
  seeMoreBtn.addEventListener('click', () => {
    // Find all hidden certificate cards
    const extraCerts = document.querySelectorAll('.extra-certificate');
    extraCerts.forEach(cert => {
      cert.classList.remove('hidden'); // Show the card
    });

    // Hide the 'See More' button itself
    seeMoreBtn.classList.add('hidden');
  });
}

// Project Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-secondary', 'text-primary');
      b.classList.add('text-gray-600');
    });
    // Add active class to clicked button
    btn.classList.add('active', 'bg-secondary', 'text-primary');
    btn.classList.remove('text-gray-600');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      // Remove previous animation
      card.classList.remove('animate-fade-in');
      void card.offsetWidth; // Trigger reflow to restart animation

      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'flex';
        card.classList.add('animate-fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// --- CERTIFICATION CAROUSEL & MODAL LOGIC ---
const carousel = document.getElementById('cert-carousel');
const prevBtn = document.getElementById('cert-prev');
const nextBtn = document.getElementById('cert-next');

// Carousel Navigation
if (carousel && prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth / 3, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth / 3, behavior: 'smooth' });
  });
}

// Modal Logic
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const viewBtns = document.querySelectorAll('.view-cert-btn');

if (modal && modalImg) {
  // Open Modal
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Find image source from the card
      const card = btn.closest('.cert-card');
      const img = card.querySelector('img');
      if (img) {
        modalImg.src = img.src;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    });
  });

  // Close Modal Functions
  const hideModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  closeModal.addEventListener('click', hideModal);

  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      hideModal();
    }
  });
}

