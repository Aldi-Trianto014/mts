document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false; // Biar animasinya cuma jalan sekali

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 50; // makin kecil makin cepat
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count++;
          counter.textContent = count;
          setTimeout(updateCount, speed);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  }

  // Observer biar animasi mulai saat section keliatan di layar
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      animateCounters();
      started = true;
    }
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#statistik"));
});