// DOM Elements
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const revealElements = document.querySelectorAll('.reveal-text');
const parallaxImages = document.querySelectorAll('.parallax-img');
const packageCards = document.querySelectorAll('.package-card');
const heroScroll = document.querySelector('.hero-scroll');
const statsNumbers = document.querySelectorAll('.stat-number');
const logoSvg = document.querySelectorAll('.logo-svg');
const alertClose = document.querySelector('.alert-close');
const drugFreeAlert = document.querySelector('.drug-free-alert');

// Initialize alert close functionality
if (alertClose && drugFreeAlert) {
  alertClose.addEventListener('click', () => {
    drugFreeAlert.style.display = 'none';
    // Update header position if needed
    if (window.scrollY < 50) {
      header.style.top = '0';
    }
    // Store in localStorage to remember user's preference
    localStorage.setItem('alertClosed', 'true');
  });
  
  // Check if user has closed the alert before
  if (localStorage.getItem('alertClosed') === 'true') {
    drugFreeAlert.style.display = 'none';
    if (window.scrollY < 50) {
      header.style.top = '0';
    }
  }
}

// Initialize Google Maps
function initMap() {
  // Coordinates for Foz do Iguaçu
  const fozDoIguacu = { lat: -25.5478, lng: -54.5882 };
  
  // Create map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: fozDoIguacu,
    zoom: 12,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#f0f0f0' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#000000' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#dedede' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#e0e0e0' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });
  
  // Add custom marker
  const markerIcon = {
    path: 'M12,0C7.58,0,4,3.58,4,8c0,1.25,0.17,1.87,0.93,3.24l3.71,7.42c0.19,0.39,0.73,0.39,0.92,0l3.71-7.42C14.04,9.87,14.21,9.25,14.21,8C14.21,3.58,10.63,0,6.21,0z',
    fillColor: '#000',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 2,
    anchor: new google.maps.Point(12, 24),
  };
  
  const marker = new google.maps.Marker({
    position: fozDoIguacu,
    map: map,
    icon: markerIcon,
    title: 'The Athletic Rave - Foz do Iguaçu'
  });
  
  // Add pulsating circle around marker
  const cityCircle = new google.maps.Circle({
    strokeColor: '#000000',
    strokeOpacity: 0.2,
    strokeWeight: 1,
    fillColor: '#000000',
    fillOpacity: 0.1,
    map: map,
    center: fozDoIguacu,
    radius: 2000
  });
  
  // Add futuristic grid lines to map
  const mapLines = [];
  for (let i = 0; i < 6; i++) {
    const line = new google.maps.Polyline({
      path: [
        { lat: fozDoIguacu.lat - 0.05, lng: fozDoIguacu.lng - 0.05 + (i * 0.02) },
        { lat: fozDoIguacu.lat + 0.05, lng: fozDoIguacu.lng - 0.05 + (i * 0.02) }
      ],
      geodesic: true,
      strokeColor: '#000000',
      strokeOpacity: 0.2,
      strokeWeight: 1,
      map: map
    });
    mapLines.push(line);
  }
  
  for (let i = 0; i < 6; i++) {
    const line = new google.maps.Polyline({
      path: [
        { lat: fozDoIguacu.lat - 0.05 + (i * 0.02), lng: fozDoIguacu.lng - 0.05 },
        { lat: fozDoIguacu.lat - 0.05 + (i * 0.02), lng: fozDoIguacu.lng + 0.05 }
      ],
      geodesic: true,
      strokeColor: '#000000',
      strokeOpacity: 0.2,
      strokeWeight: 1,
      map: map
    });
    mapLines.push(line);
  }
  
  // Add futuristic UI elements
  enhanceFuturisticMap();
}

function enhanceFuturisticMap() {
  const mapContainer = document.querySelector('.map-container');
  if (!mapContainer) return;
  
  // Add glowing effect
  const mapGlow = document.createElement('div');
  mapGlow.className = 'map-glow';
  mapContainer.appendChild(mapGlow);
  
  // Create map lines
  for (let i = 0; i < 5; i++) {
    const mapLine = document.createElement('div');
    mapLine.className = 'map-line';
    mapLine.style.top = `${20 + (i * 20)}%`;
    mapLine.style.left = '0';
    mapLine.style.width = '100%';
    mapContainer.appendChild(mapLine);
  }
  
  for (let i = 0; i < 5; i++) {
    const mapLine = document.createElement('div');
    mapLine.className = 'map-line';
    mapLine.style.left = `${20 + (i * 20)}%`;
    mapLine.style.top = '0';
    mapLine.style.width = '1px';
    mapLine.style.height = '100%';
    mapContainer.appendChild(mapLine);
  }
  
  // Animate the glow effect
  setInterval(() => {
    const x = Math.random() * 80 + 10; // 10-90%
    const y = Math.random() * 80 + 10; // 10-90%
    mapGlow.style.left = `${x}%`;
    mapGlow.style.top = `${y}%`;
  }, 5000);
}

