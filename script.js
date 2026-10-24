/* ============================================
   DATA
   ============================================ */

// 12 themes with their colors and labels
const THEMES = [
  { id: 'dark',      label: 'Dark',      color: '#7c5cff', icon: '🌙' },
  { id: 'light',     label: 'Light',     color: '#6b46ff', icon: '☀️' },
  { id: 'pink',      label: 'Pink',      color: '#ec4899', icon: '🌸' },
  { id: 'purple',    label: 'Purple',    color: '#a855f7', icon: '💜' },
  { id: 'ocean',     label: 'Ocean',     color: '#06b6d4', icon: '🌊' },
  { id: 'sunset',    label: 'Sunset',    color: '#f97316', icon: '🌅' },
  { id: 'forest',    label: 'Forest',    color: '#10b981', icon: '🌲' },
  { id: 'cyber',     label: 'Cyber',     color: '#ff006e', icon: '⚡' },
  { id: 'coffee',    label: 'Coffee',    color: '#c8956d', icon: '☕' },
  { id: 'royal',     label: 'Royal',     color: '#d4af37', icon: '👑' },
  { id: 'mint',      label: 'Mint',      color: '#14b8a6', icon: '🍃' },
  { id: 'midnight',  label: 'Midnight',  color: '#3b82f6', icon: '🌌' },
];

/* ============================================
   EXPERIENCE (rendered as cards + detail modal)
   ============================================ */
