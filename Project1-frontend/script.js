// 1. Mobile Navigation State Management
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide menu
    mainNav.querySelector('ul').classList.toggle('active');
});

// Close menu when a link is clicked (Good UX)
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.querySelector('ul').classList.remove('active');
    });
});

// 2. Button Interactivity (Simulating an action)
const actionBtn = document.getElementById('actionBtn');
const feedbackMsg = document.getElementById('feedbackMsg');

actionBtn.addEventListener('click', () => {
    // Change button state
    actionBtn.textContent = 'Initializing...';
    actionBtn.style.opacity = '0.7';
    actionBtn.disabled = true;

    // Simulate a process taking 1.5 seconds
    setTimeout(() => {
        feedbackMsg.textContent = '✅ Repository initialized successfully! Ready to build.';
        actionBtn.textContent = 'Project Active';
        actionBtn.style.backgroundColor = '#4A7C59'; // Green success color
        actionBtn.style.opacity = '1';
    }, 1500);
});