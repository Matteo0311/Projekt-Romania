let sz = `
<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="/index.html">Románia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/index.html">Főoldal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/history.html">Történelem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gasztronomia.html">Gasztronómia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hiressegek.html">Hírességek</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nevezetességek
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/pages/bran-kastely.html">Bran kastély</a></li>
            <li><a class="dropdown-item" href="/pages/bekas-szoros.html">Békás-szoros</a></li>
            <li><a class="dropdown-item" href="/szent-anna.html">Szent Anna-tó</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

document.getElementById("navbarIde").innerHTML = sz;

// Aktív navigációs elem beállítása

function setActiveNav() {
  let currentPath = window.location.pathname.split("/").pop();
  let navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === "/" + currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveNav();

// Footer script

let footerSz = `
<footer class="bg-light text-center text-lg-start">
  <hr>
  <div class="text-center p-3" style="background-color: #F8F9FA; color: black;">
    <p>Linkek:</p>
    <ul>
    <li><a href="/index.html" target="_blank" id="footerLink">Főoldal</a></li>
    <li><a href="/history.html" target="_blank">Történelem</a></li>
    <li><a href="/gasztronomia.html" target="_blank">Gasztronómia</a></li>
    <li><a href="/hiressegek.html" target="_blank">Románia Híres Emberei</a></li>
    <li><a href="/just-me.html" target="_blank">Rólam</a></li>
    </ul>
  </div>
</footer>`;

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