const PROJECTS = [
  { id: 1, icon: '⚖️', image: '',
    title_en: 'Logistics & Procurement Manager', title_fa: 'مدیر لوجستیک و تدارکات',
    category_en: 'Supreme Court of Afghanistan · Oct 2026 – Present', category_fa: 'ستره محکمه افغانستان · اکتوبر ۲۰۲۶ – اکنون',
    desc_en: 'General Directorate of Security and Executive Affairs of Courts.',
    desc_fa: 'ریاست عمومی امنیت و امور اجرایی محاکم.',
    points_en: ['Optimize procurement and supply chain networks', 'Maintain precise inventory control and asset tracking', 'Ensure financial transparency and cost-efficiency', 'Streamline coordination between units'],
    points_fa: ['بهینه‌سازی شبکه تدارکات و زنجیره تأمین', 'کنترل دقیق موجودی و ثبت دارایی‌ها', 'تضمین شفافیت مالی و صرفه‌جویی در مصارف', 'تسهیل هماهنگی میان بخش‌ها'] },
  { id: 2, icon: '🗣️', image: '',
    title_en: 'Official Interpreter', title_fa: 'مترجم رسمی',
    category_en: 'Provincial Office, Sar-e Pol · Dec 2025 – 2026', category_fa: 'دفتر ولایت سرپل · دسمبر ۲۰۲۵ – ۲۰۲۶',
    desc_en: 'Interpreter and spokesperson at the Provincial Governor’s Office.',
    desc_fa: 'مترجم و سخنگوی دفتر والی ولایت سرپل.',
    points_en: ['Interpretation in Dari, Pashto, and English', 'Supporting official meetings and communications', 'Assisting coordination and reporting between departments', 'Facilitating communication with external stakeholders'],
    points_fa: ['ترجمه شفاهی و کتبی به دری، پشتو و انگلیسی', 'پشتیبانی از جلسات و مکاتبات رسمی', 'کمک به هماهنگی و گزارش‌دهی میان ریاست‌ها', 'تسهیل ارتباط با نهادها و شرکای بیرونی'] },
  { id: 3, icon: '🏗️', image: '',
    title_en: 'Chief Executive / Owner', title_fa: 'رییس اجرایی / مالک',
    category_en: 'Jam Rah Foshanj Logistics & Construction · 2024 – Present', category_fa: 'شرکت لوجستیک و ساختمانی جم راه فوشنج · ۲۰۲۴ – اکنون',
    desc_en: 'Herat, Afghanistan. Running a logistics and construction company that serves NGOs and government institutions.',
    desc_fa: 'هرات، افغانستان. مدیریت یک شرکت لوجستیک و ساختمانی که برای موسسات غیردولتی و نهادهای دولتی کار می‌کند.',
    points_en: ['Negotiated and managed contracts with NGOs and government institutions', 'Directed project planning, implementation, and progress monitoring', 'Managed staff, assigned responsibilities, and supervised performance', 'Oversaw logistics, procurement, transportation, and supply chain', 'Coordinated quotations and supplier negotiations by cost, quality, and delivery time', 'Managed business development, client relations, and contract documents'],
    points_fa: ['مذاکره و مدیریت قراردادها با موسسات غیردولتی و نهادهای دولتی', 'رهبری پلان‌گذاری، تطبیق و نظارت بر پیشرفت پروژه‌ها', 'مدیریت کارمندان، تقسیم مسوولیت‌ها و نظارت بر عملکرد', 'نظارت بر لوجستیک، تدارکات، ترانسپورت و زنجیره تأمین', 'هماهنگی قیمت‌گیری و مذاکره با تأمین‌کنندگان بر اساس قیمت، کیفیت و زمان تحویل', 'پیشبرد انکشاف تجارت، روابط با مشتریان و اسناد قراردادی'] },
  { id: 4, icon: '💼', image: '',
    title_en: 'Finance Manager', title_fa: 'مدیر مالی',
    category_en: 'Civil Affairs Organization of Afghanistan (CAO) · 2024 – 2025', category_fa: 'سازمان امور ملکی افغانستان (CAO) · ۲۰۲۴ – ۲۰۲۵',
    desc_en: 'Herat, Afghanistan. Responsible for the organization’s budgets, payroll, and financial records.',
    desc_fa: 'هرات، افغانستان. مسوول بودجه، معاشات و اسناد مالی سازمان.',
    points_en: ['Managed budgets, payroll, and financial records', 'Oversaw contract-related financial documents and expenditure tracking', 'Prepared financial offers and supported tender and bid submissions', 'Calculated taxes, prepared declarations, and coordinated tax payments', 'Prepared financial reports and monitored budget utilization', 'Kept documents in line with procedures and regulations'],
    points_fa: ['مدیریت بودجه، معاشات و اسناد مالی', 'نظارت بر اسناد مالی قراردادها و پیگیری مصارف', 'تهیه پیشنهادهای مالی و پشتیبانی از روند داوطلبی', 'محاسبه مالیات، تهیه اظهارنامه و هماهنگی پرداخت‌ها', 'تهیه گزارش‌های مالی و نظارت بر مصرف بودجه', 'نگهداری اسناد مطابق طرزالعمل‌ها و مقررات'] },
  { id: 5, icon: '📊', image: '',
    title_en: 'Finance & Administration Manager', title_fa: 'مدیر مالی و اداری',
    category_en: 'Talash Niyazi Logistics & Mehraban Sazan Road and Construction · 2022 – 2024', category_fa: 'شرکت‌های لوجستیک تلاش نیازی و سرک و ساختمانی مهربان ساز · ۲۰۲۲ – ۲۰۲۴',
    desc_en: 'Herat, Afghanistan. Finance and administration lead for two companies delivering government and NGO projects.',
    desc_fa: 'هرات، افغانستان. مسوول امور مالی و اداری دو شرکت که پروژه‌های دولتی و موسسات غیردولتی را پیش می‌برند.',
    points_en: ['Managed company budgets, capital, and financial operations', 'Prepared and managed contracts and contract documents', 'Oversaw tax calculations, declarations, and payments', 'Managed attendance records and administrative procedures', 'Supervised implementation of government and NGO projects', 'Submitted operational and financial reports to leadership', 'Coordinated procurement, resource allocation, and planning'],
    points_fa: ['مدیریت بودجه، سرمایه و عملیات مالی شرکت‌ها', 'تهیه و مدیریت قراردادها و اسناد قراردادی', 'نظارت بر محاسبه مالیات، اظهارنامه و پرداخت آن', 'مدیریت حاضری کارمندان و پروسه‌های اداری', 'نظارت بر تطبیق پروژه‌های دولتی و موسسات غیردولتی', 'ارایه گزارش‌های عملیاتی و مالی به رهبری شرکت', 'هماهنگی تدارکات، توزیع منابع و پلان‌گذاری اداری'] },
  { id: 6, icon: '🚚', image: '',
    title_en: 'Operational Officer', title_fa: 'مسوول عملیاتی',
    category_en: 'Talash Niyazi Logistics & Mehraban Sazan · 2022', category_fa: 'تلاش نیازی و مهربان ساز · ۲۰۲۲',
    desc_en: 'Herat, Afghanistan. Field and procurement work on active projects.',
    desc_fa: 'هرات، افغانستان. کار میدانی و تدارکاتی روی پروژه‌های جاری.',
    points_en: ['Monitored ongoing projects and wrote progress reports', 'Researched the market and collected supplier quotations', 'Procured goods and coordinated delivery and transport', 'Followed up administrative documents with government departments'],
    points_fa: ['نظارت بر پروژه‌های جاری و تهیه گزارش پیشرفت', 'بررسی بازار و جمع‌آوری قیمت‌ها از تأمین‌کنندگان', 'خریداری اجناس و هماهنگی تحویل و انتقال', 'پیگیری اسناد اداری در ادارات دولتی'] },
  { id: 7, icon: '💱', image: '',
    title_en: 'Accountant', title_fa: 'حسابدار',
    category_en: 'Sadat Ziaee Saraffi · 2021 – 2022', category_fa: 'صرافی سادات ضیایی · ۲۰۲۱ – ۲۰۲۲',
    desc_en: 'Herat, Afghanistan. Accounting for a money exchange business.',
    desc_fa: 'هرات، افغانستان. حسابداری یک صرافی.',
    points_en: ['Accounting system and database management', 'Tax management', 'Foreign exchange operations', 'Bank account management'],
    points_fa: ['کار با سیستم حسابداری و مدیریت بانک اطلاعاتی', 'مدیریت امور مالیاتی', 'عملیات تبادله اسعار', 'مدیریت حساب‌های بانکی'] },
  { id: 8, icon: '🎓', image: '',
    title_en: 'Instructor & Teacher', title_fa: 'آموزگار و استاد',
    category_en: 'Safi Dental Clinic · Marefat Academy · 2019 – 2021', category_fa: 'کلینیک دندان صافی · آکادمی معرفت · ۲۰۱۹ – ۲۰۲۱',
    desc_en: 'Herat, Afghanistan. Taught at Marefat Academy (2019–2021) and trained students as a dental treatment instructor at Safi Dental Clinic (2020–2021).',
    desc_fa: 'هرات، افغانستان. تدریس در آکادمی معرفت (۲۰۱۹–۲۰۲۱) و آموزش شاگردان به حیث استاد تداوی دندان در کلینیک صافی (۲۰۲۰–۲۰۲۱).',
    points_en: ['Teacher, Marefat Academy (2019–2021)', 'Dental treatment instructor, Safi Dental Clinic (2020–2021)'],
    points_fa: ['آموزگار، آکادمی معرفت (۲۰۱۹–۲۰۲۱)', 'استاد تداوی دندان، کلینیک صافی (۲۰۲۰–۲۰۲۱)'] },
];

