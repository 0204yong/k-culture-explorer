/**
 * K-Culture Explorer - 메인 앱 로직
 * 문화유산 탐색, 탐방 후기, AI 루트 플래너
 */

// === CONFIG ===
const API_BASE = 'http://localhost:8000';

// === State ===
const appState = {
    activeCategory: 'all',
    selectedSites: [],
    reviewRating: 0,
    allReviews: [...SAMPLE_REVIEWS],
    reviewFilter: 'all',
};

// === DOM ready ===
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHeroStats();
    initHeroParticles();
    renderCategories();
    renderHeritageGrid();
    renderReviews();
    renderSiteCheckboxes();
    renderReviewSiteOptions();
    initModal();
    initReviewModal();
    initPlannerBtn();
    initScrollAnimations();
    marked.setOptions({ breaks: true, gfm: true });
});

// ══════════════════════════════
//  NAVBAR
// ══════════════════════════════
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');

    // 스크롤 시 스타일 변경
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNav();
    });

    // 모바일 메뉴
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // 네비 링크 클릭
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

function updateActiveNav() {
    const sections = ['hero', 'explore', 'reviews', 'planner'];
    const scrollPos = window.scrollY + 150;

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
        }
    });
}

// ══════════════════════════════
//  HERO STATS COUNTER
// ══════════════════════════════
function initHeroStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);
}

function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            el.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// ══════════════════════════════
//  HERO PARTICLES
// ══════════════════════════════
function initHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(201, 168, 76, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            25% { transform: translate(${Math.random()*40-20}px, ${Math.random()*-60}px) scale(1.5); opacity: 0.7; }
            50% { transform: translate(${Math.random()*60-30}px, ${Math.random()*-100}px) scale(1); opacity: 0.4; }
            75% { transform: translate(${Math.random()*30-15}px, ${Math.random()*-40}px) scale(1.3); opacity: 0.6; }
        }
    `;
    document.head.appendChild(style);
}

// ══════════════════════════════
//  CATEGORIES
// ══════════════════════════════
function renderCategories() {
    const container = document.getElementById('categoryFilter');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
        <button class="category-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
        </button>
    `).join('');

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;

        container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.activeCategory = btn.dataset.category;
        renderHeritageGrid();
    });
}

// ══════════════════════════════
//  HERITAGE GRID
// ══════════════════════════════
function renderHeritageGrid() {
    const container = document.getElementById('heritageGrid');
    if (!container) return;

    const filtered = appState.activeCategory === 'all'
        ? HERITAGE_SITES
        : HERITAGE_SITES.filter(s => s.category === appState.activeCategory);

    const categoryIcons = { palace: '🏯', temple: '🛕', fortress: '🏰', village: '🏘️', unesco: '🌍' };
    const categoryColors = { palace: '#e17055', temple: '#00b894', fortress: '#0984e3', village: '#fdcb6e', unesco: '#a29bfe' };
    const categoryNames = { palace: '궁궐', temple: '사찰', fortress: '성곽', village: '한옥마을', unesco: '유네스코' };

    container.innerHTML = filtered.map(site => `
        <div class="heritage-card" data-site-id="${site.id}">
            <div class="card-image" style="background: linear-gradient(135deg, ${categoryColors[site.category]}22, ${categoryColors[site.category]}08);">
                <span>${categoryIcons[site.category]}</span>
                <span class="card-category-badge" style="background: ${categoryColors[site.category]}33; color: ${categoryColors[site.category]};">
                    ${categoryNames[site.category]}
                </span>
                <span class="card-rating-badge">⭐ ${site.rating}</span>
            </div>
            <div class="card-body">
                <div class="card-region">${site.region}</div>
                <h3 class="card-name">${site.name}</h3>
                <p class="card-name-en">${site.nameEn}</p>
                <p class="card-desc">${site.description}</p>
                <div class="card-tags">
                    ${site.tags.slice(0, 3).map(t => `<span class="card-tag">#${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // 카드 클릭: 상세 모달
    container.querySelectorAll('.heritage-card').forEach(card => {
        card.addEventListener('click', () => {
            const siteId = parseInt(card.dataset.siteId);
            openDetailModal(siteId);
        });
    });
}

// ══════════════════════════════
//  DETAIL MODAL
// ══════════════════════════════
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn?.addEventListener('click', () => overlay.classList.remove('active'));
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay?.classList.remove('active');
            document.getElementById('reviewModalOverlay')?.classList.remove('active');
        }
    });
}

