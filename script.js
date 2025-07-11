// /project/script.js
window.addEventListener('DOMContentLoaded', () => {
  // 1) 자동 슬라이드 캐러셀
  document.querySelectorAll('.carousel').forEach(carousel => {
    const ul     = carousel.querySelector('ul');
    const slides = ul.children;
    const count  = slides.length;
    const width  = carousel.clientWidth;
    let idx      = 0;

    setInterval(() => {
      idx = (idx + 1) % count;
      ul.style.transform = `translateX(-${width * idx}px)`;
    }, 3000);
  });

  // 2) 요소 참조
  const btn           = document.getElementById('lang-toggle');
  const heroTitle     = document.querySelector('.hero h1');
  const heroSubtitle  = document.querySelector('.hero h2');
  const sectionTitle  = document.querySelector('.carousel-container .section-title');
  const boxEls        = Array.from(document.querySelectorAll('.boxes .box'));
  const labelEls      = Array.from(document.querySelectorAll('.carousel-label'));

  // 3) 언어별 텍스트 데이터
  const texts = {
    ko: {
      heroTitle:    '기후변화',
      heroSubtitle: '조선부터 현대까지',
      sectionTitle: '기후와 강수량의 변화',
      boxes:        ['폭설', '폭우', '폭염', '홍수', '태풍', '우박'],
      labels:       ['기온', '강수량']
    },
    en: {
      heroTitle:    'Climate Change',
      heroSubtitle: 'From Joseon to Today',
      sectionTitle: 'Climate and Precipitation Changes',
      boxes:        ['Heavy Snow', 'Heavy Rain', 'Heat Wave', 'Flood', 'Typhoon', 'Hail'],
      labels:       ['Temperature', 'Precipitation']
    }
  };

  // 4) 초기 언어 설정 (로컬스토리지에서 가져오기, 기본 ko)
  let current = localStorage.getItem('lang') || 'ko';
  applyLang(current);

  // 5) 토글 버튼 클릭 시 언어 전환 & 저장
  btn.addEventListener('click', () => {
    current = current === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', current);
    applyLang(current);
  });

  // 6) 실제 텍스트 치환 함수
  function applyLang(lang) {
    btn.textContent       = lang === 'ko' ? 'EN' : 'KR';
    heroTitle.textContent     = texts[lang].heroTitle;
    heroSubtitle.textContent  = texts[lang].heroSubtitle;
    sectionTitle.textContent  = texts[lang].sectionTitle;

    boxEls.forEach((box, i) => {
      box.textContent = texts[lang].boxes[i];
    });

    labelEls.forEach((lbl, i) => {
      // labels 배열 길이만큼만 치환
      if (texts[lang].labels[i]) {
        lbl.textContent = texts[lang].labels[i];
      }
    });
  }

  // 7) 스크롤 애니메이션
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});