// Translations
const i18n = {
  en: {
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services', nav_projects: 'Experience',
    nav_skills: 'Skills', nav_education: 'Education', nav_contact: 'Contact',
    hero_greeting: "Hello, I'm",
    hero_name: 'Said Khalil Sadat',
    hero_title: 'Logistics, Procurement & Finance Manager',
    hero_desc: 'I manage procurement, supply chains, budgets, and contracts for government institutions, NGOs, and private companies in Afghanistan. Accurate records, transparent spending, reliable delivery.',
    hero_cta1: 'View Experience', hero_cta2: 'Download CV',
    scroll: 'Scroll',
    about_title: 'About Me',
    about_subtitle: 'Logistics & Finance Professional based in Herat',
    about_p1: "I'm Said Khalil Sadat, a results-oriented professional in executive leadership, financial management, logistics, construction management, and procurement. I currently serve at the Supreme Court of Afghanistan, and I previously worked as Finance Manager at the Civil Affairs Organization (CAO), Executive Director of the National House of Journalists, and Interpreter and Spokesperson at the Sar-e Pul Provincial Governor’s Office.",
    about_p2: 'I also run Jam Rah Foshanj Logistics & Construction Company in Herat. I work in Dari, Pashto, and English, and I am committed to integrity, accountability, and efficient service across government, nonprofit, and private-sector settings. I am currently studying economics at university.',
    stat_projects: 'Years of Experience', stat_categories: 'Professional Roles', stat_certs: 'Languages',
    services_title: 'What I Do',
    service1_title: 'Logistics & Procurement',
    service1_desc: 'Supplier sourcing, RFQs, quotation comparison, purchase orders, delivery coordination, and inventory control.',
    service2_title: 'Financial Management',
    service2_desc: 'Budgets, payroll, cash flow records, bank reconciliation, and financial statements you can audit.',
    service3_title: 'Tax & Reporting',
    service3_desc: 'Tax calculation, electronic declarations through the Ministry of Finance system, and clear financial reports.',
    service4_title: 'Contracts & Administration',
    service4_desc: 'Tender documents, contract files, staff records, official correspondence, and document management.',
    service5_title: 'Interpretation',
    service5_desc: 'Professional interpretation between Dari, Pashto, and English for meetings and official communication.',
    service6_title: 'Project & Business Management',
    service6_desc: 'Planning, staffing, supervision, and progress monitoring for construction and logistics projects.',
    projects_title: 'Career Experience',
    projects_subtitle: 'Click any role to see details',
    skills_title: 'Skills & Tools',
    skill_cat1: 'Management & Leadership', skill_cat2: 'Finance & Accounting', skill_cat3: 'Logistics & Procurement',
    skill_cat4: 'Administration & Reporting', skill_cat5: 'Communication & Languages', skill_cat6: 'Computer Skills',
    edu_title: 'Education',
    edu1_title: 'Bachelor’s Student, Economics',
    edu1_desc: 'National Enterprise Economy Asia University, Herat. 2024 – present. Economic principles, business management, budgeting, and resource allocation.',
    edu2_title: 'Associate Degree, Dental Prosthesis',
    edu2_desc: 'Atefi Institute of Health Sciences. 2021 – 2023. Laboratory-based technical procedures, precision, and quality control.',
    edu3_title: 'High School Diploma',
    edu3_desc: 'Pyam-e Danish Private High School. 2021. Graduated with an overall average of 90%.',
    contact_title: "Let's Connect",
    contact_intro: 'For procurement, finance, or interpretation work, reach out by phone, email, or LinkedIn.',
    contact_phone: 'Phone', contact_email: 'Email', contact_email2: 'Email', contact_linkedin: 'LinkedIn',
    contact_telegram: 'Telegram', contact_instagram: 'Instagram', contact_whatsapp: 'WhatsApp', contact_twitter: 'Twitter / X',
    contact_location: 'Location', contact_loc_val: 'Herat, Afghanistan',
    footer_name: 'Said Khalil Sadat', footer_rights: 'All rights reserved.',
    modal_demo: 'Live Demo', modal_source: 'Source Code', modal_github: 'GitHub',
    modal_tech: 'Key Responsibilities', modal_repo: 'View on GitHub',
  },
  fa: {
    nav_home: 'خانه', nav_about: 'درباره من', nav_services: 'خدمات', nav_projects: 'سوابق کاری',
    nav_skills: 'مهارت‌ها', nav_education: 'تحصیلات', nav_contact: 'تماس',
    hero_greeting: 'سلام، من',
    hero_name: 'سید خلیل سادات',
    hero_title: 'مدیر لوجستیک، تدارکات و امور مالی',
    hero_desc: 'من تدارکات، زنجیره تأمین، بودجه و قراردادها را برای نهادهای دولتی، موسسات غیردولتی و شرکت‌های خصوصی در افغانستان مدیریت می‌کنم. اسناد دقیق، مصارف شفاف، تحویل مطمئن.',
    hero_cta1: 'سوابق کاری', hero_cta2: 'دانلود سی‌وی',
    scroll: 'اسکرول',
    about_title: 'درباره من',
    about_subtitle: 'متخصص لوجستیک و امور مالی در هرات',
    about_p1: 'من سید خلیل سادات هستم؛ متخصص نتیجه‌محور در رهبری اجرایی، مدیریت مالی، لوجستیک، مدیریت ساختمانی و تدارکات. اکنون در ستره محکمه افغانستان کار می‌کنم و پیش از آن مدیر مالی سازمان امور ملکی (CAO)، رییس اجرایی خانه ملی خبرنگاران، و مترجم و سخنگوی دفتر والی ولایت سرپل بوده‌ام.',
    about_p2: 'همچنین شرکت لوجستیک و ساختمانی جم راه فوشنج را در هرات رهبری می‌کنم. به دری، پشتو و انگلیسی کار می‌کنم و در نهادهای دولتی، غیرانتفاعی و خصوصی به صداقت، پاسخگویی و ارایه خدمات کارآمد متعهد هستم. اکنون در رشته اقتصاد درس می‌خوانم.',
    stat_projects: 'سال تجربه', stat_categories: 'سمت کاری', stat_certs: 'زبان',
    services_title: 'چه کارهایی می‌کنم',
    service1_title: 'لوجستیک و تدارکات',
    service1_desc: 'یافتن تأمین‌کننده، درخواست قیمت، مقایسه پیشنهادها، سفارش خرید، هماهنگی تحویل و کنترل موجودی.',
    service2_title: 'مدیریت مالی',
    service2_desc: 'بودجه، معاشات، سوابق جریان نقدی، تطبیق حساب بانکی و صورت‌حساب‌های قابل بررسی.',
    service3_title: 'مالیات و گزارش‌دهی',
    service3_desc: 'محاسبه مالیات، ارسال الکترونیکی اظهارنامه در سیستم وزارت مالیه و گزارش‌های مالی روشن.',
    service4_title: 'قرارداد و امور اداری',
    service4_desc: 'اسناد داوطلبی، فایل‌های قرارداد، سوابق کارمندان، مکاتبات رسمی و مدیریت اسناد.',
    service5_title: 'ترجمه شفاهی',
    service5_desc: 'ترجمه حرفه‌ای میان دری، پشتو و انگلیسی برای جلسات و ارتباطات رسمی.',
    service6_title: 'مدیریت پروژه و تجارت',
    service6_desc: 'پلان‌گذاری، استخدام، نظارت و پیگیری پیشرفت پروژه‌های ساختمانی و لوجستیکی.',
    projects_title: 'سوابق کاری',
    projects_subtitle: 'روی هر سمت کلیک کنید',
    skills_title: 'مهارت‌ها و ابزارها',
    skill_cat1: 'مدیریت و رهبری', skill_cat2: 'مالی و حسابداری', skill_cat3: 'لوجستیک و تدارکات',
    skill_cat4: 'امور اداری و گزارش‌دهی', skill_cat5: 'ارتباطات و زبان‌ها', skill_cat6: 'مهارت‌های کمپیوتری',
    edu_title: 'تحصیلات',
    edu1_title: 'محصل لیسانس، اقتصاد',
    edu1_desc: 'پوهنتون اقتصاد و تجارت آسیا (National Enterprise Economy Asia)، هرات. ۲۰۲۴ – اکنون. اصول اقتصاد، مدیریت تجارت، بودجه‌بندی و توزیع منابع.',
    edu2_title: 'دیپلوم (دوره دو ساله)، پروتز دندان',
    edu2_desc: 'انستیتوت علوم صحی عاطفی. ۲۰۲۱ – ۲۰۲۳. کارهای فنی لابراتوار، دقت و کنترل کیفیت.',
    edu3_title: 'دیپلوم لیسه',
    edu3_desc: 'لیسه خصوصی پیام دانش. ۲۰۲۱. فراغت با اوسط ۹۰ فیصد.',
    contact_title: 'بیایید ارتباط بگیریم',
    contact_intro: 'برای کارهای تدارکات، مالی یا ترجمه، از طریق تلفون، ایمیل یا لینکدین با من در تماس شوید.',
    contact_phone: 'تلفون', contact_email: 'ایمیل', contact_email2: 'ایمیل', contact_linkedin: 'لینکدین',
    contact_telegram: 'تلگرام', contact_instagram: 'اینستاگرام', contact_whatsapp: 'واتساپ', contact_twitter: 'توییتر / X',
    contact_location: 'محل', contact_loc_val: 'هرات، افغانستان',
    footer_name: 'سید خلیل سادات', footer_rights: 'تمامی حقوق محفوظ است.',
    modal_demo: 'دمو زنده', modal_source: 'کد منبع', modal_github: 'گیت‌هاب',
    modal_tech: 'مسوولیت‌های اصلی', modal_repo: 'مشاهده در گیت‌هاب',
  },
};

