document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Theme Toggle Logic ---
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Run this logic only if the buttons exist in the DOM
  if (themeToggle && themeIcon) {
    // Check for saved user preference in localStorage
    const currentTheme = localStorage.getItem("portfolio-theme");

    // Apply saved theme on initial load
    if (currentTheme === "light") {
      body.classList.add("light-mode");
      themeIcon.textContent = "🌙";
    }

    // Listen for clicks on the toggle button
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        localStorage.setItem("portfolio-theme", "light");
        themeIcon.textContent = "🌙";
      } else {
        localStorage.setItem("portfolio-theme", "dark");
        themeIcon.textContent = "☀️";
      }
    });
  }

  // ---- 2. Advanced Scroll Reveal (Intersection Observer) ----
  // This triggers the CSS transitions when elements enter the viewport
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the bottom
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("active");

      // Optional: Stop observing once revealed so it only animates once
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealOnScroll.observe(el);
  });
});
