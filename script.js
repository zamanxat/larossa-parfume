document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('responseMsg').innerText = "Спасибо! Мы свяжемся с вами в ближайшее время.";
  this.reset();
});
// Автоматическое переключение отзывов
const reviews = document.querySelectorAll('.review-slider .review');
let currentReview = 0;

function showNextReview() {
  reviews[currentReview].classList.remove('active');
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add('active');
}

setInterval(showNextReview, 4000); // каждые 4 секунды

// Обработка формы отзыва
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const message = this.message.value.trim();

  if (name && message) {
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
      <p>🌟🌟🌟🌟🌟</p>
      <p>${message}</p>
      <span>— ${name}</span>
    `;

    document.getElementById('reviewSlider').appendChild(newReview);
    this.reset();
    document.getElementById('reviewResponse').innerText = "Рахмет! Пікіріңіз қосылды.";
  }
});


