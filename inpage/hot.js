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
      title: '폭염',
      source:'출처: Google/조선왕조실록',
      summaries: [
        '기록에 40일 넘게 뜨거운 더위가 계속되었다.',
        '들판이 말라 농사 준비가 불가능했다.',
        '폭염으로 연못의 물이 말라버려 어민이 피해를 입었다.',
        '가뭄과 폭염으로 전염병이 돌았다.',
        '폭염으로 흉작이 들어 식량 부족 우려가 제기되었다.',
        '폭염으로 산불이 발생해 임야가 크게 탔다.'
      ],
      moderns: [
        '조선시대에도 40일 넘게 이어진 폭염으로 농작물 시들음과 백성들의 탈진이 심각했듯, 현대에도 유사한 연속 폭염이 닥친다면 노약자 열사병·농작물 피해가 대규모로 발생했을 것이다. 도시 열섬 완화를 위해 수목 식재와 녹색 옥상 확대를 통해 온도 상승을 억제했을 것이다.',
        '조선시대에도 폭염으로 들판이 말라 농사 준비가 불가능했듯, 현대에도 극심한 폭염이 지속되었다면 관개수 부족과 가뭄 피해가 발생했을 것이다. 빗물 집수 및 지하수 재충전 시스템을 구축해 물 스트레스 완화를 지원했을 것이다.',
        '조선시대에도 연못 건조로 어민 피해가 발생했듯, 현대에도 비슷한 폭염이 이어졌다면 수생 생태계 붕괴와 어업 피해가 심각했을 것이다. 생태저수지와 습지 조성을 통해 물을 저장·순환시켜 수생 생태계 회복을 도왔을 것이다.',
        '조선시대에도 가뭄·폭염으로 전염병이 돌았듯, 현대에도 극심한 폭염·가뭄이 계속되었다면 식수 부족과 위생 악화로 감염병 발생이 증가했을 것이다. 친환경 빗물 정화 시스템과 녹지 확보로 위생을 강화했을 것이다.',
        '조선시대에도 폭염으로 흉작이 발생해 식량 부족이 우려되었듯, 현대에도 폭염이 장기화되었다면 곡물 생산량 감소와 식량 안보 위기가 발생했을 것이다. 스마트 온실과 드립 관개 시스템을 도입해 안정적인 식량 생산을 유지했을 것이다.',
        '조선시대에도 폭염으로 산불이 발생해 임야가 탔듯, 현대에도 폭염이 이어졌다면 대규모 산불과 생물 서식지 파괴가 일어났을 것이다. 산불 예방을 위한 산림 관리와 생물다양성 회복 프로젝트를 통해 산불 위험을 줄였을 것이다.'
      ]
    },
    en: {
      title: 'Heat Wave',
      source:'Source: Google/Joseonwangjosillok',
      summaries: [
        'The chronicle records over 40 days of continuous extreme heat.',
        'Fields dried up, making agricultural preparations impossible.',
        'Pond water dried up, harming fishermen.',
        'Drought and heat led to outbreaks of infectious diseases.',
        'Crop failures raised concerns about food shortages.',
        'Wildfires broke out, devastating woodlands.'
      ],
      moderns: [
        'As in Joseon when 40+ days of heat wilted crops and exhausted people, today heatwaves would cause mass heatstroke and crop loss. Urban heat islands would be mitigated by tree planting and green roofs.',
        'As in Joseon when fields dried up, today irrigation shortages and drought would occur. Rainwater harvesting and groundwater recharge systems would alleviate water stress.',
        'As in Joseon when ponds dried up, today aquatic ecosystems would collapse and fisheries fail. Ecological reservoirs and wetland restoration would store and circulate water to support ecosystems.',
        'As in Joseon when drought and heat spread disease, today water shortages and poor sanitation would increase infections. Green rainwater filtration and expanded green spaces would enhance public health.',
        'As in Joseon when heat caused crop failures, today long heat spells would reduce yields and threaten food security. Smart greenhouses and drip irrigation would maintain stable production.',
        'As in Joseon when heat sparked wildfires, today large-scale fires would destroy habitats. Forest management and biodiversity restoration projects would reduce wildfire risk.'
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