/* ============================================
   STATE
   ============================================ */
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'midnight';

// Apply persisted settings immediately to avoid FOUC
if (localStorage.getItem('lang')) {
  currentLang = localStorage.getItem('lang');
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'fa' ? 'rtl' : 'ltr');
}
if (localStorage.getItem('theme')) {
  currentTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', currentTheme);
}

/* ============================================
   THEME PICKER
   ============================================ */
function initThemePicker() {
  const themeOptions = document.getElementById('themeOptions');
  const themeLabel = document.getElementById('themeLabel');
  const themePicker = document.getElementById('themePicker');
  const themeToggle = document.getElementById('themeToggle');

  const totalThemes = THEMES.length;
  const isRTL = document.documentElement.dir === 'rtl';

  THEMES.forEach((theme, i) => {
    const dot = document.createElement('div');
    dot.className = 'theme-dot';
    dot.dataset.theme = theme.id;
    dot.style.background = theme.color;
    dot.title = theme.label;

    const angle = isRTL
      ? (i / (totalThemes - 1)) * Math.PI
      : Math.PI - (i / (totalThemes - 1)) * Math.PI;
    const radius = 130;
    const x = Math.cos(angle) * radius + 150 - 18;
    const y = -Math.sin(angle) * radius + 150 - 18;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      setTheme(theme.id);
      updateActiveDot();
      setTimeout(() => {
        themePicker.classList.remove('open');
      }, 400);
    });

    dot.addEventListener('mouseenter', () => {
      themeLabel.textContent = theme.label;
    });

    themeOptions.appendChild(dot);
  });

  themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    themePicker.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-picker-wrapper')) {
      themePicker.classList.remove('open');
    }
  });

  updateActiveDot();
}

