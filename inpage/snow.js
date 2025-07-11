document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    const btn = document.getElementById('lang-toggle');
    const h1 = document.querySelector('.detail-page h1');
    const source = document.querySelector('.detail-page .source');
    const summaries = Array.from(document.querySelectorAll('.sub-box .summary'));
    const moderns = Array.from(document.querySelectorAll('.sub-box .modern'));

    const data = {
        ko: {
            h1: '폭설',
            source: '출처: Google/조선왕조실록',
            summaries: [
                '고려 희종 21년(1220) 3월 9일, 대설로 길이 막혀 이동이 매우 어려웠다.',
                '봄이 무르익은 4월에도 폭설이 내려 농사 준비에 차질을 빚었다.',
                '승려 일기에 폭설 당시 사찰 주변 풍속과 대응 과정을 기록했다.',
                '폭설로 관청 운영이 중단되자, 기록 보존을 위해 비상 인력이 동원됐다.',
                '관리에게 폭설 시 군사 보급로 확보 대책을 수립하라는 명령이 내려졌다.',
                '폭설로 궁궐 지붕과 임금 거처에 누수 피해가 발생해 잦은 수리 지시가 내려졌다.',
                '고려 말 폭설로 수도권 인구와 식량 보관에 심각한 차질이 생겼다.'
            ],
            moderns: [
                '조선시대에도 길이 봉쇄되어 백성이 고립되었듯, 현대에도 동일한 폭설이 일어났다면 교통마비와 응급차량 진입 지연으로 인명·물자 이동에 차질이 컸을 것이다.',
                '조선시대 농사 일정이 무너졌듯, 현대에도 4월 폭설이 발생했다면 개화 중인 과수와 밭작물이 큰 피해를 입었을 것이다.',
                '사찰이 폭설로 손상된 것처럼, 현대의 문화재 건물도 지붕 붕괴·습기 문제로 큰 훼손이 발생했을 것이다.',
                '관청이 마비된 조선시대와 마찬가지로 현대에도 행정 서비스 중단과 데이터 손실이 일어났을 것이다.',
                '군사 보급로가 끊긴 조선시대와 같이, 현대에도 보급 차단으로 국방 물자 수송이 중단되었을 것이다.',
                '궁궐이 누수된 조선시대처럼, 현대에도 유적지 목조 구조물이 물에 약해 큰 복원 비용과 안전 위험이 발생했을 것이다.',
                '수도권 물류가 멈춘 조선 말과 마찬가지로, 현대에도 폭설로 물류센터가 봉쇄되어 식량·의약품 부족과 대규모 가격 인상이 야기되었을 것이다.'
            ]
        },
        en: {
            h1: 'Heavy Snow',
            source: 'Source: Google/Joseonwangjosillok',
            summaries: [
                'On March 9, 1220 (Heijong 21), heavy snow blocked the roads, making travel extremely difficult.',
                'Even in April, as spring approached, sudden heavy snow disrupted agricultural preparations.',
                'A monk’s diary recorded wind conditions and response measures around temples during the snowfall.',
                'Official operations were halted due to snow, and emergency personnel were mobilized to preserve records.',
                'An order was issued to plan military supply routes if heavy snow blocked them.',
                'Snow damage to palace roofs and royal quarters led to frequent repair orders.',
                'In late Goryeo, heavy snow caused serious disruption to food storage and urban populations.'
            ],
            moderns: [
                'Just as roads were blocked in Joseon, heavy snow today would paralyze traffic and delay ambulances, disrupting lives and logistics.',
                'As farming schedules collapsed then, an April snow today would devastate blossoming orchards and field crops.',
                'Temples damaged by snow then mirror how heritage sites would suffer roof collapse and moisture damage today.',
                'A halted government in Joseon parallels modern administrative shutdowns and data loss under heavy snow.',
                'Cut military supply lines then foreshadow today’s defense logistics delays under snow blockades.',
                'Palace leaks then reflect how wooden heritage structures would incur high restoration costs and safety risks today.',
                'Citywide supply stops then anticipate modern shortages of food and medicine and price spikes under heavy snow.'
            ]
        }
    };

    document.querySelectorAll('.animate')
        .forEach(el => observer.observe(el));

    let lang = 'ko';
    btn.addEventListener('click', () => {
        lang = lang === 'ko' ? 'en' : 'ko';
        btn.textContent = lang === 'ko' ? 'EN' : 'KR';

        h1.textContent = data[lang].h1;
        source.textContent = data[lang].source;
        summaries.forEach((p, i) => p.textContent = data[lang].summaries[i]);
        moderns.forEach((p, i) => p.textContent = data[lang].moderns[i]);
    });
    const backBtn = document.getElementById('back-button');
    backBtn.addEventListener('click', () => {
        if (history.length > 1) {
            history.back();
        } else {
            window.location.href = '../index.html';
        }
    });
});
