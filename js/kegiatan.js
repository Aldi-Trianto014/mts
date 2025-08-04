const sliders = document.querySelectorAll(".galeri-wrapper");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

sliders.forEach(wrapper => {
  const container = wrapper.querySelector(".slider-container");

  let isPaused = false;
  let scrollSpeed = 2; // makin gede makin ngebut
  let animationFrame;

  function startAutoSlide() {
    function step() {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;

        // Loop mulus
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(step);
    }

    animationFrame = requestAnimationFrame(step);
  }

  startAutoSlide();

  // Hover untuk pause
  container.addEventListener("mouseenter", () => isPaused = true);
  container.addEventListener("mouseleave", () => isPaused = false);

  // Zoom + cursor pointer
  const imgs = wrapper.querySelectorAll("img");
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
    });

    img.classList.add("cursor-pointer"); // ⬅️ tambahin di sini aja bro
  });
});

// Close modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modalImg.src = "";
  }
});