function openDetailModal(siteId) {
    const site = HERITAGE_SITES.find(s => s.id === siteId);
    if (!site) return;

    const catNames = { palace: '궁궐', temple: '사찰', fortress: '성곽', village: '한옥마을', unesco: '유네스코' };
    const catColors = { palace: '#e17055', temple: '#00b894', fortress: '#0984e3', village: '#fdcb6e', unesco: '#a29bfe' };
    const catIcons = { palace: '🏯', temple: '🛕', fortress: '🏰', village: '🏘️', unesco: '🌍' };

    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="detail-header">
            <span class="detail-icon">${catIcons[site.category]}</span>
            <div>
                <h2 class="detail-title">${site.name}</h2>
                <p class="detail-subtitle">${site.nameEn} · ${site.region}</p>
            </div>
            <span class="detail-badge" style="background: ${catColors[site.category]}22; color: ${catColors[site.category]}; margin-left: auto;">
                ${catNames[site.category]}
            </span>
        </div>

        <div class="detail-desc">${site.history}</div>

        <div class="detail-section">
            <h3 class="detail-section-title">🌟 주요 볼거리</h3>
            <div class="detail-highlights">
                ${site.highlights.map(h => `<span class="highlight-chip">${h}</span>`).join('')}
            </div>
        </div>

        <div class="detail-section">
            <h3 class="detail-section-title">📍 방문 정보</h3>
            <div class="detail-info-grid">
                <div class="detail-info-item">
                    <div class="detail-info-label">📫 주소</div>
                    <div class="detail-info-value">${site.address}</div>
                </div>
                <div class="detail-info-item">
                    <div class="detail-info-label">⏰ 운영시간</div>
                    <div class="detail-info-value">${site.hours}</div>
                </div>
                <div class="detail-info-item">
                    <div class="detail-info-label">🚫 휴무일</div>
                    <div class="detail-info-value">${site.closedDay}</div>
                </div>
                <div class="detail-info-item">
                    <div class="detail-info-label">💰 입장료</div>
                    <div class="detail-info-value">${site.fee}</div>
                </div>
                <div class="detail-info-item">
                    <div class="detail-info-label">🚌 교통</div>
                    <div class="detail-info-value">${site.transport}</div>
                </div>
                <div class="detail-info-item">
                    <div class="detail-info-label">⭐ 평점</div>
                    <div class="detail-info-value">${site.rating} / 5.0 (${site.reviewCount.toLocaleString()}건)</div>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h3 class="detail-section-title">💡 방문 팁</h3>
            <ul class="detail-tips">
                ${site.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

// ══════════════════════════════
//  REVIEWS
// ══════════════════════════════
function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;

    let reviews = [...appState.allReviews];

    if (appState.reviewFilter === 'popular') {
        reviews.sort((a, b) => b.helpful - a.helpful);
    } else if (appState.reviewFilter === 'recent') {
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    container.innerHTML = reviews.map(review => {
        const site = HERITAGE_SITES.find(s => s.id === review.siteId);
        const siteName = site ? site.name : '알 수 없음';

        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-meta">
                        <div class="review-avatar">${review.author[0]}</div>
                        <div>
                            <div class="review-author">${review.author}</div>
                            <div class="review-site-name">${siteName}</div>
                        </div>
                    </div>
                    <div>
                        <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <h4 class="review-title">${review.title}</h4>
                <p class="review-content">${review.content}</p>
                <div class="review-footer">
                    <button class="review-helpful" data-id="${review.id}">
                        👍 도움이 됐어요 (${review.helpful})
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // 탭 필터
    document.querySelectorAll('.review-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.reviewFilter = tab.dataset.filter;
            renderReviews();
        });
    });

    // 도움돼요 버튼
    container.querySelectorAll('.review-helpful').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const review = appState.allReviews.find(r => r.id === id);
            if (review) {
                review.helpful++;
                renderReviews();
            }
        });
    });
}

