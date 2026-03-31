/**
 * K-Culture Explorer - 한국 문화유산 데이터
 * 궁궐, 사찰, 성곽, 한옥마을, 유네스코 세계유산 등
 */

const CATEGORIES = [
    { id: 'all', name: '전체', icon: '🏛️', color: '#6c5ce7' },
    { id: 'palace', name: '궁궐', icon: '🏯', color: '#e17055' },
    { id: 'temple', name: '사찰', icon: '🛕', color: '#00b894' },
    { id: 'fortress', name: '성곽', icon: '🏰', color: '#0984e3' },
    { id: 'village', name: '한옥마을', icon: '🏘️', color: '#fdcb6e' },
    { id: 'unesco', name: '유네스코', icon: '🌍', color: '#a29bfe' },
];

const HERITAGE_SITES = [
    {
        id: 1,
        name: '경복궁',
        nameEn: 'Gyeongbokgung Palace',
        category: 'palace',
        region: '서울',
        image: 'images/gyeongbokgung_palace_1774976999385.png',
        thumbnail: '',
        description: '조선 왕조의 법궁(法宮)으로, 1395년 태조 이성계가 창건한 조선 왕조 최초의 궁궐입니다.',
        history: '경복궁은 1395년(태조 4년)에 창건되어 조선 왕조 약 200년간 법궁으로 사용되었습니다. 임진왜란 때 소실되었다가 1868년(고종 5년) 흥선대원군에 의해 중건되었습니다. 일제강점기에 대부분의 건물이 철거되었으나, 1990년대부터 복원 사업이 진행되고 있습니다.',
        highlights: [
            {
                name: '경회루 (국보)',
                image: 'images/gyeongbokgung_gyeonghoeru_1774977837783.png',
                history: '왕이 국가적인 경사가 있을 때나 외국 사신을 영접할 때 연회를 베풀던 곳입니다. 조선 후기 연회 건축의 정수를 보여줍니다.',
                point: '연못에 비치는 웅장한 누각의 반영과 수면 위로 피어오르는 물안개의 조화가 장관입니다.'
            },
            {
                name: '근정전 (국보)',
                image: 'images/gyeongbokgung_palace_1774976999385.png',
                history: '조선 왕조의 정전으로, 왕의 즉위식, 조하 등 국가의 가장 큰 의식을 치르던 곳입니다.',
                point: '웅장한 이층 전각 내부의 높은 천장과 왕의 자리인 어좌 뒷편의 일월오봉도를 확인해보세요.'
            },
            {
                name: '향원정',
                image: 'images/gyeongbokgung_palace_1774976999385.png',
                history: '고종이 건청궁을 지을 때 그 앞에 연못을 파고 산을 만들어 정자를 지은 곳입니다.',
                point: '육각형 모양의 정자와 연못을 가로지르는 취향교의 여성적이고 섬세한 아름다움을 느낄 수 있습니다.'
            }
        ],
        videos: [
            { title: "경복궁 야간개장 달빛기행 VLOG 🌙", url: "https://www.youtube.com/watch?v=lLKhT0Mc-PU", thumb: "https://img.youtube.com/vi/lLKhT0Mc-PU/hqdefault.jpg" }
        ],
        address: '서울특별시 종로구 사직로 161',
        hours: '09:00 - 18:00 (계절별 상이)',
        closedDay: '매주 화요일',
        fee: '성인 3,000원 / 청소년 1,500원',
        transport: '지하철 3호선 경복궁역 5번 출구',
        tips: ['한복 착용 시 무료 입장', '수문장 교대식: 10:00, 14:00', '야간 특별관람 예약 필수'],
        rating: 4.7,
        reviewCount: 2847,
        lat: 37.5796,
        lng: 126.9770,
        tags: ['서울', '궁궐', '가족여행', '한복체험', '야간관람']
    },
    {
        id: 2,
        name: '창덕궁',
        nameEn: 'Changdeokgung Palace',
        category: 'palace',
        region: '서울',
        image: 'images/changdeokgung_palace_1774977018000.png',
        thumbnail: '',
        description: '유네스코 세계유산으로 등재된 조선 왕궁으로, 자연과 조화를 이룬 후원(비원)이 유명합니다.',
        history: '1405년(태종 5년) 경복궁의 이궁으로 창건되었습니다. 자연 지형을 살린 건축으로 조선 궁궐 중 가장 오래 왕들이 거처한 궁궐입니다. 1997년 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '비원 (후원)',
                image: 'images/changdeokgung_huwon_1774977856442.png',
                history: '조선 왕실의 휴식 공간으로, 자연 지형을 그대로 살려 골짜기마다 정자를 지은 한국 정원 예술의 극치입니다.',
                point: '부용지, 애련지 등 연못 주변의 고즈넉한 풍광과 계절마다 변하는 숲의 색채를 감상하세요.'
            },
            {
                name: '인정전 (국보)',
                image: 'images/changdeokgung_palace_1774977018000.png',
                history: '창덕궁의 정전으로, 왕의 즉위식이나 신하들의 하례, 외국 사신의 접견 등 중요 행사가 열렸습니다.',
                point: '내부에 전등과 커튼 등 개화기 시절 서양식 장식물이 도입된 독특한 궁궐 내부를 볼 수 있습니다.'
            }
        ],
        videos: [
            { title: "창덕궁 후원, 가을 언택트 힐링 산책 🍁", url: "https://www.youtube.com/watch?v=c9eORxqypNQ", thumb: "https://img.youtube.com/vi/c9eORxqypNQ/hqdefault.jpg" },
            { title: "조선의 궁궐, 창덕궁 다큐멘터리", url: "https://www.youtube.com/watch?v=mGqDcfH6Hfw", thumb: "https://img.youtube.com/vi/mGqDcfH6Hfw/hqdefault.jpg" }
        ],
        address: '서울특별시 종로구 율곡로 99',
        hours: '09:00 - 18:00',
        closedDay: '매주 월요일',
        fee: '성인 3,000원 / 후원 별도 5,000원',
        transport: '지하철 3호선 안국역 3번 출구',
        tips: ['후원은 시간제 가이드 투어만 가능', '봄 벚꽃/가을 단풍 시즌 추천', '달빛기행 특별 프로그램 인기'],
        rating: 4.8,
        reviewCount: 1923,
        lat: 37.5794,
        lng: 126.9910,
        tags: ['서울', '궁궐', '유네스코', '후원', '달빛기행']
    },
    {
        id: 3,
        name: '불국사',
        nameEn: 'Bulguksa Temple',
        category: 'temple',
        region: '경주',
        image: 'images/bulguksa_temple_1774977039029.png',
        thumbnail: '',
        description: '신라 불교 예술의 정수를 보여주는 유네스코 세계유산. 석굴암과 함께 경주를 대표하는 문화유산입니다.',
        history: '528년(법흥왕 15년)에 창건되어 751년(경덕왕 10년) 김대성에 의해 대대적으로 중창되었습니다. 다보탑과 석가탑은 통일신라 석조미술의 걸작으로 평가됩니다.',
        highlights: [
            {
                name: '다보탑 (국보)',
                image: 'images/bulguksa_dabotap_1774977875113.png',
                history: '통일신라 시대 경덕왕 때 세워진 화강암 십자탑으로, 화려하고 복잡한 조각 기법이 특징입니다.',
                point: '사각, 팔각, 원이 조화롭게 층을 이루는 입체적인 구조와 돌사자 조각을 자세히 살펴보세요.'
            },
            {
                name: '석가탑 (국보)',
                image: 'images/bulguksa_temple_1774977039029.png',
                history: '다보탑과 마주 보고 있는 3층 석탑으로, 간결하고 장중한 통일신라 석탑의 전형을 보여줍니다.',
                point: '안정감 있는 완벽한 비례미와 해체 수리 당시 내부에서 발견된 무구정광대다라니경의 역사를 떠올려보세요.'
            },
            {
                name: '청운교·백운교',
                image: 'images/bulguksa_temple_1774977039029.png',
                history: '대웅전으로 향하는 자하문 아래의 돌계단으로, 세속과 부처의 세계를 이어주는 다리를 상징합니다.',
                point: '위아래가 둥근 무지개 모양으로 조각된 아름다운 석축 기술(홍예)을 감상하세요.'
            }
        ],
        videos: [
            { title: "천년의 향기, 경주 불국사 4K 영상", url: "https://www.youtube.com/watch?v=a45ZgFvV2lM", thumb: "https://img.youtube.com/vi/a45ZgFvV2lM/hqdefault.jpg" }
        ],
        address: '경상북도 경주시 불국로 385',
        hours: '07:00 - 18:00 (계절별 상이)',
        closedDay: '연중무휴',
        fee: '성인 6,000원 / 청소년 4,000원',
        transport: 'KTX 신경주역에서 버스 700번',
        tips: ['석굴암과 함께 방문 추천', '새벽 일출 시간대 인기', '가을 단풍 명소'],
        rating: 4.6,
        reviewCount: 3156,
        lat: 35.7901,
        lng: 129.3318,
        tags: ['경주', '사찰', '유네스코', '신라', '국보']
    },
    {
        id: 4,
        name: '해인사',
        nameEn: 'Haeinsa Temple',
        category: 'temple',
        region: '합천',
        image: 'images/haeinsa_temple_1774977060326.png',
        thumbnail: '',
        description: '팔만대장경(유네스코 세계기록유산)을 보존하고 있는 한국 3대 사찰 중 하나입니다.',
        history: '802년(애장왕 3년) 의순, 이정 두 스님이 창건하였습니다. 고려시대 제작된 팔만대장경판 81,258장을 보존하고 있으며, 장경판전은 유네스코 세계유산에 등재되어 있습니다.',
        highlights: [
            {
                name: '장경판전 (국보/세계유산)',
                image: 'images/haeinsa_janggyeong_1774977892195.png',
                history: '고려 팔만대장경판을 보존하기 위해 15세기에 지어진 목조 건축물로, 통풍과 습도 조절을 위한 과학적 설계가 돋보입니다.',
                point: '앞뒤 창문의 크기를 다르게 하여 자연 통풍을 극대화한 신비로운 과학 기술을 확인해보세요.'
            },
            {
                name: '팔만대장경 (세계기록유산)',
                image: 'images/haeinsa_temple_1774977060326.png',
                history: '몽골의 침입을 불교의 힘으로 막고자 16년에 걸쳐 제작된 8만여 장의 목판 대장경입니다.',
                point: '오탈자가 거의 없는 정교한 판각 기술과 천 년이 넘도록 부식되지 않은 목판의 보존 상태를 상상해보세요.'
            }
        ],
        videos: [
            { title: "합천 해인사 팔만대장경의 비밀 다큐", url: "https://www.youtube.com/watch?v=MK-naD1GiFI", thumb: "https://img.youtube.com/vi/MK-naD1GiFI/hqdefault.jpg" }
        ],
        address: '경상남도 합천군 가야면 해인사길 122',
        hours: '08:30 - 18:00',
        closedDay: '연중무휴',
        fee: '성인 3,000원',
        transport: '대구 서부시외버스터미널에서 해인사 직행',
        tips: ['소리길 트레킹 코스 추천', '템플스테이 프로그램 운영', '겨울 설경이 특히 아름다움'],
        rating: 4.5,
        reviewCount: 1247,
        lat: 35.8025,
        lng: 128.0986,
        tags: ['합천', '사찰', '유네스코', '팔만대장경', '템플스테이']
    },
    {
        id: 5,
        name: '수원 화성',
        nameEn: 'Hwaseong Fortress',
        category: 'fortress',
        region: '수원',
        image: 'images/suwon_hwaseong_1774977078293.png',
        thumbnail: '',
        description: '정조대왕이 아버지 사도세자를 기리며 축성한 성곽. 동서양 건축기술이 융합된 유네스코 세계유산입니다.',
        history: '1794~1796년, 정조의 명으로 정약용이 설계하고 축성하였습니다. 거중기 등 과학적 기구를 활용한 건축기법이 돋보이며, 1997년 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '서장대',
                image: 'images/suwon_seojangdae_1774977909048.png',
                history: '팔달산 정상에 위치한 군사 지휘소로, 정조대왕이 직접 이곳에 올라 군사 훈련을 지휘했습니다.',
                point: '수원 시내가 한눈에 내려다보이는 탁 트인 전망과 화려한 누각의 단청을 감상하세요.'
            },
            {
                name: '방화수류정',
                image: 'images/suwon_hwaseong_1774977078293.png',
                history: '군사적 목적으로 지어진 각루이면서 동시에 정자의 유려한 멋을 갖춘 독특한 형태의 건축물입니다.',
                point: '아래 용연(연못)과 어우러진 그림 같은 풍경은 수원화성에서 가장 아름다운 야경 명소입니다.'
            }
        ],
        videos: [
            { title: "수원화성 성곽 투어 브이로그", url: "https://www.youtube.com/watch?v=3kLe63umO3o", thumb: "https://img.youtube.com/vi/3kLe63umO3o/hqdefault.jpg" }
        ],
        address: '경기도 수원시 팔달구 정조로 825',
        hours: '상시 개방 (시설별 상이)',
        closedDay: '연중무휴 (내부 시설 월요일 휴관)',
        fee: '성곽 무료 / 행궁 성인 1,500원',
        transport: '지하철 1호선 수원역, 버스 환승',
        tips: ['성곽 둘레길 약 5.7km (2시간 소요)', '야간 라이트업 아름다움', '화성행궁 무예24기 공연'],
        rating: 4.6,
        reviewCount: 2034,
        lat: 37.2849,
        lng: 127.0139,
        tags: ['수원', '성곽', '유네스코', '정조', '둘레길']
    },
    {
        id: 6,
        name: '안동 하회마을',
        nameEn: 'Hahoe Village',
        category: 'village',
        region: '안동',
        image: 'images/andong_hahoe_1774977100446.png',
        thumbnail: '',
        description: '조선시대 양반 문화를 고스란히 간직한 전통 마을. 풍산 류씨 집성촌으로 600년 역사를 자랑합니다.',
        history: '풍산 류씨가 600여 년간 살아온 마을로, 낙동강이 마을을 감싸 돌아 흐르는 형태에서 이름이 유래했습니다. 하회별신굿 탈놀이는 국가무형문화재이며, 2010년 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '부용대',
                image: 'images/andong_buyongdae_1774977928689.png',
                history: '태백산맥의 끝자락이 깎아지른 듯한 절벽을 이룬 곳으로, "연꽃을 올려다보는 언덕"이라는 뜻입니다.',
                point: '절벽 위에 올라 굽이쳐 흐르는 낙동강과 전통 초가집들이 어우러진 마을 전체 조망을 감상하세요.'
            },
            {
                name: '충효당 (보물)',
                image: 'images/andong_hahoe_1774977100446.png',
                history: '조선시대 최고의 재상 서애 류성룡의 종택으로, 평생을 청백리로 지낸 그의 덕을 기리기 지어진 집입니다.',
                point: '전통 양반가옥 구조의 아름다움과 뜰에 심어진 유서 깊은 만지송을 찾아보세요.'
            }
        ],
        videos: [
            { title: "안동 하회마을, 시대를 거슬러 올라가다", url: "https://www.youtube.com/watch?v=XHEff-UzqBk", thumb: "https://img.youtube.com/vi/XHEff-UzqBk/hqdefault.jpg" }
        ],
        address: '경상북도 안동시 풍천면 하회종가길 40',
        hours: '09:00 - 18:00',
        closedDay: '연중무휴',
        fee: '성인 5,000원',
        transport: '안동시외버스터미널에서 46번 버스',
        tips: ['부용대에서 마을 전경 필수 감상', '하회별신굿 탈놀이 공연 일정 확인', '전통 음식 체험 가능'],
        rating: 4.5,
        reviewCount: 1578,
        lat: 36.5394,
        lng: 128.5186,
        tags: ['안동', '한옥마을', '유네스코', '전통문화', '탈놀이']
    },
    {
        id: 7,
        name: '전주 한옥마을',
        nameEn: 'Jeonju Hanok Village',
        category: 'village',
        region: '전주',
        image: 'images/jeonju_hanok_1774977130494.png',
        thumbnail: '',
        description: '700여 채의 한옥이 모여있는 대한민국 대표 한옥마을. 한식, 한지, 한복 체험의 중심지입니다.',
        history: '1930년대 일본인들의 세력 확장에 맞서 한국인들이 교동과 풍남동 일대에 한옥을 짓기 시작한 것이 시초입니다. 현재 약 735채의 한옥이 밀집해 있으며, 연간 1,000만 명 이상이 방문합니다.',
        highlights: [
            {
                name: '경기전 (사적)',
                image: 'images/jeonju_gyeonggijeon_1774977953129.png',
                history: '조선 태조 이성계의 어진(초상화)을 모시기 위해 1410년(태종 10년)에 지어진 건물입니다.',
                point: '진녹색 대나무 숲길(포토존)과 엄숙한 분위기의 본전, 그리고 조경묘를 산책해보세요.'
            },
            {
                name: '전동성당',
                image: 'images/jeonju_hanok_1774977130494.png',
                history: '호남 지방 서양식 근대 건축물 중 가장 오래되고 규모가 큰 곳으로, 순교자들의 뜻을 기려 건립되었습니다.',
                point: '붉은 벽돌과 로마네스크 양식의 둥근 천장이 자아내는 이국적이면서도 신성한 외관을 감상하세요.'
            }
        ],
        videos: [
            { title: "전주 한옥마을 먹방 & 힐링 투어", url: "https://www.youtube.com/watch?v=UaxSGqCsanU", thumb: "https://img.youtube.com/vi/UaxSGqCsanU/hqdefault.jpg" }
        ],
        address: '전라북도 전주시 완산구 기린대로 99',
        hours: '상시 개방 (개별 시설 상이)',
        closedDay: '연중무휴',
        fee: '마을 무료 (체험별 상이)',
        transport: 'KTX 전주역에서 버스 15분',
        tips: ['한복 대여 후 마을 산책 추천', '전주 비빔밥, 초코파이 필수 맛집', '야경 산책 코스 추천'],
        rating: 4.4,
        reviewCount: 4521,
        lat: 35.8139,
        lng: 127.1528,
        tags: ['전주', '한옥마을', '한복체험', '비빔밥', 'K-Food']
    },
    {
        id: 8,
        name: '남한산성',
        nameEn: 'Namhansanseong Fortress',
        category: 'fortress',
        region: '광주/성남',
        image: 'images/namhansanseong_1774977148306.png',
        thumbnail: '',
        description: '병자호란의 역사적 현장이자 유네스코 세계유산. 서울 근교 최고의 트레킹 명소입니다.',
        history: '본래 신라 문무왕 때 쌓은 주장성을 바탕으로, 1624년(인조 2년) 대대적으로 축성되었습니다. 1636년 병자호란 때 인조가 47일간 항전한 역사적 장소이며, 2014년 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '수어장대',
                image: 'images/namhansanseong_sueojangdae_1774977972394.png',
                history: '남한산성 축조 당시 지어진 4개의 장대 중 유일하게 남아있는 건물로, 최고 지휘관이 머물던 곳입니다.',
                point: '화려한 2층 누각 건물의 단청과 그곳에서 내려다보이는 성곽 및 서울의 풍경을 감상하세요.'
            },
            {
                name: '행궁',
                image: 'images/namhansanseong_1774977148306.png',
                history: '임금이 서울의 궁궐을 떠나 도성 밖으로 행차할 때 임시로 임금이 머물던 곳으로, 병자호란의 슬픈 역사가 깃들어 있습니다.',
                point: '종묘와 사직을 모실 수 있도록 설계된 남한산성 행궁만의 독특한 구조인 좌전과 우실을 확인하세요.'
            }
        ],
        videos: [
            { title: "위대한 유산, 남한산성 둘레길 등반", url: "https://www.youtube.com/watch?v=LBKUUsokGDs", thumb: "https://img.youtube.com/vi/LBKUUsokGDs/hqdefault.jpg" }
        ],
        address: '경기도 광주시 남한산성면 남한산성로 731',
        hours: '상시 개방',
        closedDay: '연중무휴',
        fee: '무료 (행궁 2,000원)',
        transport: '지하철 8호선 산성역에서 도보 또는 버스',
        tips: ['둘레길 전체 약 8km (3시간)', '봄 벚꽃, 가을 단풍 명소', '산성 내 먹거리촌 유명'],
        rating: 4.4,
        reviewCount: 1876,
        lat: 37.4803,
        lng: 127.1831,
        tags: ['광주', '성곽', '유네스코', '트레킹', '역사']
    },
    {
        id: 9,
        name: '석굴암',
        nameEn: 'Seokguram Grotto',
        category: 'temple',
        region: '경주',
        image: 'images/seokguram_1774977170462.png',
        thumbnail: '',
        description: '신라 시대 불교 조각 예술의 최고봉. 본존불의 미소는 한국 미의 상징으로 불립니다.',
        history: '751년(경덕왕 10년) 김대성이 전생의 부모를 위해 창건하였습니다. 화강암으로 만든 인공 석굴 안에 본존불을 중심으로 보살, 천왕, 역사 등 40구의 불상이 배치되어 있습니다.',
        highlights: [
            {
                name: '본존불좌상 (국보)',
                image: 'images/seokguram_bonjonbul_1774977993153.png',
                history: '동해를 바라보고 있는 거대한 돌부처로, 신라 불교 조각의 정수이자 한국 미학의 상징입니다.',
                point: '완벽한 수학적 비례(1:1.414)와 생명력이 넘치는 불상의 미소를 감상해보세요.'
            },
            {
                name: '십일면관음보살상',
                image: 'images/seokguram_1774977170462.png',
                history: '본존불 바로 뒤 벽면에 새겨진 보살상으로, 11개의 얼굴을 가졌으며 가장 정교한 조각으로 꼽힙니다.',
                point: '섬세하게 조각된 천의의 주름과 장신구의 입체감을 자세히 살펴보세요.'
            }
        ],
        videos: [
            { title: "위대한 유산, 토함산 석굴암의 비밀", url: "https://www.youtube.com/watch?v=C6rLjdOiShc", thumb: "https://img.youtube.com/vi/C6rLjdOiShc/hqdefault.jpg" }
        ],
        address: '경상북도 경주시 불국로 873-243',
        hours: '07:00 - 17:30',
        closedDay: '연중무휴',
        fee: '성인 6,000원',
        transport: '불국사에서 셔틀버스 운행',
        tips: ['새벽 일출 참배 프로그램 인기', '불국사와 함께 방문 필수', '산책로 약 1.5km'],
        rating: 4.7,
        reviewCount: 2341,
        lat: 35.7960,
        lng: 129.3489,
        tags: ['경주', '사찰', '유네스코', '국보', '일출']
    },
    {
        id: 10,
        name: '종묘',
        nameEn: 'Jongmyo Shrine',
        category: 'unesco',
        region: '서울',
        image: 'images/jongmyo_1774977186595.png',
        thumbnail: '',
        description: '조선 왕조 역대 왕과 왕비의 신위를 모신 사당. 종묘제례악은 유네스코 인류무형유산입니다.',
        history: '1394년 조선 건국과 함께 창건된 왕실 사당입니다. 정전은 세계에서 가장 긴 단일 목조건물 중 하나이며, 종묘제례와 종묘제례악은 조선 왕실의 의례 전통을 온전히 보존하고 있습니다.',
        highlights: [
            {
                name: '정전 (국보)',
                image: 'images/jongmyo_jeongjeon_1774978011396.png',
                history: '이성계를 비롯하여 공로가 큰 조선의 19위 왕과 30위 왕비의 신주를 모신 곳입니다.',
                point: '건물 길이만 101m에 달하는 세계 최장 목조건물의 압도적인 규모와 단순함의 미학을 감상하세요.'
            },
            {
                name: '종묘제례',
                image: 'images/jongmyo_1774977186595.png',
                history: '조선 시대 왕실의 조상에게 제사를 지내는 의식으로, 종묘제례악과 함께 유네스코 인류무형문화유산에 등재되었습니다.',
                point: '매년 5월 첫째 주 일요일에 열리는 웅장한 제례 의식과 음악(제례악), 춤(일무)의 조화를 느껴보세요.'
            }
        ],
        videos: [
            { title: "조선왕조의 영혼이 깃든 곳, 종묘", url: "https://www.youtube.com/watch?v=8P9qLcJGsWE", thumb: "https://img.youtube.com/vi/8P9qLcJGsWE/hqdefault.jpg" }
        ],
        address: '서울특별시 종로구 종로 157',
        hours: '09:00 - 18:00 (가이드 투어)',
        closedDay: '매주 화요일',
        fee: '성인 1,000원',
        transport: '지하철 1호선 종로3가역 11번 출구',
        tips: ['자유관람은 토요일만 가능', '평일은 시간제 가이드 투어', '종묘제례 관람 5월 추천'],
        rating: 4.3,
        reviewCount: 987,
        lat: 37.5742,
        lng: 126.9946,
        tags: ['서울', '유네스코', '조선왕조', '종묘제례', '세계유산']
    },
    {
        id: 11,
        name: '경주 양동마을',
        nameEn: 'Yangdong Village',
        category: 'village',
        region: '경주',
        image: 'images/yangdong_village_1774977204406.png',
        thumbnail: '',
        description: '500년 역사의 대표적인 양반 전통 마을. 경주 손씨와 여강 이씨의 집성촌입니다.',
        history: '조선 초기에 형성된 마을로, 월성 손씨와 여강 이씨 양 가문이 대대로 거주해 왔습니다. 한국 최대 규모의 전통 마을로, 2010년 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '향단 (보물)',
                image: 'images/yangdong_hyangdan_1774978030635.png',
                history: '조선 중기 문신 이언적이 경상감사로 부임할 때 지은 집으로, 독특한 99칸 구조를 가졌습니다.',
                point: '마을 초입 능선 위에 우뚝 솟은 화려한 한옥의 지붕선과 폐쇄적이고 독특한 내부 마당 구조를 관찰하세요.'
            },
            {
                name: '관가정 (보물)',
                image: 'images/yangdong_village_1774977204406.png',
                history: '청백리 우재 손중돈이 살던 옛집으로, "곡식이 자라는 모습을 보며 자손들이 농사의 어려움을 알게 한다"는 뜻이 담겨 있습니다.',
                point: '언덕 위에서 내려다보이는 형산강과 드넓은 안강 평야의 시원한 풍광을 즐겨보세요.'
            }
        ],
        videos: [
            { title: "양반의 품격, 양동마을 힐링 걷기", url: "https://www.youtube.com/watch?v=L0q2qSvM4f0", thumb: "https://img.youtube.com/vi/L0q2qSvM4f0/hqdefault.jpg" }
        ],
        address: '경상북도 경주시 강동면 양동마을길 93',
        hours: '09:00 - 19:00',
        closedDay: '연중무휴',
        fee: '성인 4,000원',
        transport: '경주시외버스터미널에서 203번 버스',
        tips: ['실제 주민이 거주하므로 정숙 필요', '불국사와 함께 일정 구성 추천', '전통 식사 체험 가능'],
        rating: 4.3,
        reviewCount: 856,
        lat: 35.8539,
        lng: 129.2708,
        tags: ['경주', '한옥마을', '유네스코', '양반문화', '전통마을']
    },
    {
        id: 12,
        name: '고창 고인돌',
        nameEn: 'Gochang Dolmen Site',
        category: 'unesco',
        region: '고창',
        image: 'images/gochang_dolmen_1774977222183.png',
        thumbnail: '',
        description: '세계 최대 규모의 고인돌 밀집 지역. 선사시대 거석문화의 보고로 유네스코 세계유산입니다.',
        history: '약 447기의 고인돌이 분포하며, 고인돌 형태의 다양성과 밀집도에서 세계적으로 유례없는 유적지입니다. 2000년 화순·강화 고인돌과 함께 유네스코 세계유산에 등재되었습니다.',
        highlights: [
            {
                name: '고인돌 군락',
                image: 'images/gochang_giant_dolmen_1774978048774.png',
                history: '청동기 시대의 무덤인 고인돌이 산기슭을 따라 2km에 걸쳐 447기나 밀집되어 있는 세계적인 유적지입니다.',
                point: '탁자식, 바둑판식, 개석식 등 크기와 모양이 제각각인 다양한 형태의 고인돌들을 찾아보세요.'
            },
            {
                name: '선사체험장',
                image: 'images/gochang_dolmen_1774977222183.png',
                history: '수천 년 전 선사인들의 생활 모습을 재현해 놓은 체험 공간으로, 고인돌 박물관 인근에 있습니다.',
                point: '움집 체험, 불 피우기, 암각화 그리기 등 아이들과 함께 참여할 수 있는 다양한 체험 프로그램을 즐겨보세요.'
            }
        ],
        videos: [
            { title: "거석문화의 신비, 고창 고인돌 유적지", url: "https://www.youtube.com/watch?v=rin5A0XIepM", thumb: "https://img.youtube.com/vi/rin5A0XIepM/hqdefault.jpg" }
        ],
        address: '전라북도 고창군 고창읍 고인돌공원길 74',
        hours: '09:00 - 18:00',
        closedDay: '매주 월요일',
        fee: '성인 3,000원',
        transport: '고창시외버스터미널에서 택시 10분',
        tips: ['고인돌 박물관 먼저 관람 추천', '선사체험 프로그램 가족 추천', '걷기 좋은 산책 코스'],
        rating: 4.2,
        reviewCount: 542,
        lat: 35.4396,
        lng: 126.6612,
        tags: ['고창', '유네스코', '선사시대', '고인돌', '체험']
    }
];

