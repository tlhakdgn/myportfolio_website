function runTypingEffect() {
  const text = 'I am Talha Akdoğanözü';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);


// Buton elementini seçiyoruz
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Sayfa belli bir mesafeye kaydırıldığında butonu göster
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Butona tıklandığında sayfayı yukarı kaydır
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Yumuşak kaydırma
  });
};