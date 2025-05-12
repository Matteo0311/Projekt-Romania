let sz = `
<header class="romania-navbar">
  <div class="nav-bg-elements">
    <div class="nav-bg-gradient"></div>
    <div class="nav-shape shape1"></div>
    <div class="nav-shape shape2"></div>
    <div class="nav-shape shape3"></div>
  </div>
  
  <div class="nav-container">
    <a href="/index.html" class="nav-brand">
      <div class="brand-icon">
        <img src="/Assets/favicon/koralakuicon.png" alt="Románia">
        <div class="pulse-effect"></div>
      </div>
      <div class="brand-text">
        <span class="brand-primary">Románia</span>
        <span class="brand-tagline">Fedezd fel a Kárpátok kincsét</span>
      </div>
    </a>
    
    <div class="mobile-toggle">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <nav class="main-nav">
      <ul class="nav-list">
        <li class="nav-item nav-visible">
          <a href="/index.html" class="nav-link">
            <span class="nav-text">Főoldal</span>
          </a>
        </li>
        <li class="nav-item nav-visible">
          <a href="/history.html" class="nav-link">
            <span class="nav-text">Történelem</span>
          </a>
        </li>
        <li class="nav-item nav-visible">
          <a href="/gasztronomia.html" class="nav-link">
            <span class="nav-text">Gasztronómia</span>
          </a>
        </li>
        <li class="nav-item nav-visible">
          <a href="/hiressegek.html" class="nav-link">
            <span class="nav-text">Hírességek</span>
          </a>
        </li>
        <li class="nav-item has-dropdown nav-visible">
          <a href="#" class="nav-link dropdown-trigger">
            <span class="nav-text">Nevezetességek</span>
            <span class="arrow-down"></span>
          </a>
          <div class="nav-dropdown">
            <div class="dropdown-inner">
              <a href="/pages/bran-kastely.html" class="dropdown-link">
                <div class="dropdown-content">
                  <span class="dropdown-title">Bran kastély</span>
                  <span class="dropdown-desc">Drakula gróf legendás otthona</span>
                </div>
              </a>
              <a href="/pages/bekas-szoros.html" class="dropdown-link">
                <div class="dropdown-content">
                  <span class="dropdown-title">Békás-szoros</span>
                  <span class="dropdown-desc">Lenyűgöző természeti képződmény</span>
                </div>
              </a>
              <a href="/szent-anna.html" class="dropdown-link">
                <div class="dropdown-content">
                  <span class="dropdown-title">Szent Anna-tó</span>
                  <span class="dropdown-desc">Vulkáni kráterben fekvő tó</span>
                </div>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');

/* Alap beállítások */
:root {
  /* Színek: Románia zászlajának színeiből inspirálódva, elegáns árnyalatokkal */
  --romania-blue: #002B7F;
  --romania-yellow: #FCD116;
  --romania-red: #CE1126;
  --dark-blue: #001752;
  --light-blue: #2A4FA8;
  --gold: #EBB225;
  --dark-red: #9C0C1C;
  --white: #FFFFFF;
  --black: #111827;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-700: #374151;
  --gray-900: #1F2937;
  
  /* Árnyék */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  /* Szöveg */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Montserrat', sans-serif;
  
  /* Animációk */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Navbar alap konténer */
.romania-navbar {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: var(--white);
  z-index: 1000;
  font-family: var(--font-body);
}

/* Háttér elemek */
.nav-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.nav-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--romania-blue), var(--dark-blue));
  opacity: 0.95;
}

.nav-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.shape1 {
  width: 150px;
  height: 150px;
  top: -30px;
  right: 40%;
  transform: rotate(25deg);
  animation: float 15s infinite ease-in-out;
}

.shape2 {
  width: 80px;
  height: 80px;
  top: 40px;
  right: 20%;
  transform: rotate(45deg);
  animation: float 10s infinite ease-in-out reverse;
}

.shape3 {
  width: 120px;
  height: 120px;
  top: -40px;
  right: 10%;
  transform: rotate(65deg);
  animation: float 12s infinite ease-in-out 2s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0); }
  25% { transform: translate(-10px, 10px) rotate(5deg); }
  50% { transform: translate(5px, -10px) rotate(-5deg); }
  75% { transform: translate(10px, 5px) rotate(3deg); }
}

/* Navbar konténer */
.nav-container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Branding rész */
.nav-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--white);
  position: relative;
  z-index: 5;
}

.brand-icon {
  position: relative;
  margin-right: 15px;
}

.brand-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.pulse-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: rgba(252, 209, 22, 0.3);
  border-radius: 50%;
  z-index: 1;
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.5;
  }
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-primary {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0px;
  background: linear-gradient(to right, var(--romania-yellow), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.5px;
}

.brand-tagline {
  font-size: 0.7rem;
  opacity: 0.8;
  color: var(--white);
  font-weight: 400;
  letter-spacing: 0.5px;
}

/* Fő navigáció */
.main-nav {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.nav-item {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  color: var(--white);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1.5rem;
  height: 100%;
  position: relative;
  transition: all var(--transition-medium);
  letter-spacing: 0.3px;
}

.nav-link:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 3px;
  background-color: var(--romania-yellow);
  transform: translateX(-50%);
  transition: width var(--transition-medium);
}

.nav-link:hover,
.nav-link.active {
  color: var(--romania-yellow);
}

.nav-link:hover:after,
.nav-link.active:after {
  width: 70%;
}

.arrow-down {
  display: inline-block;
  width: 0; 
  height: 0; 
  margin-left: 8px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--white);
  transition: transform var(--transition-medium);
}

.dropdown-trigger:hover .arrow-down,
.dropdown-trigger.active .arrow-down {
  transform: rotate(180deg);
  border-top-color: var(--romania-yellow);
}

/* Dropdown menü */
.has-dropdown {
  position: relative;
}

.dropdown-trigger {
  cursor: pointer;
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 260px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s var(--transition-medium);
  z-index: 100;
  overflow: hidden;
}

.dropdown-inner {
  padding: 8px 0;
}

.has-dropdown:hover .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 12px 20px;
  color: var(--gray-700);
  text-decoration: none;
  transition: all var(--transition-fast);
  border-left: 3px solid transparent;
}

.dropdown-link:hover {
  background-color: rgba(0, 43, 127, 0.05);
  color: var(--romania-blue);
  border-left-color: var(--romania-yellow);
}

.dropdown-content {
  display: flex;
  flex-direction: column;
}

.dropdown-title {
  font-weight: 500;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 4px;
}

.dropdown-desc {
  font-size: 0.8rem;
  color: var(--gray-700);
  display: block;
}

/* Mobil menü gomb */
.mobile-toggle {
  display: none;
  cursor: pointer;
  z-index: 10;
}

.hamburger {
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--white);
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 9px;
}

.hamburger span:nth-child(3) {
  top: 18px;
}

.hamburger.open span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.open span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

/* Animáció a navigációs elemekre */
.nav-visible {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.5s forwards;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }
.nav-item:nth-child(5) { animation-delay: 0.5s; }

/* Reszponzív beállítások */
@media screen and (max-width: 992px) {
  .romania-navbar {
    height: 70px;
  }
  
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .mobile-toggle {
    display: block;
  }
  
  .brand-tagline {
    display: none;
  }
  
  .main-nav {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(135deg, var(--romania-blue), var(--dark-blue));
    overflow: hidden;
    transition: height var(--transition-medium);
    flex-direction: column;
    box-shadow: var(--shadow-lg);
    z-index: 999;
  }
  
  .main-nav.open {
    height: calc(100vh - 70px);
    overflow-y: auto;
    padding: 20px 0;
  }
  
  .nav-list {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  
  .nav-item {
    width: 100%;
    height: auto;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  .main-nav.open .nav-item {
    opacity: 1;
    transform: translateY(0);
  }
  
  .main-nav.open .nav-item:nth-child(1) { transition-delay: 0.1s; }
  .main-nav.open .nav-item:nth-child(2) { transition-delay: 0.2s; }
  .main-nav.open .nav-item:nth-child(3) { transition-delay: 0.3s; }
  .main-nav.open .nav-item:nth-child(4) { transition-delay: 0.4s; }
  .main-nav.open .nav-item:nth-child(5) { transition-delay: 0.5s; }
  
  .nav-link {
    width: 100%;
    padding: 16px 24px;
    border-left: 3px solid transparent;
  }
  
  .nav-link:after {
    display: none;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background-color: rgba(255, 255, 255, 0.05);
    border-left-color: var(--romania-yellow);
  }
  
  .arrow-down {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .nav-dropdown {
    position: static;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: none;
    max-height: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    transition: max-height var(--transition-medium);
    border-radius: 0;
  }
  
  .has-dropdown.open .nav-dropdown {
    max-height: 1000px;
  }
  
  .dropdown-inner {
    padding: 0;
  }
  
  .dropdown-link {
    padding: 12px 24px 12px 40px;
    color: var(--white);
    border-left-width: 0;
  }
  
  .dropdown-link:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--romania-yellow);
  }
  
  .dropdown-desc {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
`;

