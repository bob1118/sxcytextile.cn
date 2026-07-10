const translations = {
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
    home: {
      tagline: 'Professional textile export trade for Central Asia, West Asia, Middle East and Africa',
      title: 'Your trusted partner for global textile export',
      description: 'We specialize in exporting apparel fabric, home textiles, accessories and yarn, delivering quality products to international markets.',
      slide1Alt: 'Textile factory overview',
      slide2Alt: 'Fabric shipment preparation',
      slide3Alt: 'Global textile trade logistics'
    },
    products: {
      label: 'Product display',
      title: 'Our main product categories',
      category1: {
        title: 'Apparel Fabrics',
        description: 'High-quality apparel fabrics for jackets, casual wear, and fashion garments.',
        items: {
          f1: 'Polyester Fabric',
          f1Sub: 'High-quality polyester, wear-resistant',
          f2: 'Blended Fabric',
          f2Sub: 'Cotton-polyester blend, comfortable & durable',
          f3: 'Printed Fabric',
          f3Sub: 'Fashion prints, vibrant colors'
        }
      },
      category2: {
        title: 'Home Textile Fabrics',
        description: 'Premium home textile fabrics for bedding, curtains, and upholstery.',
        items: {
          t1: 'Curtain Fabric',
          t1Sub: 'Light-blocking, excellent drape',
          t2: 'Upholstery Fabric',
          t2Sub: 'Abrasion-resistant, soft touch',
          t3: 'Bedding Fabric',
          t3Sub: 'Skin-friendly, breathable & cozy'
        }
      },
      category3: {
        title: 'Shoes',
        description: 'Fashion shoes and footwear materials, perfectly matched with textile products.',
        items: {
          s1: 'Sports Shoes',
          s1Sub: 'Lightweight & breathable',
          s2: 'Casual Shoes',
          s2Sub: 'Versatile style for daily wear',
          s3: 'Knitted Slippers',
          s3Sub: 'Cozy knitted, soft & warm'
        }
      }
    },
    about: {
      label: 'Company profile',
      title: 'Our vision and goals',
      vision: 'Our vision is to become the most trusted textile trading partner in Central Asia, West Asia, the Middle East and Africa, offering stable quality and reliable supply chains.',
      mission: 'Our mission is to provide excellent apparel fabric, home textile and accessory solutions through integrity, professionalism and agile service.',
      feature1Title: 'Stable Quality',
      feature1Desc: 'Strict QC system, international standards',
      feature2Title: 'Flexible Supply Chain',
      feature2Desc: 'Quick response, on-time delivery',
      feature3Title: 'Integrity Service',
      feature3Desc: 'Professional team, full follow-up',
      feature4Title: 'Global Logistics',
      feature4Desc: 'Covering Central Asia, Middle East, Africa'
    },
    contact: {
      label: 'Contact us',
      title: 'Request quotes and cooperation',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  zh: {
    nav: { home: '首页', products: '产品', about: '关于', contact: '联系' },
    home: {
      tagline: '专业纺织品出口贸易，服务中亚、西亚、中东与非洲市场',
      title: '连接全球纺织贸易的桥梁',
      description: '我们致力于服装面料、家纺、辅料与纱线出口，为全球客户提供稳定、优质的纺织供应链解决方案。',
      slide1Alt: '纺织工厂概览',
      slide2Alt: '面料装运准备',
      slide3Alt: '全球纺织贸易物流'
    },
    products: {
      label: '产品展示',
      title: '我们的主营产品',
      category1: {
        title: '服装面料',
        description: '高品质服装面料，适用于男女装、外套与休闲服饰。',
        items: {
          f1: '涤纶面料',
          f1Sub: '高品质涤纶，耐磨抗皱',
          f2: '混纺面料',
          f2Sub: '棉涤混纺，舒适耐用',
          f3: '印花面料',
          f3Sub: '时尚印花，色彩鲜艳'
        }
      },
      category2: {
        title: '家纺面料',
        description: '精致家纺面料，适用于床品、窗帘、沙发布料等。',
        items: {
          t1: '窗帘面料',
          t1Sub: '遮光隔热，垂感优越',
          t2: '沙发布料',
          t2Sub: '耐磨防污，触感细腻',
          t3: '床上用品面料',
          t3Sub: '亲肤柔软，透气舒适'
        }
      },
      category3: {
        title: '鞋子',
        description: '时尚鞋类与鞋材，与纺织面料完美搭配。',
        items: {
          s1: '运动鞋',
          s1Sub: '轻便透气，运动舒适',
          s2: '休闲鞋',
          s2Sub: '百搭款式，日常出行',
          s3: '针织拖鞋',
          s3Sub: '舒适针织，柔软保暖'
        }
      }
    },
    about: {
      label: '公司简介',
      title: '我们的愿景与目标',
      vision: '我们的愿景是成为中亚、西亚、中东、非洲市场上最值得信赖的纺织品贸易伙伴，凭借灵活供应链与稳定品质，为客户创造长期价值。',
      mission: '我们的目标是为全球客户提供卓越的服装面料、家纺和辅料解决方案，以诚信、专业和敏捷服务推动合作共赢。',
      feature1Title: '稳定品质',
      feature1Desc: '严格质检体系，国际标准',
      feature2Title: '灵活供应链',
      feature2Desc: '快速响应，准时交付',
      feature3Title: '诚信服务',
      feature3Desc: '专业团队，全程跟进',
      feature4Title: '全球物流',
      feature4Desc: '覆盖中亚、中东、非洲'
    },
    contact: {
      label: '联系我们',
      title: '获取报价与合作',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      addressLabel: '地址'
    },
    footer: {
      rights: '版权所有。'
    }
  }
};

let currentLanguage = 'zh';
const langToggle = document.getElementById('langToggle');

function updateLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
  const bundle = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = key.split('.').reduce((obj, part) => obj && obj[part], bundle);
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const key = element.dataset.i18nAlt;
    const value = key.split('.').reduce((obj, part) => obj && obj[part], bundle);
    if (value) element.setAttribute('aria-label', value);
  });
  // Toggle language-specific inline elements
  document.querySelectorAll('.lang-zh').forEach((el) => {
    el.style.display = lang === 'zh' ? '' : 'none';
  });
  document.querySelectorAll('.lang-en').forEach((el) => {
    el.style.display = lang === 'zh' ? 'none' : '';
  });

  // Strictly set document title according to language
  document.title =
    lang === 'zh'
      ? '绍兴成跃纺织品有限公司'
      : 'SHAOXING CHENGYUE TEXTILE CO., LTD';

  langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
}