// 샘플 탐방 후기 데이터
const SAMPLE_REVIEWS = [
    {
        id: 1,
        siteId: 1,
        author: '여행러김',
        date: '2026-03-15',
        rating: 5,
        title: '봄의 경복궁, 한복 입고 최고의 하루!',
        content: '벚꽃이 피기 시작한 경복궁에 한복 입고 방문했어요. 한복 착용하면 무료 입장이라 너무 좋았고, 경회루 앞에서 찍은 사진이 정말 예술이었습니다. 수문장 교대식도 처음 봤는데 외국인 관광객들에게도 인기 만점! 근정전의 웅장함에 감탄했어요.',
        images: [],
        helpful: 24,
    },
    {
        id: 2,
        siteId: 2,
        author: '궁궐덕후',
        date: '2026-03-10',
        rating: 5,
        title: '후원 달빛기행, 잊을 수 없는 경험',
        content: '달빛기행 프로그램에 당첨되어 다녀왔습니다. 밤의 후원은 낮과는 완전히 다른 분위기예요. 부용지에 비친 달빛이 정말 환상적이었습니다. 가이드 설명도 재미있고, 특별한 다과도 포함되어 있었어요. 꼭 신청해보세요!',
        images: [],
        helpful: 31,
    },
    {
        id: 3,
        siteId: 3,
        author: '역사탐방가',
        date: '2026-02-28',
        rating: 4,
        title: '천년 고찰의 위엄, 불국사',
        content: '경주 여행 중 불국사를 방문했습니다. 다보탑과 석가탑을 직접 보니 정말 감동이었어요. 다만 주말이라 사람이 너무 많았습니다. 평일 방문을 추천드려요. 석굴암도 함께 방문하면 하루가 알차게 됩니다.',
        images: [],
        helpful: 18,
    },
    {
        id: 4,
        siteId: 7,
        author: '맛집여행자',
        date: '2026-03-05',
        rating: 5,
        title: '전주 한옥마을에서 먹방 투어!',
        content: '한복 입고 마을 구석구석을 다녔어요. 비빔밥은 물론이고, PNB 초코파이, 길거리 꼬치, 콩나물국밥까지 정말 먹을 것이 넘칩니다. 한지 공예 체험도 했는데 직접 만든 한지 엽서가 좋은 기념품이 됐어요.',
        images: [],
        helpful: 42,
    },
    {
        id: 5,
        siteId: 5,
        author: '워킹마니아',
        date: '2026-03-01',
        rating: 5,
        title: '수원화성 성곽길 완주!',
        content: '5.7km 전 구간을 걸었습니다. 중간중간 전망 포인트에서 바라보는 수원 시내 전경이 멋졌어요. 방화수류정에서의 일몰은 꼭 보세요! 화성행궁에서의 무예24기 공연도 볼만합니다. 운동화 필수!',
        images: [],
        helpful: 27,
    },
    {
        id: 6,
        siteId: 6,
        author: '문화탐험가',
        date: '2026-02-20',
        rating: 4,
        title: '안동 하회마을, 시간이 멈춘 곳',
        content: '부용대에서 내려다본 하회마을 전경이 압권이었습니다. 낙동강이 마을을 감싸 도는 모습이 정말 아름다워요. 탈놀이 공연도 재미있고, 전통 가옥들의 고즈넉한 분위기가 좋았습니다. 안동 찜닭도 잊지 마세요!',
        images: [],
        helpful: 15,
    },
];
