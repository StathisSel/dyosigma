/* ===== DYO SIGMA — main.js ===== */

// ─── Language System ──────────────────────────────────
const translations = {
  el: {
    nav_home: "Αρχική",
    nav_services: "Υπηρεσίες",
    nav_about: "Σχετικά",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_pricing: "Τιμές",
    nav_contact: "Επικοινωνία",
    nav_cta: "Επικοινωνία",

    // Hero
    hero_badge: "Τώρα με AI-powered λειτουργίες",
    hero_h1: "Αξίζεις παραπάνω από <em>μια ιστοσελίδα</em>",
    hero_p: "Απέκτησε ολοκληρωμένη ψηφιακή υποδομή, ώστε όλα να δουλεύουν μαζί και να φέρνουν πωλήσεις για εσένα.",
    hero_cta1: "Επικοινωνία",
    hero_cta2: "Περισσότερα",
    hero_stat1_num: "22+",
    hero_stat1_lbl: "Projects",
    hero_stat2_num: "10+",
    hero_stat2_lbl: "Πελάτες",
    hero_stat3_num: "24/7",
    hero_stat3_lbl: "Support",
    trusted_label: "Μας εμπιστεύονται",

    // Services
    services_label: "Features",
    services_h2: "Τί προσφέρουμε",
    services_sub: "Δεν βάζουμε απλά «μπαλώματα». Δημιουργούμε συστήματα και ευθυγραμμίζουμε τα digital assets σου.",
    svc1_title: "WordPress Website",
    svc1_desc: "Σχεδιασμένο για μετατροπές (conversions) και δομημένο για μελλοντική ανάπτυξη.",
    svc2_title: "Logo & Brand Guide",
    svc2_desc: "Απόλυτος έλεγχος του brand σου και ενιαία εικόνα σε κάθε πλατφόρμα.",
    svc3_title: "Social Media Setup",
    svc3_desc: "Επαληθευμένο, συνδεδεμένο και έτοιμο να λειτουργήσει.",
    svc4_title: "Ad Account Setup",
    svc4_desc: "Επαληθευμένο, συνδεδεμένο και έτοιμο να λειτουργήσει.",
    svc5_title: "Google Tools Setup",
    svc5_desc: "Analytics, Tag Manager, Search Console & Pixel Tracking — όλα σωστά ρυθμισμένα.",
    svc6_title: "CRM (Optional)",
    svc6_desc: "Το CRM συνδέει το website σου, τα leads, το email και τις πωλήσεις σε ένα σύστημα.",

    // Why
    why_label: "Γιατί εμείς",
    why_h2: "Γιατί μας διαλέγουν οι επιχειρήσεις",
    why_sub: "Χτίζουμε ολοκληρωμένη ψηφιακή υποδομή που μετατρέπει επισκέπτες σε πελάτες.",
    why_f1: "Στρατηγική προσέγγιση, όχι αποσπασματικές λύσεις",
    why_f2: "Websites σχεδιασμένα για conversions",
    why_f3: "Όλα τα εργαλεία συνδεδεμένα σε ένα σύστημα",
    why_f4: "Data tracking & analytics από την πρώτη μέρα",
    why_n1_num: "10+",
    why_n1_lbl: "Πελάτες",
    why_n2_num: "22+",
    why_n2_lbl: "Projects",
    why_n3_num: "99.9%",
    why_n3_lbl: "Availability",
    why_n4_num: "24/7",
    why_n4_lbl: "Support",

    // Pricing
    pricing_label: "ΤΙΜΕΣ",
    pricing_h2: "Διάλεξε το πακέτο σου",
    pricing_sub: "Ευέλικτες τιμές που σου ταιριάζουν",
    popular: "Most Popular",
    p1_name: "Starter",
    p1_price: "89",
    p1_period: "/μήνα",
    p2_name: "Standard Plan",
    p2_price: "149",
    p2_period: "/μήνα",
    p3_name: "Pro Plan",
    p3_price: "397",
    p3_period: "/μήνα",
    pricing_cta: "Επικοινωνήστε",

    // Testimonials
    testi_label: "Τι λένε οι πελάτες μας",
    testi_h2: "Επιδιώκουμε την αριστεία.",
    testi_sub: "Είσαι η επόμενη ιστορία επιτυχίας μας;",
    t1_body: "Συστήνω ανεπιφύλακτα τις υπηρεσίες του Στάθη. Διακρίνεται για την άψογη επαγγελματική του στάση και προσφέρει ουσιαστική γνώση.",
    t1_name: "Κώστας Τ.",
    t1_role: "Εστίαση",
    t2_body: "Το website ξεπέρασε κάθε προσδοκία. Ο επαγγελματισμός, η προσοχή στη λεπτομέρεια και η δέσμευση στην ποιότητα ήταν εξαιρετικά.",
    t2_name: "Κατερίνα Μ.",
    t2_role: "Ελεύθερος επαγγελματίας",
    t3_body: "Συνεργάζομαι με τον Στάθη πάνω από τέσσερα χρόνια. Κάθε φορά επιβεβαιώνεται η ακρίβεια και η αξιοπιστία του.",
    t3_name: "Γιώργος Σ.",
    t3_role: "Real Estate",

    // FAQ
    faq_label: "FAQ",
    faq_h2: "Συχνές ερωτήσεις",
    faq_sub: "Είμαστε στη διάθεσή σας να απαντήσουμε στις απορίες σας.",
    faq1_q: "Τι ακριβώς περιλαμβάνει η υπηρεσία;",
    faq1_a: "Η υπηρεσία περιλαμβάνει την πλήρη δημιουργία και οργάνωση της ψηφιακής σου υποδομής — website, CRM, automations, tracking και εργαλεία marketing — όλα συνδεδεμένα σε ένα ενιαίο σύστημα.",
    faq2_q: "Είναι κατάλληλο για τη δική μου επιχείρηση;",
    faq2_a: "Ναι, αν θέλεις να αποκτήσεις περισσότερους πελάτες, να οργανώσεις τα leads σου και να έχεις καλύτερο έλεγχο των πωλήσεων σου. Προσαρμόζουμε τη λύση στις ανάγκες σου.",
    faq3_q: "Πόσος χρόνος χρειάζεται για να στηθεί;",
    faq3_a: "Συνήθως η βασική εγκατάσταση ολοκληρώνεται μέσα σε 7–14 ημέρες, ανάλογα με την πολυπλοκότητα του project.",
    faq4_q: "Χρειάζεται να έχω τεχνικές γνώσεις;",
    faq4_a: "Όχι. Στήνουμε τα πάντα για εσένα και σου παρέχουμε καθοδήγηση ώστε να χρησιμοποιείς το σύστημα εύκολα από την πρώτη μέρα.",
    faq5_q: "Τι γίνεται μετά την ολοκλήρωση;",
    faq5_a: "Το σύστημα παραμένει πλήρως λειτουργικό και μπορείς να το χρησιμοποιείς καθημερινά. Παρέχουμε επίσης υποστήριξη και δυνατότητα επέκτασης καθώς μεγαλώνει η επιχείρησή σου.",

    // Contact
    contact_label: "Επικοινωνία",
    contact_h2: "Επικοινωνήστε μαζί μας",
    contact_sub: "Πατήστε το παρακάτω κουμπί για να δηλώσετε ενδιαφέρον ή συμπληρώστε τη φόρμα.",
    contact_email_label: "Email",
    contact_form_name: "Ονοματεπώνυμο",
    contact_form_email: "Email",
    contact_form_phone: "Τηλέφωνο (προαιρετικό)",
    contact_form_service: "Υπηρεσία",
    contact_form_service_placeholder: "Επιλέξτε υπηρεσία...",
    contact_form_msg: "Μήνυμα",
    contact_form_submit: "Αποστολή →",
    contact_success: "✓ Το μήνυμά σας εστάλη επιτυχώς! Θα επικοινωνήσουμε σύντομα.",
    contact_error: "Σφάλμα. Παρακαλώ δοκιμάστε ξανά.",
    svc_opt1: "WordPress Website",
    svc_opt2: "Logo & Brand Guide",
    svc_opt3: "Social Media Setup",
    svc_opt4: "Ad Account Setup",
    svc_opt5: "Google Tools Setup",
    svc_opt6: "CRM",
    svc_opt7: "Άλλο",

    // Footer
    footer_tagline: "Παρέχουμε σύγχρονες λύσεις τεχνολογίας, ανάπτυξης ιστοσελίδων και ψηφιακών υπηρεσιών.",
    footer_services_h: "Υπηρεσίες",
    footer_company_h: "Εταιρεία",
    footer_solutions_h: "Λύσεις",
    footer_copyright: "© 2026 Dyo Sigma. All rights reserved.",
    footer_s1: "Κατασκευή Ιστοσελίδων",
    footer_s2: "Ανάπτυξη Web Εφαρμογών",
    footer_s3: "SEO & Digital Marketing",
    footer_s4: "Τεχνική Υποστήριξη",
    footer_c1: "Σχετικά με εμάς",
    footer_c2: "Portfolio",
    footer_c3: "Blog",
    footer_c4: "Επικοινωνία",
    footer_l1: "Custom Software",
    footer_l2: "E-commerce Solutions",
    footer_l3: "IT Consulting",
    footer_l4: "System Integration",

    // About page
    about_label: "Σχετικά",
    about_h1: "Χτίζουμε ψηφιακή υποδομή",
    about_p: "Είμαστε μια ομάδα που πιστεύει ότι κάθε επιχείρηση αξίζει ψηφιακά εργαλεία που πραγματικά δουλεύουν.",
    about_mission_h: "Η αποστολή μας",
    about_mission_p: "Βοηθάμε επιχειρήσεις να αναπτυχθούν στον ψηφιακό κόσμο με ολοκληρωμένες λύσεις που συνδέουν website, marketing, CRM και analytics σε ένα ενιαίο σύστημα.",
    about_v1: "Αποτελεσματικότητα",
    about_v1d: "Λύσεις που μετριούνται σε αποτελέσματα, όχι σε ώρες.",
    about_v2: "Διαφάνεια",
    about_v2d: "Πάντα ξέρεις τι γίνεται και γιατί.",
    about_v3: "Συνέπεια",
    about_v3d: "Τηρούμε ό,τι υποσχόμαστε.",
    about_v4: "Καινοτομία",
    about_v4d: "Χρησιμοποιούμε τα τελευταία AI εργαλεία.",

    // Portfolio page
    portfolio_label: "Portfolio",
    portfolio_h1: "Τα έργα μας",
    portfolio_sub: "Μερικά από τα projects που έχουμε υλοποιήσει για τους πελάτες μας.",
    proj1_tag: "Website",
    proj1_title: "Serelion Porto Heli",
    proj1_desc: "Ολοκληρωμένο website για boutique hotel στο Πόρτο Χέλι.",
    proj2_tag: "Website + Booking",
    proj2_title: "Hands Save Lives",
    proj2_desc: "Εκπαιδευτικός οργανισμός CPR με σύστημα κρατήσεων.",
    proj3_tag: "Website + SEO",
    proj3_title: "Grammes Bar-Restaurant",
    proj3_desc: "Ανακαίνιση ψηφιακής παρουσίας για εστιατόριο-bar.",
    proj4_tag: "Web App",
    proj4_title: "Argos Group",
    proj4_desc: "Εταιρικό portal με CRM integration.",

    // Blog page
    blog_label: "Blog",
    blog_h1: "Νέα & Άρθρα",
    blog_sub: "Χρήσιμες συμβουλές για ψηφιακό marketing, web development και ανάπτυξη επιχείρησης.",
    b1_tag: "Digital Marketing",
    b1_date: "15 Απρ 2026",
    b1_title: "5 λόγοι που η ιστοσελίδα σου δεν μετατρέπει",
    b1_desc: "Ανακάλυψε τα πιο κοινά λάθη που κάνουν οι ιστοσελίδες και πώς να τα διορθώσεις.",
    b2_tag: "CRM",
    b2_date: "8 Απρ 2026",
    b2_title: "CRM: Το μυστικό όπλο για μικρές επιχειρήσεις",
    b2_desc: "Πώς ένα CRM μπορεί να διπλασιάσει τις πωλήσεις σου χωρίς επιπλέον προσωπικό.",
    b3_tag: "AI & Automation",
    b3_date: "2 Απρ 2026",
    b3_title: "AI automations που εξοικονομούν χρόνο",
    b3_desc: "Πρακτικά παραδείγματα χρήσης AI για αυτοματισμό καθημερινών εργασιών.",
    read_more: "Διαβάστε περισσότερα →",
    back_blog: "Πίσω στο Blog",
    read_time_1: "5 λεπτά ανάγνωση",
    read_time_2: "6 λεπτά ανάγνωση",
    read_time_3: "5 λεπτά ανάγνωση",
    article_cta_h: "Θέλεις να το εφαρμόσεις στην επιχείρησή σου;",
    article_cta_p: "Επικοινώνησε μαζί μας και ας μιλήσουμε για το τι μπορεί να κάνει η ψηφιακή υποδομή για εσένα.",
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    nav_cta: "Contact Us",

    hero_badge: "Now with AI-powered features",
    hero_h1: "You deserve more than <em>just a website</em>",
    hero_p: "Get a complete digital infrastructure so everything works together and drives sales for you.",
    hero_cta1: "Get in touch",
    hero_cta2: "Learn more",
    hero_stat1_num: "22+",
    hero_stat1_lbl: "Projects",
    hero_stat2_num: "10+",
    hero_stat2_lbl: "Clients",
    hero_stat3_num: "24/7",
    hero_stat3_lbl: "Support",
    trusted_label: "Trusted by",

    services_label: "Features",
    services_h2: "What we offer",
    services_sub: "We don't just apply patches. We build systems and align your digital assets to scale with confidence.",
    svc1_title: "WordPress Website",
    svc1_desc: "Designed for conversions and structured for future growth.",
    svc2_title: "Logo & Brand Guide",
    svc2_desc: "Full control of your brand with a consistent image across every platform.",
    svc3_title: "Social Media Setup",
    svc3_desc: "Verified, connected and ready to go.",
    svc4_title: "Ad Account Setup",
    svc4_desc: "Verified, connected and ready to run.",
    svc5_title: "Google Tools Setup",
    svc5_desc: "Analytics, Tag Manager, Search Console & Pixel Tracking — all correctly configured.",
    svc6_title: "CRM (Optional)",
    svc6_desc: "CRM connects your website, leads, email and sales into one unified system.",

    why_label: "Why us",
    why_h2: "Why businesses choose us",
    why_sub: "We build complete digital infrastructure that turns visitors into customers and lets you scale with confidence.",
    why_f1: "Strategic approach, not fragmented solutions",
    why_f2: "Websites designed for conversions",
    why_f3: "All tools connected in one system",
    why_f4: "Data tracking & analytics from day one",
    why_n1_num: "10+",
    why_n1_lbl: "Clients",
    why_n2_num: "22+",
    why_n2_lbl: "Projects",
    why_n3_num: "99.9%",
    why_n3_lbl: "Availability",
    why_n4_num: "24/7",
    why_n4_lbl: "Support",

    pricing_label: "PRICING",
    pricing_h2: "Choose your plan",
    pricing_sub: "Flexible pricing that fits your needs",
    popular: "Most Popular",
    p1_name: "Starter",
    p1_price: "89",
    p1_period: "/month",
    p2_name: "Standard Plan",
    p2_price: "149",
    p2_period: "/month",
    p3_name: "Pro Plan",
    p3_price: "397",
    p3_period: "/month",
    pricing_cta: "Contact us",

    testi_label: "Testimonials",
    testi_h2: "We pursue excellence.",
    testi_sub: "Are you our next success story?",
    t1_body: "I wholeheartedly recommend Stathis's services. He stands out for his impeccable professionalism and offers valuable knowledge.",
    t1_name: "Costas T.",
    t1_role: "Hospitality",
    t2_body: "The website exceeded every expectation. The professionalism, attention to detail and commitment to quality were outstanding.",
    t2_name: "Katerina M.",
    t2_role: "Freelancer",
    t3_body: "I've been working with Stathis for over four years. Every time, his accuracy and reliability are reaffirmed.",
    t3_name: "George S.",
    t3_role: "Real Estate",

    faq_label: "FAQ",
    faq_h2: "Frequently Asked Questions",
    faq_sub: "We are here to answer your questions.",
    faq1_q: "What exactly does the service include?",
    faq1_a: "The service includes the full creation and organisation of your digital infrastructure — website, CRM, automations, tracking and marketing tools — all connected in one unified system.",
    faq2_q: "Is it right for my business?",
    faq2_a: "Yes, if you want to acquire more customers, organise your leads and have better control over your sales. We tailor the solution to your business needs.",
    faq3_q: "How long does setup take?",
    faq3_a: "Typically the basic setup is completed within 7–14 days, depending on the complexity of the project.",
    faq4_q: "Do I need technical knowledge?",
    faq4_a: "No. We set everything up for you and provide guidance so you can use the system easily from day one.",
    faq5_q: "What happens after completion?",
    faq5_a: "The system remains fully operational and you can use it daily to manage leads, customers and campaigns. We also provide support and scalability as your business grows.",

    contact_label: "Contact",
    contact_h2: "Get in touch",
    contact_sub: "Click the button below to express your interest or fill out the form.",
    contact_email_label: "Email",
    contact_form_name: "Full name",
    contact_form_email: "Email",
    contact_form_phone: "Phone (optional)",
    contact_form_service: "Service",
    contact_form_service_placeholder: "Select a service...",
    contact_form_msg: "Message",
    contact_form_submit: "Send →",
    contact_success: "✓ Your message was sent successfully! We'll be in touch soon.",
    contact_error: "An error occurred. Please try again.",
    svc_opt1: "WordPress Website",
    svc_opt2: "Logo & Brand Guide",
    svc_opt3: "Social Media Setup",
    svc_opt4: "Ad Account Setup",
    svc_opt5: "Google Tools Setup",
    svc_opt6: "CRM",
    svc_opt7: "Other",

    footer_tagline: "We provide modern technology, web development and digital solutions to help businesses grow and stand out.",
    footer_services_h: "Services",
    footer_company_h: "Company",
    footer_solutions_h: "Solutions",
    footer_copyright: "© 2026 Dyo Sigma. All rights reserved.",
    footer_s1: "Website Development",
    footer_s2: "Web App Development",
    footer_s3: "SEO & Digital Marketing",
    footer_s4: "Technical Support",
    footer_c1: "About us",
    footer_c2: "Portfolio",
    footer_c3: "Blog",
    footer_c4: "Contact",
    footer_l1: "Custom Software",
    footer_l2: "E-commerce Solutions",
    footer_l3: "IT Consulting",
    footer_l4: "System Integration",

    about_label: "About",
    about_h1: "We build digital infrastructure",
    about_p: "We are a team that believes every business deserves digital tools that actually work.",
    about_mission_h: "Our mission",
    about_mission_p: "We help businesses grow in the digital world with integrated solutions that connect website, marketing, CRM and analytics in one unified system.",
    about_v1: "Effectiveness",
    about_v1d: "Solutions measured in results, not hours.",
    about_v2: "Transparency",
    about_v2d: "You always know what's happening and why.",
    about_v3: "Consistency",
    about_v3d: "We deliver on every promise.",
    about_v4: "Innovation",
    about_v4d: "We use the latest AI tools.",

    portfolio_label: "Portfolio",
    portfolio_h1: "Our work",
    portfolio_sub: "Some of the projects we've built for our clients.",
    proj1_tag: "Website",
    proj1_title: "Serelion Porto Heli",
    proj1_desc: "Complete website for a boutique hotel in Porto Heli.",
    proj2_tag: "Website + Booking",
    proj2_title: "Hands Save Lives",
    proj2_desc: "CPR training organisation with booking system.",
    proj3_tag: "Website + SEO",
    proj3_title: "Grammes Bar-Restaurant",
    proj3_desc: "Digital presence redesign for a bar-restaurant.",
    proj4_tag: "Web App",
    proj4_title: "Argos Group",
    proj4_desc: "Corporate portal with CRM integration.",

    blog_label: "Blog",
    blog_h1: "News & Articles",
    blog_sub: "Useful tips on digital marketing, web development and business growth.",
    b1_tag: "Digital Marketing",
    b1_date: "Apr 15, 2026",
    b1_title: "5 reasons your website doesn't convert",
    b1_desc: "Discover the most common mistakes websites make and how to fix them.",
    b2_tag: "CRM",
    b2_date: "Apr 8, 2026",
    b2_title: "CRM: The secret weapon for small businesses",
    b2_desc: "How a CRM can double your sales without additional staff.",
    b3_tag: "AI & Automation",
    b3_date: "Apr 2, 2026",
    b3_title: "AI automations that save time",
    b3_desc: "Practical examples of using AI to automate everyday tasks.",
    read_more: "Read more →",
    back_blog: "Back to Blog",
    read_time_1: "5 min read",
    read_time_2: "6 min read",
    read_time_3: "5 min read",
    article_cta_h: "Want to apply this to your business?",
    article_cta_p: "Get in touch and let's talk about what digital infrastructure can do for you.",
  }
};

// ─── State ──────────────────────────────────────────
let currentLang = localStorage.getItem('ds_lang') || 'el';

// ─── Apply translations ──────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ds_lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    if (t[key]) el.setAttribute(attr, t[key]);
  });
  // lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // html lang attr
  document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  // bilingual article blocks
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.style.display = el.getAttribute('data-lang-block') === lang ? '' : 'none';
  });
}

// ─── FAQ Accordion ───────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ─── Mobile nav ──────────────────────────────────────
function initMobileNav() {
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-menu');
  if (!ham || !mob) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    });
  });
}

// ─── Contact form ─────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    const msg = document.getElementById('formMsg');
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.textContent = '...';
    // Simulate send (replace with actual endpoint)
    await new Promise(r => setTimeout(r, 1000));
    msg.textContent = t.contact_success;
    msg.className = 'form-msg visible';
    form.reset();
    btn.disabled = false;
    btn.innerHTML = t.contact_form_submit;
  });
}

// ─── Nav active state ─────────────────────────────────
function initNavActive() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// ─── Init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
  initFAQ();
  initMobileNav();
  initContactForm();
  initNavActive();
});