// ══════════════════════════════
//  REVIEW MODAL
// ══════════════════════════════
function initReviewModal() {
    const writeBtn = document.getElementById('writeReviewBtn');
    const overlay = document.getElementById('reviewModalOverlay');
    const closeBtn = document.getElementById('reviewModalClose');
    const form = document.getElementById('reviewForm');

    writeBtn?.addEventListener('click', () => overlay.classList.add('active'));
    closeBtn?.addEventListener('click', () => overlay.classList.remove('active'));
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    // 별점
    document.querySelectorAll('#starRating .star').forEach(star => {
        star.addEventListener('click', () => {
            appState.reviewRating = parseInt(star.dataset.rating);
            document.querySelectorAll('#starRating .star').forEach((s, i) => {
                s.classList.toggle('active', i < appState.reviewRating);
            });
        });
        star.addEventListener('mouseover', () => {
            const r = parseInt(star.dataset.rating);
            document.querySelectorAll('#starRating .star').forEach((s, i) => {
                s.classList.toggle('active', i < r);
            });
        });
    });

    document.getElementById('starRating')?.addEventListener('mouseleave', () => {
        document.querySelectorAll('#starRating .star').forEach((s, i) => {
            s.classList.toggle('active', i < appState.reviewRating);
        });
    });

    // 폼 제출
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            siteId: parseInt(document.getElementById('reviewSite').value),
            author: document.getElementById('reviewAuthor').value,
            date: new Date().toISOString().split('T')[0],
            rating: appState.reviewRating || 5,
            title: document.getElementById('reviewTitle').value,
            content: document.getElementById('reviewContent').value,
            helpful: 0,
        };

        appState.allReviews.unshift(newReview);
        renderReviews();
        form.reset();
        appState.reviewRating = 0;
        document.querySelectorAll('#starRating .star').forEach(s => s.classList.remove('active'));
        overlay.classList.remove('active');
    });
}

function renderReviewSiteOptions() {
    const select = document.getElementById('reviewSite');
    if (!select) return;

    HERITAGE_SITES.forEach(site => {
        const option = document.createElement('option');
        option.value = site.id;
        option.textContent = `${site.name} (${site.region})`;
        select.appendChild(option);
    });
}

// ══════════════════════════════
//  AI ROUTE PLANNER
// ══════════════════════════════
function renderSiteCheckboxes() {
    const container = document.getElementById('siteCheckboxes');
    if (!container) return;

    container.innerHTML = HERITAGE_SITES.map(site => `
        <label class="site-checkbox" data-site-id="${site.id}">
            <input type="checkbox" value="${site.id}">
            <span>${site.name}</span>
            <span class="site-region">${site.region}</span>
        </label>
    `).join('');

    container.querySelectorAll('.site-checkbox').forEach(label => {
        const checkbox = label.querySelector('input');
        checkbox.addEventListener('change', () => {
            const id = parseInt(checkbox.value);
            if (checkbox.checked) {
                if (appState.selectedSites.length >= 5) {
                    checkbox.checked = false;
                    return;
                }
                appState.selectedSites.push(id);
            } else {
                appState.selectedSites = appState.selectedSites.filter(s => s !== id);
            }
            label.classList.toggle('selected', checkbox.checked);
        });
    });
}

function initPlannerBtn() {
    const btn = document.getElementById('generateRouteBtn');
    btn?.addEventListener('click', generateRoute);
}