function updateActiveDot() {
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.theme === currentTheme);
  });
  const theme = THEMES.find(t => t.id === currentTheme);
  const label = document.getElementById('themeLabel');
  if (label && theme) label.textContent = theme.label;
}

function rebuildThemePicker() {
  const themeOptions = document.getElementById('themeOptions');
  const isRTL = document.documentElement.dir === 'rtl';
  const totalThemes = THEMES.length;
  themeOptions.innerHTML = '';

  THEMES.forEach((theme, i) => {
    const dot = document.createElement('div');
    dot.className = 'theme-dot';
    dot.dataset.theme = theme.id;
    dot.style.background = theme.color;
    dot.title = theme.label;

    const angle = isRTL
      ? (i / (totalThemes - 1)) * Math.PI
      : Math.PI - (i / (totalThemes - 1)) * Math.PI;
    const radius = 130;
    const x = Math.cos(angle) * radius + 150 - 18;
    const y = -Math.sin(angle) * radius + 150 - 18;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      setTheme(theme.id);
      updateActiveDot();
      setTimeout(() => {
        document.getElementById('themePicker').classList.remove('open');
      }, 400);
    });

    dot.addEventListener('mouseenter', () => {
      document.getElementById('themeLabel').textContent = theme.label;
    });

    themeOptions.appendChild(dot);
  });
  updateActiveDot();
}

