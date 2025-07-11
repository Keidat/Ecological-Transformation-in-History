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
  const sums      = Array.from(document.querySelectorAll('.sub-box .summary'));
  const mods      = Array.from(document.querySelectorAll('.sub-box .modern'));

  const texts = {
    ko: {
      title:  '홍수',
      source: '출처: Google/조선왕조실록',
      summaries: [
        '홍수로 하천이 범람해 인근 마을과 농경지가 침수되었다.',
        '저지대 가옥과 창고층이 홍수로 침수되었다.',
        '봄철 홍수로 교량이 유실되고 주요 교통로가 끊어졌다.',
        '제방 붕괴로 관청과 주변 마을이 침수되어 행정이 마비되었다.',
        '하천 범람으로 백성이 대피소로 대피하는 상황이 발생했다.',
        '강물이 범람해 목조 다리가 붕괴되고 교량이 유실되었다.'
      ],
      moderns: [
        '조선시대에도 홍수로 하천이 범람해 인근 마을과 농경지가 침수되었듯, 현대에도 대규모 홍수가 발생했다면 주택과 기반 시설이 침수되어 막대한 재산 피해와 이재민이 발생했을 것이다. 습지와 범람원을 복원해 자연적으로 여분의 물을 흡수·저장함으로써 홍수 피해를 완화했을 것이다.',
        '조선시대에도 저지대 가옥과 창고층이 홍수로 침수되었듯, 현대에도 홍수가 발생했다면 지하층 주택과 물류센터가 침수되어 물류 중단과 재산 손실이 일어났을 것이다. 저류지와 투수 포장 도입으로 과잉수를 분산·저장해 침수 피해를 완화했을 것이다.',
        '조선시대에도 봄철 홍수로 교량이 유실되고 주요 교통로가 끊어졌듯, 현대에도 동일한 홍수가 발생했다면 도로 붕괴와 교량 파손으로 교통이 마비되었을 것이다. 교량 주변 녹지 설계 및 습지대 복원으로 홍수 에너지를 분산·저장했을 것이다.',
        '조선시대에도 제방 붕괴로 관청과 주변 마을이 침수되어 행정이 마비되었듯, 현대에도 홍수가 발생했다면 정부청사와 스마트시티 인프라가 침수되어 공공 서비스가 중단되었을 것이다. 자연제방 복원과 도시 습지 시스템 연계를 통해 홍수 위험을 근본적으로 낮추었을 것이다.',
        '조선시대에도 하천 범람으로 백성이 대피소로 대피했듯, 현대에도 홍수가 발생했다면 대피소 과밀화와 의료·구호 자원 부족이 발생했을 것이다. 생태기반 대피 공간과 홍수 전용 저류지를 마련해 충격을 흡수했을 것이다.',
        '조선시대에도 강물이 범람해 목조 다리가 붕괴되고 교량이 유실되었듯, 현대에도 홍수가 발생했다면 주요 교량과 철도가 파손되어 물류와 교통이 장기간 중단되었을 것이다. 친환경 강변 보강재와 다층 침투 시스템을 적용해 구조물 보호와 물 흐름 관리를 병행했을 것이다.'
      ]
    },
    en: {
      title:  'Flood',
      source: 'Source: Google/Joseonwangjosillok',
      summaries: [
        'The flood caused rivers to overflow, inundating nearby villages and farmland.',
        'Low-lying houses and storerooms were submerged during the flood.',
        'Spring floods washed away bridges and severed key transport routes.',
        'Embankment breaches submerged government offices and nearby villages, paralyzing administration.',
        'River overflow forced villagers to evacuate to shelters.',
        'The floodwaters undermined wooden bridges and washed away crossings.'
      ],
      moderns: [
        'As in Joseon when rivers overflowed and inundated villages and farmland, today severe flooding would submerge homes and infrastructure, causing major property losses and displacements. Restored wetlands and reconnected floodplains would buffer floodwaters and minimize impact.',
        'As in Joseon when low-lying houses and storerooms were flooded, today cellars and logistics centers would be submerged and operations halted. Retention basins and permeable pavements would disperse and store excess water to mitigate flooding.',
        'As in Joseon when spring floods washed away bridges and cut transport links, today bridge collapses and road inundation would paralyze traffic. Green bridge design and wetland restoration would distribute and retain flood energy.',
        'As in Joseon when embankments breached and submerged offices, paralyzing governance, today flooding would inundate city halls and smart infrastructure, halting public services. Natural levee restoration and urban wetland integration would fundamentally reduce flood risk.',
        'As in Joseon when river overflow forced evacuations, today overcrowded shelters and resource shortages would occur. Nature-based refuge spaces and dedicated flood retention areas would absorb emergency impacts.',
        'As in Joseon when wooden bridges were destroyed and crossings washed away, today major bridges and rail lines would be damaged, disrupting logistics long-term. Eco-friendly bank reinforcements and multi-layer infiltration systems would protect structures and manage flows.'
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