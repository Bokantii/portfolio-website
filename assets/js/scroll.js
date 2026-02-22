
  const animateSections = document.querySelectorAll(".animate");

  window.addEventListener("scroll", () => {
    animateSections.forEach((sec) => {
      const sectionTop = sec.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // triggers a bit before section reaches view

      if (sectionTop < triggerPoint) {
        sec.classList.add("show-animate");
      }
    });
  });
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.nextElementSibling; // paragraph after button
    const isVisible = description.style.display === "block";

    // toggle visibility
    description.style.display = isVisible ? "none" : "block";

    // toggle arrow rotation
    btn.classList.toggle("active");
  });
});