document.getElementById("navbarIde").innerHTML = sz;

// Aktív navigációs elem beállítása és mobilmenü kezelése
document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-trigger), .dropdown-link");
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
  
  // Aktív menüpont beállítása
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    
    if (href === `/${currentPath}` || 
       (currentPath === "" && href === "/index.html")) {
      link.classList.add("active");
      
      // Ha ez egy dropdown elem, akkor a szülő dropdown is legyen aktív
      if (link.closest(".nav-dropdown")) {
        const parentTrigger = link.closest(".has-dropdown").querySelector(".dropdown-trigger");
        if (parentTrigger) {
          parentTrigger.classList.add("active");
        }
      }
    }
  });
  
  // Mobilmenü nyitás/zárás
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("open");
      mainNav.classList.toggle("open");
    });
  }
  
  // Mobilnézet dropdown kezelés
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener("click", function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = this.closest(".has-dropdown");
        parent.classList.toggle("open");
        
        // Többi dropdown bezárása
        document.querySelectorAll(".has-dropdown").forEach(item => {
          if (item !== parent) {
            item.classList.remove("open");
          }
        });
      }
    });
  });
  
  // Ablak átméretezés kezelés
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
      document.querySelectorAll(".has-dropdown").forEach(item => {
        item.classList.remove("open");
      });
      mainNav.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
});

