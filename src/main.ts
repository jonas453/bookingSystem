import './style.css';

// Font Awesome einbinden (falls nicht bereits im HTML <head> eingebunden)
const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(faLink);

document.body.style.margin = '0';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <aside class="sidebar">
      <!-- Logo und Titel -->
      <div class="logo-title">
        <img src="https://via.placeholder.com/40" alt="Logo" class="logo">
        <h2 class="title">Titel</h2>
      </div>
      <!-- Hauptmenü -->
      <div class="menu-container">
        <h3 class="menu-title">MAIN MENU</h3>
        <ul class="menu">
          <li>
            <a href="#" class="active">
              <i class="fas fa-file-invoice menu-icon"></i>
              <span>Rechnung</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-calendar-alt menu-icon"></i>
              <span>Kalender</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-book menu-icon"></i>
              <span>Buchungen</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-users menu-icon"></i>
              <span>Kunden</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-box-open menu-icon"></i>
              <span>Produkte</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-cog menu-icon"></i>
              <span>Einstellungen</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <main class="main-content">
      <!-- Der Hauptinhalt wird dynamisch eingefügt -->
    </main>
  </div>
`;

// Funktion zum Aktualisieren des Hauptinhalts
function updateMainContent(contentKey: string) {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.innerHTML = `
      <h1>${contentKey}</h1>
      <p>Hier kommt der Inhalt für ${contentKey} hin.</p>
    `;
    }
}

// Initialen Inhalt setzen basierend auf dem aktiven Menüpunkt
const activeLink = document.querySelector<HTMLAnchorElement>('.menu a.active');
if (activeLink) {
    updateMainContent(activeLink.textContent?.trim() || '');
}

// Menüpunkte anklickbar machen und aktiven Menüpunkt hervorheben
const menuLinks = document.querySelectorAll<HTMLAnchorElement>('.menu a');
menuLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
        // Entfernt die 'active'-Klasse von allen Menüpunkten
        menuLinks.forEach((l) => l.classList.remove('active'));
        // Fügt die 'active'-Klasse zum geklickten Menüpunkt hinzu
        this.classList.add('active');
        // Aktualisiert den Hauptinhalt
        updateMainContent(this.textContent?.trim() || '');
    });
});