// Custom Cursor
function updateCursor(e) {
  const x = e.clientX;
  const y = e.clientY;
  
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  
  // Delayed follower effect
  setTimeout(() => {
    cursorFollower.style.left = `${x}px`;
    cursorFollower.style.top = `${y}px`;
  }, 80);
}

function cursorHover() {
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  cursor.style.border = '2px solid white';
  cursor.style.backgroundColor = 'var(--black)';
  cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.8)';
  cursorFollower.style.border = '2px solid var(--black)';
  cursorFollower.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
}

function cursorNormal() {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  cursor.style.border = '2px solid white';
  cursor.style.backgroundColor = 'var(--black)';
  cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  cursorFollower.style.border = '2px solid var(--black)';
  cursorFollower.style.backgroundColor = 'transparent';
}

function cursorMagnetic(e, element) {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const deltaX = (x - centerX) / 8;
  const deltaY = (y - centerY) / 8;
  
  element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translate(0, 0)';
  });
}

// Logo Animation
function animateLogo() {
  logoSvg.forEach(logo => {
    if (!logo) return;
    
    // Select SVG elements - Safely handle potential missing elements
    const circles = logo.querySelectorAll('circle');
    const paths = logo.querySelectorAll('path');
    
    // Animate circles with pulsing effect
    if (circles && circles.length) {
      circles.forEach((circle, index) => {
        // Set different animation for each circle
        circle.style.animation = `pulseCircle 3s infinite ${index * 0.3}s`;
      });
    }
    
    // Add hover effects to the whole logo
    logo.addEventListener('mouseenter', () => {
      // Scale up slightly
      logo.style.transform = 'scale(1.05)';
      
      // Animate paths if they exist
      if (paths && paths.length) {
        paths.forEach((path, i) => {
          // Staggered animation for each path
          setTimeout(() => {
            path.style.transform = 'translateY(-3px)';
          }, i * 30);
        });
      }
    });
    
    logo.addEventListener('mouseleave', () => {
      // Reset transformations
      logo.style.transform = 'scale(1)';
      
      if (paths && paths.length) {
        paths.forEach(path => {
          path.style.transform = 'translateY(0)';
        });
      }
    });
  });
}

// Scroll Effects
function handleScroll() {
  const scrollPosition = window.scrollY;
  const isAlertVisible = drugFreeAlert && drugFreeAlert.style.display !== 'none';
  
  // Header scroll effect
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
    if (heroScroll) {
      heroScroll.style.opacity = '0';
    }
  } else {
    header.classList.remove('scrolled');
    if (heroScroll) {
      heroScroll.style.opacity = '0.7';
    }
  }
  
  // Reveal elements on scroll
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
      
      // If the element contains stat numbers, animate them
      const statNumber = element.querySelector('.stat-number');
      if (statNumber && !statNumber.classList.contains('animated')) {
        animateStatNumber(statNumber);
        statNumber.classList.add('animated');
      }
    }
  });
  
  // Parallax effect for images
  parallaxImages.forEach(image => {
    const imageTop = image.getBoundingClientRect().top;
    const imageCenter = imageTop + image.offsetHeight / 2;
    const windowCenter = window.innerHeight / 2;
    const distance = imageCenter - windowCenter;
    const speed = 0.1;
    
    if (imageTop < window.innerHeight && imageTop + image.offsetHeight > 0) {
      image.style.transform = `translateY(${distance * speed}px)`;
    }
  });
  
  // Design elements parallax
  const designElements = document.querySelectorAll('.design-element');
  designElements.forEach(element => {
    const elementTop = element.parentElement.getBoundingClientRect().top;
    const speed = 0.05;
    element.style.transform = `translateY(${elementTop * speed}px)`;
  });
}

// Mobile Menu Toggle
function toggleMenu() {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

// Animate Stat Numbers
function animateStatNumber(element) {
  const target = parseInt(element.textContent);
  const duration = 2000; // 2 seconds
  const step = 30; // update every 30ms
  const steps = duration / step;
  const increment = target / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      element.textContent = target;
    } else {
      element.textContent = Math.floor(current);
    }
  }, step);
}

// Event Listeners
window.addEventListener('mousemove', updateCursor);
window.addEventListener('scroll', handleScroll);
menuToggle.addEventListener('click', toggleMenu);

// Add hover effect to all links and buttons
const interactiveElements = document.querySelectorAll('a, button, .package-card');
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', cursorHover);
  element.addEventListener('mouseleave', cursorNormal);
});

// Add magnetic effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    cursorMagnetic(e, button);
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Animate logo
  animateLogo();
  
  // Trigger scroll handler once to reveal elements already in view
  handleScroll();
  
  // Setup futuristic map elements
  enhanceFuturisticMap();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
          toggleMenu();
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Package card selection effect
  packageCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove selected class from all cards
      packageCards.forEach(c => c.classList.remove('selected'));
      // Add selected class to clicked card
      card.classList.add('selected');
    });
  });
}); 