async function generateRoute() {
    if (appState.selectedSites.length === 0) {
        alert('방문할 장소를 최소 1개 선택하세요.');
        return;
    }

    const sites = appState.selectedSites.map(id =>
        HERITAGE_SITES.find(s => s.id === id)
    ).filter(Boolean);

    const duration = document.getElementById('tripDuration').value;
    const transport = document.getElementById('transport').value;
    const travelers = document.getElementById('travelers').value;

    const siteNames = sites.map(s => `${s.name} (${s.region})`).join(', ');
    const siteDetails = sites.map(s =>
        `- ${s.name}: ${s.address}, 운영시간 ${s.hours}, 입장료 ${s.fee}, 교통 ${s.transport}`
    ).join('\n');

    const prompt = `다음 조건으로 한국 문화유산 탐방 루트를 설계해주세요:

## 방문 장소
${siteDetails}

## 여행 조건
- 여행 기간: ${duration}
- 이동 수단: ${transport}
- 인원: ${travelers}

## 요청사항
다음 내용을 포함하여 상세한 여행 계획서를 작성해주세요:

1. **📍 최적 방문 순서 & 일정표** (시간대별)
2. **🚌 이동 방법** (각 장소 간 교통편과 소요 시간)
3. **🎒 준비물 리스트** (계절/날씨 고려)
4. **💰 예상 비용 내역** (입장료, 교통비, 식비 등 항목별)
5. **🍽️ 주변 맛집/카페 추천** (각 유적지 근처)
6. **📸 포토 스팟 추천**
7. **⚠️ 주의사항 & 팁**

표와 마크다운 서식을 활용하여 가독성 높게 작성해주세요.`;

    // UI 상태 변경
    const btn = document.getElementById('generateRouteBtn');
    const resultEmpty = document.getElementById('resultEmpty');
    const resultLoading = document.getElementById('resultLoading');
    const resultContent = document.getElementById('resultContent');

    btn.disabled = true;
    resultEmpty.style.display = 'none';
    resultLoading.style.display = 'flex';
    resultContent.style.display = 'none';

    try {
        const response = await fetch(`${API_BASE}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: prompt,
                model: 'gpt-4o',
                session_id: 'k-culture-planner',
            }),
        });

        if (!response.ok) throw new Error(`서버 오류: ${response.status}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        let buffer = '';

        resultLoading.style.display = 'none';
        resultContent.style.display = 'block';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.startsWith('data:')) {
                    const dataStr = line.slice(5).trim();
                    if (!dataStr) continue;
                    try {
                        const data = JSON.parse(dataStr);
                        if (data.token) {
                            fullText += data.token;
                            resultContent.innerHTML = marked.parse(fullText);
                        }
                        if (data.error) {
                            resultContent.innerHTML = `<div style="color:#e17055;padding:20px;">⚠️ ${data.error}</div>`;
                        }
                    } catch (e) { /* skip parse errors */ }
                }
            }
        }

        if (fullText) {
            resultContent.innerHTML = marked.parse(fullText);
        }

    } catch (err) {
        resultLoading.style.display = 'none';
        resultContent.style.display = 'block';
        resultContent.innerHTML = `
            <div style="text-align:center; padding:40px; color:#9fa3c2;">
                <p style="font-size:2rem; margin-bottom:16px;">⚠️</p>
                <p style="margin-bottom:8px; color:#e17055;">AI 서버에 연결할 수 없습니다</p>
                <p style="font-size:0.82rem;">기획자 에이전트 서버가 실행 중인지 확인해주세요.<br>
                <code style="background:rgba(201,168,76,0.1);padding:4px 8px;border-radius:4px;">
                cd backend && python -m uvicorn main:app --reload --port 8000
                </code></p>
            </div>
        `;
    } finally {
        btn.disabled = false;
    }
}

// ══════════════════════════════
//  SCROLL ANIMATIONS
// ══════════════════════════════
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .heritage-card, .review-card, .selector-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