function setTheme(themeId) {
  currentTheme = themeId;
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('theme', themeId);
}

/* ============================================
   LANGUAGE SWITCH
   ============================================ */
function initLanguage() {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', toggleLanguage);
  applyLanguage();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'fa' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });

  const langActive = document.querySelector('.lang-active');
  const langInactive = document.querySelector('.lang-inactive');
  if (langActive && langInactive) {
    if (currentLang === 'en') {
      langActive.textContent = 'EN';
      langInactive.textContent = 'FA';
    } else {
      langActive.textContent = 'FA';
      langInactive.textContent = 'EN';
    }
  }

  renderProjects();
  // Only rebuild theme picker if it exists on this page
  if (document.getElementById('themeOptions')) {
    rebuildThemePicker();
  }
}

/* ============================================
   PROJECTS
   ============================================ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = project.id;

    const hasImage = Boolean(project.image);
    const visual = hasImage
      ? `<img
           class="project-thumb-img"
           src="${project.image}"
           alt="${currentLang === 'en' ? project.title_en : project.title_fa}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
         />
         <div class="project-thumb-icon" style="display:none;">${project.icon}</div>`
      : `<div class="project-thumb-icon">${project.icon}</div>`;

    card.innerHTML = `
      <div class="project-overlay">
        <div class="project-category">${currentLang === 'en' ? project.category_en : project.category_fa}</div>
        <div class="project-title">${currentLang === 'en' ? project.title_en : project.title_fa}</div>
      </div>
      <div class="project-view">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(project));
    grid.appendChild(card);
  });
}

/* ============================================
   MODAL
   ============================================ */
