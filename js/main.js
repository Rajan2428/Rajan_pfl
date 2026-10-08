/**
 * ==========================================================================
 * RAJAN RAJA - PORTFOLIO INTERACTIVITY SCRIPT
 * Features: Dark/Light Theme Toggle, Smooth Scroll Spy, Mobile Navigation,
 *           Email Clipboard Helper, Contact Form Validation, Micro-interactions.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollSpy();
  initClipboard();
  initContactForm();
});

/**
 * --------------------------------------------------------------------------
 * 1. THEME TOGGLE (DARK / LIGHT MODE)
 * Preserves choice in localStorage; defaults to dark or system preference.
 * --------------------------------------------------------------------------
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark theme as requested for premium tech aesthetic
  let currentTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
    
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggleBtn.setAttribute('aria-label', `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  // Listen for system theme adjustments if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const systemTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 2. NAVIGATION & MOBILE MENU
 * Handles sticky header effects and mobile drawer open/close.
 * --------------------------------------------------------------------------
 */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('mobile-open');

      const menuIcon = mobileToggle.querySelector('.icon-menu');
      const closeIcon = mobileToggle.querySelector('.icon-close');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = isExpanded ? 'block' : 'none';
        closeIcon.style.display = isExpanded ? 'none' : 'block';
      }
    });

    // Close menu when clicking on any link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const menuIcon = mobileToggle.querySelector('.icon-menu');
        const closeIcon = mobileToggle.querySelector('.icon-close');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('mobile-open')) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const menuIcon = mobileToggle.querySelector('.icon-menu');
        const closeIcon = mobileToggle.querySelector('.icon-close');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Back to Top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 3. SCROLL SPY (ACTIVE NAVIGATION HIGHLIGHT)
 * Highlights active section link as user scrolls down the page.
 * --------------------------------------------------------------------------
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
}

/**
 * --------------------------------------------------------------------------
 * 4. COPY EMAIL TO CLIPBOARD
 * Instant 1-click email copy with animated toast notification.
 * --------------------------------------------------------------------------
 */
function initClipboard() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const emailText = 'rrraja2805@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailText);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = emailText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      showToast('Email copied to clipboard!');
      
      // Temporary button state change
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copied!
      `;
      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
      }, 2500);

    } catch (err) {
      console.error('Failed to copy email:', err);
      showToast('Could not copy automatically. Email: ' + emailText);
    }
  });

  function showToast(message) {
    if (!toast) return;
    const toastMsg = toast.querySelector('.toast-message');
    if (toastMsg) toastMsg.textContent = message;
    
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * --------------------------------------------------------------------------
 * 5. CONTACT FORM VALIDATION & HANDLING
 * Validates fields and provides immediate feedback with mailto fallback option.
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const subject = subjectInput?.value.trim() || 'Portfolio Inquiry';
    const message = messageInput?.value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      displayStatus('Please complete all required fields.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      displayStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Submit Simulation & Mailto Fallback
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Preparing Message...';
    }

    setTimeout(() => {
      displayStatus('Thank you for reaching out, Rajan will get back to you soon! Opening your email client as fallback...', 'success');
      
      // Trigger native email client with pre-filled fields
      const mailtoUrl = `mailto:rrraja2805@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent(
        `Hi Rajan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }
    }, 800);
  });

  function displayStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    setTimeout(() => {
      if (type === 'error') {
        formStatus.style.display = 'none';
      }
    }, 6000);
  }
}