// Footer script
let footerSz = `
<footer class="romania-footer">
  <div class="footer-bg-elements">
    <div class="footer-bg-gradient"></div>
    <div class="footer-shape shape1"></div>
    <div class="footer-shape shape2"></div>
    <div class="footer-shape shape3"></div>
  </div>
  
  <div class="footer-container">
    <div class="footer-main">
      <div class="footer-brand">
        <div class="brand-icon">
          <img src="/Assets/favicon/koralakuicon.png" alt="Románia">
          <div class="pulse-effect"></div>
        </div>
        <div class="brand-text">
          <span class="brand-primary">Románia</span>
          <span class="brand-tagline">Fedezd fel a Kárpátok kincsét</span>
        </div>
      </div>
      
      <div class="footer-nav">
        <div class="footer-nav-section">
          <h4 class="footer-heading">Oldalak</h4>
          <ul class="footer-nav-list">
            <li><a href="/index.html">Főoldal</a></li>
            <li><a href="/history.html">Történelem</a></li>
            <li><a href="/gasztronomia.html">Gasztronómia</a></li>
            <li><a href="/hiressegek.html">Hírességek</a></li>
          </ul>
        </div>
        
        <div class="footer-nav-section">
          <h4 class="footer-heading">Nevezetességek</h4>
          <ul class="footer-nav-list">
            <li><a href="/pages/bran-kastely.html">Bran kastély</a></li>
            <li><a href="/pages/bekas-szoros.html">Békás-szoros</a></li>
            <li><a href="/szent-anna.html">Szent Anna-tó</a></li>
          </ul>
        </div>
        
        <div class="footer-nav-section">
          <h4 class="footer-heading">Közösségi média</h4>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="copyright">&copy; ${new Date().getFullYear()} HelloRománia.hu - Minden jog fenntartva</div>
      <div class="footer-legal">
        <a href="#">Adatvédelem</a>
        <span class="divider">|</span>
        <a href="#">Felhasználási feltételek</a>
        <span class="divider">|</span>
        <a href="/just-me.html">Rólam</a>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Footer stílusok - összehangolva a navbarral */
  .romania-footer {
    position: relative;
    width: 100%;
    background-color: var(--white);
    z-index: 100;
    font-family: var(--font-body);
    margin-top: 4rem;
    overflow: hidden;
  }
  
  .footer-bg-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .footer-bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--romania-blue), var(--dark-blue));
    opacity: 0.95;
  }
  
  .footer-bg-elements .shape1 {
    width: 150px;
    height: 150px;
    bottom: -30px;
    left: 40%;
    transform: rotate(25deg);
    animation: float 15s infinite ease-in-out;
  }
  
  .footer-bg-elements .shape2 {
    width: 80px;
    height: 80px;
    bottom: 40px;
    left: 20%;
    transform: rotate(45deg);
    animation: float 10s infinite ease-in-out reverse;
  }
  
  .footer-bg-elements .shape3 {
    width: 120px;
    height: 120px;
    bottom: -40px;
    left: 10%;
    transform: rotate(65deg);
    animation: float 12s infinite ease-in-out 2s;
  }
  
  .footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 2rem 1.5rem;
    color: var(--white);
  }
  
  .footer-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  
  .footer-brand {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .footer-brand .brand-icon {
    position: relative;
    margin-right: 15px;
  }
  
  .footer-brand .brand-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }
  
  .footer-brand .pulse-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: rgba(252, 209, 22, 0.3);
    border-radius: 50%;
    z-index: 1;
    animation: pulse 2.5s infinite;
  }
  
  .footer-brand .brand-text {
    display: flex;
    flex-direction: column;
  }
  
  .footer-brand .brand-primary {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0px;
    background: linear-gradient(to right, var(--romania-yellow), var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    letter-spacing: 0.5px;
  }
  
  .footer-brand .brand-tagline {
    font-size: 0.7rem;
    opacity: 0.8;
    color: var(--white);
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  
  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
  
  .footer-nav-section {
    min-width: 150px;
  }
  
  .footer-heading {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem;
    padding-bottom: 0.5rem;
    position: relative;
    color: var(--romania-yellow);
    letter-spacing: 0.3px;
  }
  
  .footer-heading:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--romania-yellow);
  }
  
  .footer-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-nav-list li {
    margin-bottom: 0.6rem;
  }
  
  .footer-nav-list a {
    color: var(--white);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all var(--transition-medium);
    display: inline-block;
    opacity: 0.85;
  }
  
  .footer-nav-list a:hover {
    color: var(--romania-yellow);
    opacity: 1;
    transform: translateX(3px);
  }
  
  .social-links {
    display: flex;
    gap: 0.8rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    transition: all var(--transition-medium);
  }
  
  .social-link:hover {
    background-color: var(--romania-yellow);
    color: var(--dark-blue);
    transform: translateY(-3px);
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
    opacity: 0.8;
    color: var(--white);
  }
  
  .footer-legal {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--white);
  }
  
  .footer-legal a {
    color: var(--white);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .footer-legal a:hover {
    color: var(--romania-yellow);
  }
  
  .divider {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .copyright {
    color: var(--white);
  }
  
  @media screen and (max-width: 768px) {
    .footer-main {
      flex-direction: column;
    }
    
    .footer-nav {
      width: 100%;
      gap: 2rem;
    }
    
    .footer-nav-section {
      flex: 1 0 40%;
    }
    
    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
    
    .footer-legal {
      justify-content: center;
    }
  }
</style>
`;

document.getElementById("footerIde").innerHTML = footerSz;

// Title átíró script
let pageTitle = document.title;
let siteName = "HelloRomania.hu";
document.title = `${pageTitle} - ${siteName}`;

// Favicon
let favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.href = "/Assets/favicon/koralakuicon.png";
favicon.type = "image/x-icon";
document.head.appendChild(favicon);