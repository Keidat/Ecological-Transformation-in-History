document.addEventListener('DOMContentLoaded', () => {
  // 스크롤 애니메이션
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // 돌아가기 버튼
  document.getElementById('back-button').addEventListener('click', () => {
    if (history.length > 1) history.back();
    else window.location.href = '../index.html';
  });

  // 언어 토글
  const btn       = document.getElementById('lang-toggle');
  const titleEl   = document.querySelector('.detail-page h1');
  const sourceEl  = document.querySelector('.detail-page .source');
  const sums      = Array.from(document.querySelectorAll('.sub-box .summary'));
  const mods      = Array.from(document.querySelectorAll('.sub-box .modern'));

  const texts = {
    ko: {
      title:  '태풍',
      source: '출처: Google/조선왕조실록',
      summaries: [
        '조선 현종 1070년(1070) 6월 29일, 태풍으로 배들이 전복되고 해안 마을이 침수되었다.',
        '조선 숙종 1131년(1131) 10월 18일, 태풍 영향으로 산사태와 홍수가 동반되어 농경지가 파괴되었다.',
        '조선 숙종 1141년(1141) 8월 4일, 태풍으로 강풍이 불어 지붕이 날아가고 가옥이 붕괴되었다.',
        '조선 광해군 1110년(1110) 7월 7일, 태풍 피해로 숲이 훼손되고 수목이 쓰러졌다.',
        '조선 선조 1070년(1070) 7월 23일, 태풍으로 관청 지붕이 파손되고 공문서가 유실되었다.',
        '고려 경종 1076년(1076) 9월 3일, 태풍으로 섬 일부가 유실되고 어로 활동이 중단되었다.'
      ],
      moderns: [
        '조선시대에도 태풍으로 배들이 전복되고 해안 마을이 침수되었듯, 현대에도 태풍이 발생했다면 선박 충돌과 해안 침수가 발생했을 것이다. 해안 방풍림과 해수 저류 시설을 구축해 해안 방호를 강화했을 것이다.',
        '조선시대에도 태풍으로 산사태와 홍수가 동반되어 농경지가 파괴되었듯, 현대에도 태풍이 발생했다면 산사태와 침수로 농업 생산이 전면 중단되었을 것이다. 다층 증강 식생대와 토양 고정 기법을 도입해 지반 안정성을 확보했을 것이다.',
        '조선시대에도 태풍으로 지붕이 날아가고 가옥이 붕괴되었듯, 현대에도 태풍이 발생했다면 강풍 피해로 다수 주택이 손실되었을 것이다. 내풍 설계 건축물과 풍력 차단벽을 설치해 구조물을 보호했을 것이다.',
        '조선시대에도 태풍 피해로 숲이 훼손되고 수목이 쓰러졌듯, 현대에도 태풍이 발생했다면 산림 훼손과 이차 산사태가 발생했을 것이다. 지속 가능한 산림 관리와 다층 나무 식재로 회복력을 강화했을 것이다.',
        '조선시대에도 태풍으로 관청 지붕이 파손되고 공문서가 유실되었듯, 현대에도 태풍이 발생했다면 공공 청사가 훼손되고 기록 데이터가 손실되었을 것이다. 녹색 지붕과 방풍 차단 시스템으로 공공 인프라를 보호했을 것이다.',
        '조선시대에도 태풍으로 섬 일부가 유실되고 어로 활동이 중단되었듯, 현대에도 태풍이 발생했다면 해안 지형 변화와 어업 중단이 발생했을 것이다. 해양 생태계 복원 프로젝트와 방풍망 설치로 어업 자원을 보호했을 것이다.'
      ]
    },
    en: {
      title:  'Typhoon',
      source: 'Source: Google/Sillok',
      summaries: [
        'On June 29, 1070, a typhoon capsized ships and flooded coastal villages.',
        'On October 18, 1131, a typhoon triggered landslides and floods, destroying farmland.',
        'On August 4, 1141, a typhoon’s strong winds tore off roofs and collapsed houses.',
        'On July 7, 1110, a typhoon damaged forests and toppled trees.',
        'On July 23, 1070, a typhoon broke public building roofs and washed away official documents.',
        'On September 3, 1076, a typhoon eroded islands and halted fishing activities.'
      ],
      moderns: [
        'As in Joseon when typhoons capsized ships and flooded villages, today coastal flooding and vessel collisions would occur. Coastal shelterbelts and seawater retention infrastructure would reinforce shoreline protection.',
        'As in Joseon when typhoons caused landslides and floods that destroyed fields, today agriculture would grind to a halt. Multi‐layered vegetation buffers and soil stabilization techniques would secure slopes.',
        'As in Joseon when typhoons tore off roofs and collapsed homes, today wind damage would level houses. Wind‐resistant building designs and aerodynamic barriers would protect structures.',
        'As in Joseon when typhoons devastated forests and caused secondary landslides, today wildfire and debris flows could follow. Sustainable forest management and layered replanting would enhance resilience.',
        'As in Joseon when typhoons tore off roofs and washed away records, today public facilities and data centers would be at risk. Green roofs and windbreak systems would safeguard critical infrastructure.',
        'As in Joseon when typhoons eroded islands and halted fishing, today coastal ecosystems and fisheries would suffer. Marine habitat restoration and protective windbreak nets would shield fishery resources.'
      ]
    }
  };

  let lang = 'ko';
  btn.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    btn.textContent = lang === 'ko' ? 'EN' : 'KR';

    titleEl.textContent  = texts[lang].title;
    sourceEl.textContent = texts[lang].source;
    sums.forEach((p,i) => p.textContent = texts[lang].summaries[i]);
    mods.forEach((p,i) => p.textContent = texts[lang].moderns[i]);
  });
});