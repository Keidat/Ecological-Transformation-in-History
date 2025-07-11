window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const ul = carousel.querySelector('ul');
    const slides = ul.children;
    const count = slides.length;
    const width = carousel.clientWidth;
    let idx = 0;

    setInterval(() => {
      idx = (idx + 1) % count;
      ul.style.transform = `translateX(-${width * idx}px)`;
    }, 3000);
  });

  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) {
    console.error('Language toggle button(#lang-toggle) not found');
    return;
  }

  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero h2');
  const sectionTitle = document.querySelector('.carousel-container .section-title');
  const boxEls = Array.from(document.querySelectorAll('.boxes .box'));

  if (!heroTitle || !heroSubtitle || !sectionTitle || boxEls.length === 0) {
    console.error('텍스트 교체용 요소를 찾을 수 없습니다.');
    return;
  }

  const texts = {
    ko: {
      heroTitle: '기후변화',
      heroSubtitle: '조선부터 현대까지',
      sectionTitle: '기후와 강수량의 변화',
      boxes: ['폭설', '폭우', '폭염', '홍수', '태풍', '우박']
    },
    en: {
      heroTitle: 'Climate Change',
      heroSubtitle: 'From Joseon to Today',
      sectionTitle: 'Climate and Precipitation Changes',
      boxes: ['Heavy Snow', 'Heavy Rain', 'Heat Wave', 'Flood', 'Typhoon', 'Hail']
    }
  };

  let current = 'ko';

  langToggle.addEventListener('click', () => {
    current = current === 'ko' ? 'en' : 'ko';
    langToggle.textContent = current === 'ko' ? 'EN' : 'KR';

    heroTitle.textContent = texts[current].heroTitle;
    heroSubtitle.textContent = texts[current].heroSubtitle;
    sectionTitle.textContent = texts[current].sectionTitle;
    boxEls.forEach((box, i) => {
      box.textContent = texts[current].boxes[i];
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});