function detectDefaultLanguage() {
  const locale = navigator.language || navigator.userLanguage || 'en';
  return locale.startsWith('zh') ? 'zh' : 'en';
}

function initLanguage() {
  const lang = detectDefaultLanguage();
  updateLanguage(lang);
}

langToggle.addEventListener('click', () => {
  const nextLang = currentLanguage === 'zh' ? 'en' : 'zh';
  updateLanguage(nextLang);
});

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 5000);
}

function setFooterYear() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCarousel();
  setFooterYear();
  initLightbox();
  initScrollReveal();
  initNavScroll();
  initMobileMenu();
  initBackToTop();
});

/* ---------- Lightbox ---------- */

const galleries = {
  fabric: {
    images: ['assets/fabric/1.jpg', 'assets/fabric/2.jpg', 'assets/fabric/3.jpg']
  },
  textile: {
    images: ['assets/textile/1.jpg', 'assets/textile/2.jpg', 'assets/textile/3.jpg']
  },
  shoes: {
    images: ['assets/shoes/1.jpg', 'assets/shoes/2.jpg', 'assets/shoes/3.jpg']
  }
};

const lbState = { images: [], current: 0 };

function initLightbox() {
  const container = document.createElement('div');
  container.className = 'lightbox';
  container.id = 'lightbox';
  container.innerHTML = `
    <div class="lightbox-overlay"></div>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-btn lightbox-prev" aria-label="Previous">&lsaquo;</button>
    <button class="lightbox-btn lightbox-next" aria-label="Next">&rsaquo;</button>
    <div class="lightbox-inner">
      <div class="lightbox-image-wrapper">
        <div class="lightbox-spinner"></div>
        <img src="" alt="" />
      </div>
    </div>
    <div class="lightbox-bottom">
      <div class="lightbox-thumbnails"></div>
      <div class="lightbox-counter">1 / 1</div>
    </div>
  `;
  document.body.appendChild(container);

  const overlay = container.querySelector('.lightbox-overlay');
  const closeBtn = container.querySelector('.lightbox-close');
  const prevBtn = container.querySelector('.lightbox-prev');
  const nextBtn = container.querySelector('.lightbox-next');
  const imgWrapper = container.querySelector('.lightbox-image-wrapper');
  const imgEl = container.querySelector('.lightbox-image-wrapper img');
  const spinner = container.querySelector('.lightbox-spinner');
  const counterEl = container.querySelector('.lightbox-counter');
  const thumbsEl = container.querySelector('.lightbox-thumbnails');

  let transitioning = false;

  function open(galleryKey, index) {
    const gallery = galleries[galleryKey];
    if (!gallery) return;
    lbState.images = gallery.images;
    lbState.current = index;
    loadImage(index);
    renderThumbs();
    container.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    container.classList.remove('open');
    document.body.style.overflow = '';
  }

  function loadImage(index) {
    const src = lbState.images[index];
    imgEl.classList.remove('loaded', 'slide-in', 'slide-out');
    imgEl.src = '';
    spinner.style.display = '';

    const img = new Image();
    img.onload = () => {
      imgEl.src = src;
      imgEl.classList.add('slide-in');
      spinner.style.display = 'none';
    };
    img.onerror = () => {
      imgEl.src = src;
      imgEl.classList.add('loaded');
      spinner.style.display = 'none';
    };
    img.src = src;

    counterEl.textContent = `${index + 1} / ${lbState.images.length}`;
    updateThumbs(index);
    updateNav();
  }

  function renderThumbs() {
    thumbsEl.innerHTML = '';
    lbState.images.forEach((thumbSrc, i) => {
      const thumb = document.createElement('img');
      thumb.src = thumbSrc;
      thumb.alt = '';
      if (i === lbState.current) thumb.classList.add('active');
      thumb.addEventListener('click', () => { goTo(i); });
      thumbsEl.appendChild(thumb);
    });
  }

  function updateThumbs(index) {
    thumbsEl.querySelectorAll('img').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    const activeThumb = thumbsEl.children[index];
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  function updateNav() {
    const show = lbState.images.length > 1;
    prevBtn.style.display = show ? '' : 'none';
    nextBtn.style.display = show ? '' : 'none';
    thumbsEl.style.display = show ? '' : 'none';
  }

  function goTo(index) {
    if (transitioning) return;
    if (index < 0) index = lbState.images.length - 1;
    if (index >= lbState.images.length) index = 0;
    if (index === lbState.current) return;

    transitioning = true;
    imgEl.classList.add('slide-out');
    setTimeout(() => {
      lbState.current = index;
      loadImage(index);
      imgEl.classList.remove('slide-out');
      transitioning = false;
    }, 250);
  }

  function next() { goTo(lbState.current + 1); }
  function prev() { goTo(lbState.current - 1); }

  // Click cards to open
  document.querySelectorAll('.product-card-image').forEach((el) => {
    el.addEventListener('click', () => {
      const card = el.closest('.product-card');
      const galleryKey = card.dataset.gallery;
      const index = parseInt(card.dataset.index, 10);
      open(galleryKey, index);
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!container.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Touch swipe
  let touchStartX = 0;
  imgWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  imgWrapper.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prev();
      else next();
    }
  }, { passive: true });
}

/* ---------- Scroll reveal ---------- */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ---------- Nav scroll ---------- */

function initNavScroll() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.site-nav a');
  const sections = document.querySelectorAll('section[id]');

  let ticking = false;

  function onScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 80);

    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) current = sec.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  onScroll();
}

/* ---------- Mobile menu ---------- */

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
}

/* ---------- Back to top ---------- */

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