function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;
  const t = i18n[currentLang];

  const hasImage = Boolean(project.image);
  const modalHero = ''; const _unused = hasImage
    ? `<div class="modal-hero">
         <img
           class="modal-hero-img"
           src="${project.image}"
           alt="${currentLang === 'en' ? project.title_en : project.title_fa}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
         />
         <div class="modal-hero-icon" style="display:none;">${project.icon}</div>
       </div>`
    : `<div class="modal-hero"><div class="modal-hero-icon">${project.icon}</div></div>`;

  // Build action buttons: hide demo button if demo is '#', hide github button if github is '#'
  const showDemo = project.demo && project.demo !== '#';
  const showGh = project.github && project.github !== '#';

  const actions = [];
  if (showGh) {
    actions.push(`
      <a href="${project.github}" class="btn btn-github" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:6px;">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        ${t.modal_repo}
      </a>
    `);
  }
  if (showDemo) {
    actions.push(`
      <a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener">${t.modal_demo}</a>
    `);
  }

  modalBody.innerHTML = `
    ${modalHero}
    <div class="modal-category">${currentLang === 'en' ? project.category_en : project.category_fa}</div>
    <h2 class="modal-title">${currentLang === 'en' ? project.title_en : project.title_fa}</h2>
    <p class="modal-description">${currentLang === 'en' ? project.desc_en : project.desc_fa}</p>
    <div class="modal-section-title">${t.modal_tech}</div>
    <ul class="modal-list">
      ${(currentLang === 'en' ? project.points_en : project.points_fa).map(p => `<li>${p}</li>`).join('')}
    </ul>
    ${actions.length ? `<div class="modal-actions">${actions.join('')}</div>` : ''}
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const close = document.getElementById('modalClose');
  const backdrop = document.getElementById('modalBackdrop');
  if (close) close.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ============================================
   SMOOTH SCROLL & ACTIVE NAV
   ============================================ */
function initScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return; // external page link
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
              link.classList.toggle('active', href === `#${id}`);
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ============================================
   FADE-IN ANIMATIONS
   ============================================ */
function initAnimations() {
  const elements = document.querySelectorAll('.section');
  if (!elements.length) return;

  let scrolled = false;
  const onScroll = () => {
    const isScrolled = window.scrollY > 100;
    if (isScrolled !== scrolled) {
      scrolled = isScrolled;
      document.body.classList.toggle('scrolled', scrolled);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // These only run on index.html
  if (document.getElementById('themeOptions')) initThemePicker();
  if (document.getElementById('langToggle')) initLanguage();
  if (document.getElementById('projectsGrid')) renderProjects();
  if (document.getElementById('projectModal')) initModal();
  if (document.querySelector('.section')) {
    initScroll();
    initAnimations();
  }
});
