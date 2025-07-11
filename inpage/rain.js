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

  // 3) 언어 토글
  const btn       = document.getElementById('lang-toggle');
  const titleEl   = document.querySelector('.detail-page h1');
  const sourceEl  = document.querySelector('.detail-page .source');
  const summaries = Array.from(document.querySelectorAll('.sub-box .summary'));
  const moderns   = Array.from(document.querySelectorAll('.sub-box .modern'));

  const texts = {
    ko: {
      title:  '폭우',
      source: '출처: Google/조선왕조실록',
      summaries: [
        '고려 고종 1230년(1230) 8월 17일, 폭우로 하천이 범람해 주변 농경지가 침수되었다.',
        '조선 문종 1150년(1150) 6월 12일, 집중호우로 산사태가 발생해 주요 도로가 통제되었다.',
        '조선 숙종 1100년(1100) 8월 19일, 폭우로 제방이 붕괴되어 수해가 발생했다.',
        '조선 선조 23년(1590) 8월 1일, 폭우로 성곽이 침식되어 방어에 구멍이 뚫렸다.',
        '조선 태종 11년(1411) 4월 25일, 폭우로 군영 주변 저지대가 침수되어 보급로가 차단되었다.',
        '조선 광해 6년(1614) 7월 14일, 폭우로 관청 하수로가 역류해 시가지가 침수되었다.'
      ],
      moderns: [
        '조선시대에도 폭우로 하천이 범람해 주변 농경지가 침수되었듯, 현대에도 폭우가 발생했다면 농경지 침수와 인근 주택·도로 파괴가 일어났을 것이다. 범람원에 습지 복원과 홍수 저류지를 조성해 과거처럼 과잉수를 흡수·저장함으로써 농경지 침수 피해를 완화했을 것이다.',
        '조선시대에도 집중호우로 산사태가 발생해 주요 도로가 통제되었듯, 현대에도 폭우가 발생했다면 산사태로 도로 파손 및 인명 피해가 발생했을 것이다. 조림과 다층 식생공간을 조성해 지반을 강화하고 자연재해를 예방했을 것이다.',
        '조선시대에도 폭우로 제방이 붕괴되어 수해가 발생했듯, 현대에도 폭우가 발생했다면 제방 붕괴로 인근 주거지와 도로가 침수되어 대규모 재산 피해가 발생했을 것이다. 자연제방과 습지 회복을 병행해 제방 붕괴 위험을 근본적으로 줄였을 것이다.',
        '조선시대에도 폭우로 성곽이 침식되어 방어에 구멍이 뚫렸듯, 현대에도 폭우가 발생했다면 성곽 침식으로 문화유산이 훼손되고 방어 기능이 무력화되었을 것이다. 하천 완충 녹지와 식생 제방을 설치해 침식과 산사태를 방지했을 것이다.',
        '조선시대에도 폭우로 군영 주변 저지대가 침수되어 보급로가 차단되었듯, 현대에도 폭우가 발생했다면 군영 저지대 침수로 보급로가 차단되어 군수 지원이 지연되었을 것이다. 군영 주변에 수변 녹지와 투수포장을 도입해 침수 피해를 완화했을 것이다.',
        '조선시대에도 폭우로 관청 하수로가 역류해 시가지가 침수되었듯, 현대에도 폭우가 발생했다면 하수 역류로 시가지가 침수되어 주민들의 일상과 교통망이 마비되었을 것이다. 도시 하수망과 습지를 연계해 우수 관리를 분산시키고 도심 침수를 방지했을 것이다.'
      ]
    },
    en: {
      title:  'Heavy Rain',
      source: 'Source: Google/Joseonwangjosillok',
      summaries: [
        'On August 17, 1230, heavy rain caused rivers to overflow, flooding surrounding farmland.',
        'On June 12, 1150, torrential rain triggered landslides that blocked major roads.',
        'On August 19, 1100, heavy rain caused embankment failures and flood damage.',
        'On August 1, 1590, heavy rain eroded fortress walls, creating defense breaches.',
        'On April 25, 1411, heavy rain flooded lowlands around military camps, blocking supply routes.',
        'On July 14, 1614, heavy rain caused sewer backups, flooding urban areas.'
      ],
      moderns: [
        'As in Joseon when floods inundated farmland, today floodwaters would destroy homes and roads. Restored wetlands and retention basins would absorb excess water to mitigate damage.',
        'As in Joseon when monsoon rains triggered landslides, today slopes would fail and casualties occur. Reforestation and multi-layered green buffers would stabilize terrain and prevent disasters.',
        'As in Joseon when embankments collapsed, today homes would flood and suffer major losses. Combining natural levees with wetland restoration would fundamentally reduce collapse risks.',
        'As in Joseon when fortress walls eroded, today heritage sites would be damaged and defenses weakened. Buffer green corridors and vegetated embankments would prevent erosion and landslides.',
        'As in Joseon when camps were cut off, today supply routes would be blocked and logistics stalled. Riparian green spaces and permeable pavements would mitigate flooding impacts.',
        'As in Joseon when sewers backed up, today city streets would flood and daily life paralyzed. Integrating drainage with wetlands would disperse stormwater and prevent urban flooding.'
      ]
    }
  };

  let lang = 'ko';
  btn.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    btn.textContent = lang === 'ko' ? 'EN' : 'KR';

    titleEl.textContent  = texts[lang].title;
    sourceEl.textContent = texts[lang].source;
    summaries.forEach((p,i) => p.textContent = texts[lang].summaries[i]);
    moderns.forEach((p,i)  => p.textContent = texts[lang].moderns[i]);
  });
});