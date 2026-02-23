document.addEventListener("DOMContentLoaded", () => {

  // Contact toggle
  const contactBtn = document.getElementById("contactBtn");
  const contactMenu = document.getElementById("contactMenu");

  if (contactBtn && contactMenu) {
    contactBtn.addEventListener("click", () => {
      contactMenu.style.display =
        contactMenu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
      if (!contactBtn.contains(e.target) && !contactMenu.contains(e.target)) {
        contactMenu.style.display = "none";
      }
    });
  }


// Project details
const projectDetails = {
  fraud: `<p><strong>Overview:</strong> ML system to detect fraudulent transactions.</p>
          <ul>
            <li>Fraud vs legitimate classification</li>
            <li>Data preprocessing & feature engineering</li>
            <li>Model training & evaluation</li>
          </ul>`,
  healthcare: `<p><strong>Overview:</strong> Java-based desktop app for patient records & billing.</p>
               <ul>
                <li>Patient management</li>
                <li>Appointment scheduling</li>
                <li>Billing & payments</li>
               </ul>`,
  qr: `<p><strong>Overview:</strong> QR Code-based factory worker efficiency tracker.</p>
       <ul>
        <li>Worker identification via QR</li>
        <li>Real-time activity tracking</li>
        <li>Automated efficiency calculation</li>
       </ul>`,
  cyberforge: `<p><strong>Overview:</strong> Cybersecurity learning platform with simulations.</p>
               <ul>
                <li>Attack simulation</li>
                <li>Visual learning</li>
                <li>Beginner-friendly concepts</li>
               </ul>`
};

// Modal
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");

  const projectCards = document.querySelectorAll(".project");

  if (modal && modalTitle && modalText) {
    projectCards.forEach(card => {
      card.addEventListener("click", () => {
        const key = card.dataset.project;
        const title = card.dataset.title;
        modalTitle.innerText = title;
        modalText.innerHTML =
          projectDetails[key] || "<p>No details available</p>";
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

});

// Close modal
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close on ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Skills animation
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".bar div");
      bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = width;
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));


// Smooth scroll
document.querySelectorAll('.nav-links a, #contactBtn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for navbar height
        behavior: 'smooth'
      });
    }
    navLinks.classList.remove('active'); // close menu on click (mobile)
  });
});