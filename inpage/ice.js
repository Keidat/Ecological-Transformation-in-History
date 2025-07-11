// /project/inpage/ice.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) 스크롤 애니메이션
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // 2) 돌아가기 버튼
  document.getElementById('back-button').addEventListener('click', () => {
    if (history.length > 1) history.back();
    else window.location.href = '../index.html';
  });

  // 3) 언어 토글 & 유지
  const btn      = document.getElementById('lang-toggle');
  const titleEl  = document.querySelector('.detail-page h1');
  const sourceEl = document.querySelector('.detail-page .source');
  const sums     = Array.from(document.querySelectorAll('.sub-box .summary'));
  const mods     = Array.from(document.querySelectorAll('.sub-box .modern'));

  const texts = {
    ko: {
      title: '우박',
      source: '출처: Google/조선왕조실록',
      summaries: [
        '우박으로 과수원과 밭작물이 크게 파괴되었다.',
        '우박과 폭우로 마을 지붕이 손상되었다.',
        '우박이 논밭에 구멍을 내며 씨앗이 파손되었다.',
        '우박으로 가축이 부상을 입고 축사가 일부 붕괴되었다.',
        '우박으로 도로가 파손되어 상인들이 고립되었다.',
        '우박과 함께 산사태가 발생해 주민이 대피했다.'
      ],
      moderns: [
        '조선시대에도 우박으로 과수원과 밭작물이 크게 파괴되었듯, 현대에도 우박이 내렸다면 농업용 방호망과 하우스 보호막이 없었다면 작물이 대규모로 손실되었을 것이다. 농업용 방호망과 하우스 보호막을 설치해 작물을 안전하게 보호했을 것이다.',
        '조선시대에도 우박과 폭우로 마을 지붕이 손상되었듯, 현대에도 우박이 내렸다면 충격흡수형 패널과 배수 시스템이 없었다면 다수 주택이 파손되었을 것이다. 지붕에 충격흡수형 패널과 배수 시스템을 적용해 우박 피해를 최소화했을 것이다.',
        '조선시대에도 우박이 논밭에 구멍을 내며 씨앗이 파손되었듯, 현대에도 우박이 내렸다면 멀칭과 잡초커버가 없었다면 토양 침식과 파종 손실이 심각했을 것이다. 멀칭 및 잡초커버를 사용해 토양 침식과 씨앗 손상을 방지했을 것이다.',
        '조선시대에도 우박으로 가축이 부상을 입고 축사가 붕괴되었듯, 현대에도 우박이 내렸다면 차양막과 구조보강 자재가 없었다면 축사가 심각하게 손상되었을 것이다. 축사에 내구성 높은 차양막과 구조보강 자재를 도입해 가축 피해를 예방했을 것이다.',
        '조선시대에도 우박으로 도로가 파손되어 상인들이 고립되었듯, 현대에도 우박이 내렸다면 방호 울타리와 방수성 포장이 없었다면 교통과 물류가 마비되었을 것이다. 방호 울타리와 방수성 포장을 도로에 적용해 교통 안전을 확보했을 것이다.',
        '조선시대에도 우박과 함께 산사태가 발생해 주민이 대피했듯, 현대에도 우박이 내렸다면 다층 식생 경계와 토양 고정 시스템이 없었다면 토사 유출과 위험이 가중되었을 것이다. 다층 식생 경계와 토양 고정 시스템을 설치해 산사태를 예방했을 것이다.'
      ]
    },
    en: {
      title: 'Hail',
      source: 'Source: Google/Joseonwangjosillok',
      summaries: [
        'Hail destroyed orchards and fields.',
        'Hail and heavy rain damaged village roofs.',
        'Hail punched holes in paddies and damaged seeds.',
        'Hail injured livestock and partially collapsed barns.',
        'Hail damaged roads, isolating traders.',
        'Hail triggered landslides that forced evacuations.'
      ],
      moderns: [
        'As in Joseon when hail destroyed orchards and fields, today hailstorms would devastate crops. Crop-protection netting and reinforced greenhouse covers would have mitigated damage.',
        'As in Joseon when hail and heavy rain damaged roofs, today hail would shatter roofing tiles. Impact-resistant roofing and rapid drainage systems would have protected homes.',
        'As in Joseon when hail punched holes in paddies, today hail would erode soil and ruin seedlings. Mulching and cover-crop systems would have minimized soil loss and seed damage.',
        'As in Joseon when hail injured livestock and collapsed barns, today hail would harm animals and structures. Livestock shelters with impact-absorbing canopies would have safeguarded animals.',
        'As in Joseon when hail damaged roads and isolated traders, today hail would disrupt transportation. Hail-resistant pavements and protective barriers would have ensured traffic flow.',
        'As in Joseon when hail triggered landslides and evacuations, today hail combined with heavy rain would cause debris flows. Vegetation-stabilized slopes and multi-layer soil reinforcement would have prevented landslides and protected communities.'
      ]
    }
  };

  // 4) 초기 언어 설정
  let lang = localStorage.getItem('lang') || 'ko';
  applyLang(lang);

  // 5) 버튼 클릭 시 언어 토글 및 저장
  btn.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', lang);
    applyLang(lang);
  });

  function applyLang(l) {
    btn.textContent       = l === 'ko' ? 'EN' : 'KR';
    titleEl.textContent   = texts[l].title;
    sourceEl.textContent  = texts[l].source;
    sums.forEach((p, i) => p.textContent = texts[l].summaries[i]);
    mods.forEach((p, i) => p.textContent = texts[l].moderns[i]);
  }
});
