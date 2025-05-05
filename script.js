const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pagination = document.getElementById("carouselPagination");

let current = 0;

// Create pagination dots
images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === current) dot.classList.add("active-dot");
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
  pagination.appendChild(dot);
});

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    pagination.children[i].classList.toggle("active-dot", i === index);
  });
  current = index;
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showSlide(current);
  resetAutoSlide();
});

let autoSlide = setInterval(() => {
  current = (current + 1) % images.length;
  showSlide(current);
}, 6000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 6000);
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });

  