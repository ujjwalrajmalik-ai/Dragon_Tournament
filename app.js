// ==========================================
// 1. DOMAIN LOCK (ANTI-CLONE SYSTEM)
// ==========================================
const allowedDomain = "www.dragontournament.xyz"; // ⚠️ TYPE YOUR DOMAIN HERE (e.g. "mywebsite.com"). Leave empty "" if running on localhost to test.
const currentDomain = window.location.hostname;

if (allowedDomain !== "" && currentDomain !== allowedDomain && currentDomain !== "localhost" && currentDomain !== "127.0.0.1") {
    document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:20vh;'>UNAUTHORIZED CLONE DETECTED. REDIRECTING...</h1>";
    window.location.href = `https://${allowedDomain}`;
}

// ==========================================
// 2. ENCRYPTED BASE64 HTML INJECTOR
// ==========================================
// The entire HTML body is hidden inside this string so "View Source" shows nothing.
const encryptedHTML = "PGRpdiBjbGFzcz0iYXBwLWhlYWRlciIgaWQ9Im1haW4taGVhZGVyIj4KICAgIDxpbWcgc3JjPSJodHRwczovL2lrLmltYWdla2l0LmlvL1Jham1hbGlrOTkvUGljc2FydF8yNi0wMy0wNF8yMS00Ni0xNS0zNTIucG5nIiBhbHQ9IlRpdGxlIEltYWdlIiBjbGFzcz0iaGVhZGVyLXRpdGxlLWltZyIgZHJhZ2dhYmxlPSJmYWxzZSIgb25jbGljaz0id2luZG93LmxvY2F0aW9uLmhyZWY9J2luZGV4Lmh0bWwnOyI+CiAgICA8YnV0dG9uIGNsYXNzPSJoZWFkZXItYWN0aW9uLWJ0biIgb25jbGljaz0ibG9jYXRpb24uaGFzaD0nc2VhcmNoJyIgaWQ9ImhlYWRlci10b2dnbGUtYnRuIj4KICAgICAgICA8c3BhbiBjbGFzcz0iaGVhZGVyLWFjdGlvbi10ZXh0Ij5TZWFyY2g8L3NwYW4+CiAgICAgICAgPGkgY2xhc3M9ImZhcyBmYS1zZWFyY2giPjwvaT4KICAgIDwvYnV0dG9uPgo8L2Rpdj4KCjxkaXYgaWQ9ImhvbWUtdmlldyI+CiAgICA8aW1nIHNyYz0iaHR0cHM6Ly9pay5pbWFnZWtpdC5pby81bHo5NGRhbjZlL1BpY3NhcnRfMjYtMDItMjZfMTQtMTgtNTEtOTMxLnBuZz91cGRhdGVkQXQ9MTc3MjA5NTc4MTExMCIgYWx0PSJXZWJzaXRlIExvZ28iIGNsYXNzPSJtYWluLWxvZ28iIGRyYWdnYWJsZT0iZmFsc2UiPgogICAgCiAgICA8ZGl2IGlkPSJlcnJvci1tZXNzYWdlIiBjbGFzcz0iZXJyb3IiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PC9kaXY+CgogICAgPGRpdiBpZD0ic2tlbGV0b24tY29udGFpbmVyIj4KICAgICAgICA8ZGl2IGNsYXNzPSJza2VsZXRvbi1jYXJkIj48ZGl2IGNsYXNzPSJza2VsZXRvbi1waG90byI+PC9kaXY+PGRpdiBjbGFzcz0ic2tlbGV0b24taW5mbyI+PGRpdiBjbGFzcz0ic2tlbGV0b24tbGluZSB3LTcwIj48L2Rpdj48ZGl2IGNsYXNzPSJza2VsZXRvbi1saW5lIHctNDAiPjwvZGl2PjwvZGl2PjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9InNrZWxldG9uLWNhcmQiPjxkaXYgY2xhc3M9InNrZWxldG9uLXBob3RvIj48L2Rpdj48ZGl2IGNsYXNzPSJza2VsZXRvbi1pbmZvIj48ZGl2IGNsYXNzPSJza2VsZXRvbi1saW5lIHctNzAiPjwvZGl2PjxkaXYgY2xhc3M9InNrZWxldG9uLWxpbmUgdy00MCI+PC9kaXY+PC9kaXY+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2tlbGV0b24tY2FyZCI+PGRpdiBjbGFzcz0ic2tlbGV0b24tcGhvdG8iPjwvZGl2PjxkaXYgY2xhc3M9InNrZWxldG9uLWluZm8iPjxkaXYgY2xhc3M9InNrZWxldG9uLWxpbmUgdy03MCI+PC9kaXY+PGRpdiBjbGFzcz0ic2tlbGV0b24tbGluZSB3LTQwIj48L2Rpdj48L2Rpdj48L2Rpdj4KICAgIDwvZGl2PgoKICAgIDxkaXYgaWQ9InNlY3Rpb24tYiIgY2xhc3M9InNlY3Rpb24tY29udGFpbmVyIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPgogICAgICAgIAogICAgICAgIDxkaXYgY2xhc3M9InBpbGwtZmlsdGVycy1jb250YWluZXIiIGlkPSJwaWxsLWZpbHRlcnMiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWx0ZXItcGlsbCBhY3RpdmUiIGRhdGEtZmlsdGVyPSJFU1BPUlQiPjxpIGNsYXNzPSJmYXMgZmEtdHJvcGh5Ij48L2k+IEUtU3BvcnQgRnJhbWU8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZmlsdGVyLXBpbGwiIGRhdGEtZmlsdGVyPSJDUkVBVE9SIj48aSBjbGFzcz0iZmFzIGZhLXZpZGVvIj48L2k+IENyZWF0b3I8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iZmlsdGVyLWNvbnRhaW5lciI+CiAgICAgICAgICAgIDxhIGhyZWY9IlJ1bGUuaHRtbCIgY2xhc3M9InJ1bGUtYm9vay1idG4iPgogICAgICAgICAgICAgICAgPGkgY2xhc3M9ImZhcyBmYS1ib29rIj48L2k+IFJ1bGUgQm9vawogICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIAogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjdXN0b20tc2VsZWN0LXdyYXBwZXIiIGlkPSJjdXN0b20tc29ydCI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjdXN0b20tc2VsZWN0LXRyaWdnZXIiPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJjdXN0b20tc2VsZWN0LXRleHQiPk1vc3QgV2lucyAoTWF4KTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iZmFzIGZhLWNoZXZyb24tZG93biBjdXN0b20tc2VsZWN0LWljb24iPjwvaT4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY3VzdG9tLXNlbGVjdC1vcHRpb25zIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjdXN0b20tb3B0aW9uIHNlbGVjdGVkIiBkYXRhLXZhbHVlPSJkZXNjIj5Nb3N0IFdpbnMgKE1heCk8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjdXN0b20tb3B0aW9uIiBkYXRhLXZhbHVlPSJhc2MiPkxlYXN0IFdpbnMgKE1pbik8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICAKICAgICAgICA8ZGl2IGlkPSJsZWFkZXJib2FyZC1jb250YWluZXIiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE1cHg7Ij48L2Rpdj4KICAgICAgICAKICAgICAgICA8ZGl2IGlkPSJsb2FkaW5nLXNwaW5uZXIiIGNsYXNzPSJsb2FkaW5nLXNwaW5uZXIiPjwvZGl2PgogICAgICAgIDxkaXYgaWQ9InNjcm9sbC10cmlnZ2VyIiBzdHlsZT0iaGVpZ2h0OiAyMHB4OyB3aWR0aDogMTAwJTsiPjwvZGl2PgogICAgPC9kaXY+CjwvZGl2PgoKPGRpdiBpZD0ic2VhcmNoLXZpZXciPgogICAgPGRpdiBjbGFzcz0ic2VhcmNoLWlucHV0LXdyYXBwZXIiPgogICAgICAgIDxpIGNsYXNzPSJmYXMgZmEtc2VhcmNoIHNlYXJjaC1pY29uLWluc2lkZSI+PC9pPgogICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0ibGl2ZS11aWQtaW5wdXQiIGNsYXNzPSJsaXZlLXNlYXJjaC1iYXIiIHBsYWNlaG9sZGVyPSJFbnRlciBVSUQgKGUuZy4sIDI3OS4uLikiIGF1dG9jb21wbGV0ZT0ib2ZmIj4KICAgIDwvZGl2PgogICAgPGRpdiBpZD0ic2VhcmNoLXN0YXR1cyIgY2xhc3M9InNlYXJjaC1zdGF0dXMiPlN0YXJ0IHR5cGluZyBhIFVJRC4uLjwvZGl2PgogICAgPGRpdiBjbGFzcz0ic2VjdGlvbi1jb250YWluZXIiIHN0eWxlPSJtYXJnaW4tdG9wOiAwOyI+CiAgICAgICAgPGRpdiBpZD0ic3VnZ2VzdGlvbnMtY29udGFpbmVyIiBzdHlsZT0iZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNXB4OyI+PC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGlkPSJwcm9maWxlLW1vZGFsIj4KICAgIDxkaXYgY2xhc3M9Im1vZGFsLWhlYWRlciI+CiAgICAgICAgPGltZyBzcmM9Imh0dHBzOi8vaWsuaW1hZ2VraXQuaW8vUmFqbWFsaWs5OS9QaWNzYXJ0XzI2LTAzLTA0XzIxLTQ2LTE1LTM1Mi5wbmciIGFsdD0iVGl0bGUgSW1hZ2UiIGNsYXNzPSJoZWFkZXItdGl0bGUtaW1nIiBkcmFnZ2FibGU9ImZhbHNlIiBvbmNsaWNrPSJ3aW5kb3cubG9jYXRpb24uaHJlZj0naW5kZXguaHRtbCcsIj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJoZWFkZXItYWN0aW9uLWJ0biIgb25jbGljaz0iaGlzdG9yeS5iYWNrKCkiPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0iaGVhZGVyLWFjdGlvbi10ZXh0Ij5CYWNrPC9zcGFuPgogICAgICAgICAgICA8aSBjbGFzcz0iZmFzIGZhLXRpbWVzIj48L2k+CiAgICAgICAgPC9idXR0b24+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJtb2RhbC1vdmVybGF5Ij4KICAgICAgICA8ZGl2IGlkPSJtb2RhbC1pbm5lci1jb250ZW50IiBjbGFzcz0ibW9kYWwtY29udGVudCI+CiAgICAgICAgICAgIDwhLS0gRGF0YSB3aWxsIGJlIGluamVjdGVkIGhlcmUgLS0+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGlkPSJsaWdodGJveC1tb2RhbCI+CiAgICA8ZGl2IGNsYXNzPSJsaWdodGJveC10b3AtYmFyIj4KICAgICAgICA8aSBjbGFzcz0iZmFzIGZhLXRpbWVzIGxpZ2h0Ym94LWNsb3NlLW5ldyIgb25jbGljaz0iaGlzdG9yeS5iYWNrKCkiPjwvaT4KICAgICAgICA8YnV0dG9uIGlkPSJsaWdodGJveC1kb3dubG9hZC1idG4iIGNsYXNzPSJsaWdodGJveC1kb3dubG9hZC1idG4iIG9uY2xpY2s9ImRvd25sb2FkQWxidW1QaWMoKSI+PGkgY2xhc3M9ImZhcyBmYS1kb3dubG9hZCI+PC9pPiBEb3dubG9hZDwvYnV0dG9uPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJ6b29tLWFyZWEiIGlkPSJ6b29tLWFyZWEiPgogICAgICAgIDxpbWcgaWQ9ImxpZ2h0Ym94LWltZyIgc3JjPSIiIGFsdD0iQWxidW0gUHJldmlldyIgZHJhZ2dhYmxlPSJmYWxzZSIgY3Jvc3NvcmlnaW49ImFub255bW91cyI+CiAgICAgICAgPGRpdiBjbGFzcz0iem9vbS1oaW50Ij5Eb3VibGUtdGFwIG9yIFBpbmNoIHRvIFpvb208L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4KCjxkaXYgaWQ9InBmcC1saWdodGJveCI+CiAgICA8aSBjbGFzcz0iZmFzIGZhLXRpbWVzIGxpZ2h0Ym94LWNsb3NlLW5ldyIgb25jbGljaz0iaGlzdG9yeS5iYWNrKCkiIHN0eWxlPSJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMjVweDsgcmlnaHQ6IDI1cHg7IHotaW5kZXg6IDMwMDE7Ij48L2k+CiAgICA8ZGl2IHN0eWxlPSJwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiA5MCU7IG1heC13aWR0aDogNTAwcHg7IGFzcGVjdC1yYXRpbzogMS8xOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsiPgogICAgICAgIDxpbWcgaWQ9InBmcC1saWdodGJveC1pbWciIHNyYz0iIiBzdHlsZT0id2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY29udGFpbjsgYm9yZGVyLXJhZGl1czogMTBweDsiPgogICAgICAgIDxpbWcgc3JjPSJodHRwczovL2lrLmltYWdla2l0LmlvLzVsejk0ZGFuNmUvUGljc2FydF8yNi0wMy0zMF8wOC0yOC00MC01NzMucG5nP3VwZGF0ZWRBdD0xNzc0ODM5NTUzMTE0IiBjbGFzcz0icGZwLW92ZXJsYXktbG9nbyIgZHJhZ2dhYmxlPSJmYWxzZSI+CiAgICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGlkPSJzaGFyZS1mYWxsYmFjay1tb2RhbCI+CiAgICA8ZGl2IGNsYXNzPSJzaGFyZS1mYWxsYmFjay1jbG9zZSIgb25jbGljaz0iZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlLWZhbGxiYWNrLW1vZGFsJykuc3R5bGUuZGlzcGxheT0nbm9uZSciPjxpIGNsYXNzPSJmYXMgZmEtdGltZXMiPjwvaT48L2Rpdj4KICAgIDxkaXYgY2xhc3M9InNoYXJlLWZhbGxiYWNrLXRpdGxlIj5PcGVuIGluIENocm9tZS9TYWZhcmkgQnJvd3NlciA8YnI+VG8gRG93bmxvYWQgdGhpczwvZGl2PgogICAgPGltZyBpZD0iZmFsbGJhY2stZ2VuZXJhdGVkLWltZyIgc3JjPSIiPgogICAgPGJ1dHRvbiBpZD0iZmFsbGJhY2stZGlyZWN0LWRvd25sb2FkLWJ0biIgY2xhc3M9InJ1bGUtYm9vay1idG4iIHN0eWxlPSJtYXJnaW4tdG9wOiAyNXB4OyBib3JkZXItY29sb3I6ICM2NmZjZjE7IGNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjNjZmY2YxOyBwYWRkaW5nOiAxMnB4IDI1cHg7IGZvbnQtc2l6ZTogMTVweDsiPgogICAgICAgIDxpIGNsYXNzPSJmYXMgZmEtZG93bmxvYWQiPjwvaT4gRGlyZWN0IERvd25sb2FkCiAgICA8L2J1dHRvbj4KPC9kaXY+Cgo8ZGl2IGlkPSJwb3N0Y2FyZC1nZW5lcmF0b3IiPjwvZGl2Pg==";

document.getElementById('secure-root').innerHTML = atob(encryptedHTML);

// ==========================================
// 3. CORE APPLICATION LOGIC
// ==========================================

const scriptUrl = 'https://script.google.com/macros/s/AKfycbz4arq66EEVVkiNDuCrPLfwzmgmvfEvhELtF7gKU4Kv9PGTaMUpLeQNITua-n9X7hdP/exec?action=getLeaderboard';

let globalPlayerData = []; let filteredData = []; let esportPool = []; let autoOpenTriggeredFor = "";
let currentSort = 'desc'; let currentFilter = 'ESPORT'; let currentPage = 1; const itemsPerPage = 10;

window.addEventListener('hashchange', handleRoute);

function handleRoute() {
    const hash = window.location.hash;
    const home = document.getElementById('home-view');
    const search = document.getElementById('search-view');
    const profile = document.getElementById('profile-modal');
    const lightbox = document.getElementById('lightbox-modal');
    const pfpLightbox = document.getElementById('pfp-lightbox');
    const mainHeaderBtn = document.getElementById('header-toggle-btn');

    if (hash === '#lightbox') {
        lightbox.style.display = 'flex'; pfpLightbox.style.display = 'none'; document.body.style.overflow = 'hidden';
    } else if (hash === '#pfp') {
        pfpLightbox.style.display = 'flex'; lightbox.style.display = 'none'; document.body.style.overflow = 'hidden';
    } else if (hash.startsWith('#profile-')) {
        lightbox.style.display = 'none'; pfpLightbox.style.display = 'none'; 
        profile.style.display = 'block'; search.style.display = 'none'; home.style.display = 'none'; 
        document.body.style.overflow = 'hidden';
        
        const uid = hash.replace('#profile-', '');
        
        if (globalPlayerData.length === 0) {
            document.getElementById('modal-inner-content').className = 'modal-content';
            document.getElementById('modal-inner-content').innerHTML = `
                <div class="profile-preloader">
                    <i class="fas fa-circle-notch"></i>
                    <span>Fetching Data...</span>
                </div>
            `;
        } else {
            const currentDisplayedUid = document.getElementById('modal-inner-content').getAttribute('data-current-uid');
            if(currentDisplayedUid !== uid) {
                openModal(uid, true); 
            }
        }
    } else if (hash === '#search') {
        updateMetaTags("Dragon Tournaments | Hall of Fame", "Check out the top Elite players and Content Creators in the Dragon Tournaments Hall of Fame!", "https://ik.imagekit.io/5lz94dan6e/Picsart_26-02-26_14-18-51-931.png?updatedAt=1772095781110");
        document.body.className = ''; 
        lightbox.style.display = 'none'; pfpLightbox.style.display = 'none'; profile.style.display = 'none'; search.style.display = 'flex'; home.style.display = 'none'; document.body.style.overflow = 'auto';
        mainHeaderBtn.innerHTML = '<span class="header-action-text">Home</span><i class="fas fa-home"></i>';
        mainHeaderBtn.onclick = () => location.hash = 'home';
        document.getElementById('live-uid-input').focus();
    } else { 
        updateMetaTags("Dragon Tournaments | Hall of Fame", "Check out the top Elite players and Content Creators in the Dragon Tournaments Hall of Fame!", "https://ik.imagekit.io/5lz94dan6e/Picsart_26-02-26_14-18-51-931.png?updatedAt=1772095781110");
        document.body.className = ''; 
        lightbox.style.display = 'none'; pfpLightbox.style.display = 'none'; profile.style.display = 'none'; search.style.display = 'none'; home.style.display = 'flex'; document.body.style.overflow = 'auto';
        mainHeaderBtn.innerHTML = '<span class="header-action-text">Search</span><i class="fas fa-search"></i>';
        mainHeaderBtn.onclick = () => location.hash = 'search';
        document.getElementById('live-uid-input').value = ''; document.getElementById('suggestions-container').innerHTML = ''; document.getElementById('search-status').innerText = 'Start typing a UID...';
        autoOpenTriggeredFor = "";
    }
}

handleRoute();

function updateMetaTags(title, desc, imageUrl) {
    document.title = title;
    const tagsToUpdate = [
        { selector: 'meta[name="description"]', content: desc },
        { selector: 'meta[property="og:title"]', content: title },
        { selector: 'meta[property="og:description"]', content: desc },
        { selector: 'meta[property="og:image"]', content: imageUrl },
        { selector: 'meta[property="twitter:title"]', content: title },
        { selector: 'meta[property="twitter:description"]', content: desc },
        { selector: 'meta[property="twitter:image"]', content: imageUrl }
    ];
    tagsToUpdate.forEach(tag => {
        const el = document.querySelector(tag.selector);
        if(el) el.setAttribute("content", tag.content);
    });
}

const zoomArea = document.getElementById('zoom-area');
const lbImg = document.getElementById('lightbox-img');
let lbScale = 1, lbPinchDist = 0, lbIsPanning = false, lbStartX, lbStartY, lbPanX = 0, lbPanY = 0, lbLastTap = 0;

zoomArea.addEventListener('touchstart', e => {
    if (e.touches.length === 2) { lbPinchDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY); } 
    else if (e.touches.length === 1) {
        let currentTime = new Date().getTime(); let tapLength = currentTime - lbLastTap;
        if (tapLength < 300 && tapLength > 0) { lbScale = lbScale === 1 ? 2.5 : 1; lbPanX = 0; lbPanY = 0; updateLbTransform(); e.preventDefault(); } 
        else { if (lbScale > 1) { lbIsPanning = true; lbStartX = e.touches[0].pageX - lbPanX; lbStartY = e.touches[0].pageY - lbPanY; } }
        lbLastTap = currentTime;
    }
}, { passive: false });

zoomArea.addEventListener('touchmove', e => {
    if (e.touches.length === 2) { e.preventDefault(); let newDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY); let scaleDelta = newDist / lbPinchDist; lbScale = Math.min(Math.max(1, lbScale * scaleDelta), 5); lbPinchDist = newDist; updateLbTransform(); } 
    else if (lbIsPanning && e.touches.length === 1 && lbScale > 1) { e.preventDefault(); lbPanX = e.touches[0].pageX - lbStartX; lbPanY = e.touches[0].pageY - lbStartY; updateLbTransform(); }
}, { passive: false });

zoomArea.addEventListener('touchend', () => { lbIsPanning = false; });
function updateLbTransform() { lbImg.style.transform = `translate(${lbPanX}px, ${lbPanY}px) scale(${lbScale})`; }

window.openLightbox = function(src) { lbScale = 1; lbPanX = 0; lbPanY = 0; updateLbTransform(); document.getElementById('lightbox-img').src = src; window.location.hash = 'lightbox'; };
window.openPfpLightbox = function(src) { document.getElementById('pfp-lightbox-img').src = src; window.location.hash = 'pfp'; };

window.downloadAlbumPic = async function() {
    const url = document.getElementById('lightbox-img').src;
    const btn = document.getElementById('lightbox-download-btn');
    const originalHTML = btn.innerHTML; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'; btn.style.pointerEvents = 'none';
    try { const response = await fetch(url, { mode: 'cors' }); const blob = await response.blob(); const blobUrl = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = blobUrl; link.download = 'Dragon_Tournament_Album.jpg'; document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(blobUrl); } catch (e) { window.open(url, '_blank'); }
    btn.innerHTML = originalHTML; btn.style.pointerEvents = 'auto';
}

window.openDeepLinkApp = function(url, e) {
    if(!url) return;
    const rect = e.target.getBoundingClientRect(); const x = (rect.left + (rect.width / 2)) / window.innerWidth; const y = (rect.top + (rect.height / 2)) / window.innerHeight;
    confetti({ particleCount: 50, spread: 60, origin: { x: x, y: y }, colors: ['#e1306c', '#c13584', '#ffd700', '#66fcf1'] });
    
    setTimeout(() => {
        let finalUrl = url;
        if (/android/i.test(navigator.userAgent)) {
            if (url.includes('instagram.com')) { finalUrl = url.replace(/https?:\/\//, 'intent://') + '#Intent;package=com.instagram.android;scheme=https;end;'; } 
            else if (url.includes('youtube.com') || url.includes('youtu.be')) { finalUrl = url.replace(/https?:\/\//, 'intent://') + '#Intent;package=com.google.android.youtube;scheme=https;end;'; }
        }
        window.open(finalUrl, '_blank');
    }, 400);
}

window.openSocialApp = function(handle, platform) {
    if(!handle) return;
    let clean = handle.replace(/^@/, '').trim();
    let isAndroid = /android/i.test(navigator.userAgent);
    let finalUrl = '';
    
    if (platform === 'ig') {
        if(isAndroid) finalUrl = `intent://instagram.com/_u/${clean}/#Intent;package=com.instagram.android;scheme=https;end;`;
        else finalUrl = `https://instagram.com/${clean}`;
    } else if (platform === 'yt') {
        let yHandle = clean.startsWith('@') ? clean : '@' + clean;
        if(isAndroid) finalUrl = `intent://youtube.com/${yHandle}#Intent;package=com.google.android.youtube;scheme=https;end;`;
        else finalUrl = `https://youtube.com/${yHandle}`;
    }
    window.open(finalUrl, '_blank');
}

window.copyText = function(text, el) {
    navigator.clipboard.writeText(text).then(() => { el.className = 'fas fa-check copy-btn'; el.style.color = '#66fcf1'; setTimeout(() => { el.className = 'fas fa-copy copy-btn'; el.style.color = ''; }, 2000); }).catch(err => console.error('Failed to copy', err));
}

function getPlayerRankIndex(playerUid) { return esportPool.findIndex(p => p.Uid.toString() === playerUid.toString()); }
function getTierInfo(rankIndex) {
    if (rankIndex === 0) return { class: "tier-diamond", name: "ELITE", icon: "fa-gem", color: "#66fcf1" };
    if (rankIndex === 1) return { class: "tier-gold", name: "GOLD", icon: "fa-crown", color: "#ffd700" };
    if (rankIndex === 2) return { class: "tier-silver", name: "SILVER", icon: "fa-shield-alt", color: "#c0c0c0" };
    return { class: "tier-bronze", name: "BRONZE", icon: "fa-medal", color: "#cd7f32" };
}

function applyTiltEffect() {
    document.querySelectorAll('.player-card:not(.tilt-active)').forEach(card => {
        card.classList.add('tilt-active');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8; const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`; });
    });
}

const sortWrapper = document.getElementById('custom-sort'); const sortTrigger = sortWrapper.querySelector('.custom-select-trigger'); const sortOptions = sortWrapper.querySelectorAll('.custom-option'); const sortText = document.getElementById('custom-select-text');
sortTrigger.addEventListener('click', () => { sortWrapper.classList.toggle('open'); }); document.addEventListener('click', (e) => { if(!sortWrapper.contains(e.target)) sortWrapper.classList.remove('open'); });
sortOptions.forEach(opt => {
    opt.addEventListener('click', function() {
        sortOptions.forEach(o => o.classList.remove('selected')); this.classList.add('selected'); sortText.innerText = this.innerText; currentSort = this.getAttribute('data-value'); sortWrapper.classList.remove('open'); refreshList();
    });
});

document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', function() { document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active')); this.classList.add('active'); currentFilter = this.getAttribute('data-filter'); refreshList(); });
});

function refreshList() { document.getElementById('leaderboard-container').innerHTML = ''; currentPage = 1; applyFiltersAndSort(); renderPage(); }

function applyFiltersAndSort() {
    let temp = [];
    if(currentFilter === 'ESPORT') { temp = globalPlayerData.filter(p => (p.Subscription || '').toLowerCase() !== 'creator'); } 
    else if (currentFilter === 'CREATOR') { temp = globalPlayerData.filter(p => (p.Subscription || '').toLowerCase() === 'creator'); }
    
    if (currentSort === 'asc') temp.reverse(); filteredData = temp;
}

document.getElementById('live-uid-input').addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions-container'); const statusText = document.getElementById('search-status');
    if (!query) { suggestionsContainer.innerHTML = ''; statusText.innerText = 'Start typing a UID...'; autoOpenTriggeredFor = ""; return; }
    if (globalPlayerData.length === 0) { statusText.innerText = "Data still loading..."; return; }
    const matches = globalPlayerData.filter(p => p.Uid.toString().toLowerCase().startsWith(query));
    if (matches.length === 0) { suggestionsContainer.innerHTML = ''; statusText.innerText = 'No players found with that UID prefix.'; return; }

    statusText.innerText = `Found ${matches.length} player(s)`; suggestionsContainer.innerHTML = '';
    matches.forEach(player => {
        const isCreator = (player.Subscription || '').toLowerCase() === 'creator';
        const originalUid = player.Uid.toString(); const matchedPart = originalUid.substring(0, query.length); const restPart = originalUid.substring(query.length);
        const highlightedUID = `<span style="color:#ffffff;">${matchedPart}</span>${restPart}`;
        
        if(isCreator) {
            suggestionsContainer.innerHTML += `
            <div class="player-card tier-creator" onclick="openModal('${player.Uid}')">
                <div class="player-card-photo-wrapper"><img src="${player.Photo || 'https://via.placeholder.css/70'}" class="player-card-photo" draggable="false"></div>
                <div class="player-card-info">
                    <div class="player-card-name">${player.GameName || 'Unknown'}</div>
                    <div class="player-card-uid">UID: ${highlightedUID}</div>
                    <div class="badge-container"><div class="creator-badge-list">CONTENT CREATOR</div></div>
                </div>
                <div class="mini-tier-icon" style="color: #ff4c4c;"><i class="fas fa-video"></i></div>
            </div>`;
        } else {
            const wins = parseInt(player.Win) || 0; const kills = parseInt(player.Kill) || 0; 
            const rankIndex = getPlayerRankIndex(player.Uid); const tierInfo = getTierInfo(rankIndex);
            suggestionsContainer.innerHTML += `
            <div class="player-card ${tierInfo.class}" onclick="openModal('${player.Uid}')">
                <div class="card-rank-badge">#${rankIndex + 1}</div>
                <div class="player-card-photo-wrapper"><img src="${player.Photo || 'https://via.placeholder.css/70'}" class="player-card-photo" draggable="false"></div>
                <div class="player-card-info">
                    <div class="player-card-name">${player.GameName || 'Unknown'}</div>
                    <div class="player-card-uid">UID: ${highlightedUID}</div>
                    <div class="badge-container"><div class="win-badge">WINS: ${wins}</div><div class="kill-badge">KILLS: ${kills}</div></div>
                </div>
                <div class="mini-tier-icon" style="color: ${tierInfo.color};"><i class="fas ${tierInfo.icon}"></i></div>
            </div>`;
        }
    });
    applyTiltEffect();
    if (matches.length === 1 && matches[0].Uid.toString().toLowerCase() === query) { if (autoOpenTriggeredFor !== query) { autoOpenTriggeredFor = query; setTimeout(() => openModal(matches[0].Uid), 300); } } else { autoOpenTriggeredFor = ""; }
});

document.addEventListener("DOMContentLoaded", () => {
    const errorMsg = document.getElementById('error-message'); const skeletonContainer = document.getElementById('skeleton-container');
    fetch(scriptUrl).then(res => res.json()).then(data => {
        if(data.error) { skeletonContainer.style.display = 'none'; errorMsg.style.display = 'block'; errorMsg.innerText = "Error: " + data.error; return; }
        if(data.length === 0) { skeletonContainer.style.display = 'none'; errorMsg.style.display = 'block'; errorMsg.innerText = "Database is empty."; return; }
        
        globalPlayerData = data.sort((a, b) => {
            const winA = parseInt(a.Win) || 0; const winB = parseInt(b.Win) || 0;
            if (winA !== winB) return winB - winA; 
            const killA = parseInt(a.Kill) || 0; const killB = parseInt(b.Kill) || 0; return killB - killA; 
        });
        
        esportPool = globalPlayerData.filter(p => (p.Subscription || '').toLowerCase() !== 'creator');
        applyFiltersAndSort();

        const spinner = document.getElementById('loading-spinner');
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                if(currentPage * itemsPerPage < filteredData.length) {
                    spinner.style.display = 'block';
                    setTimeout(() => { currentPage++; renderPage(); spinner.style.display = 'none'; }, 400);
                }
            }
        }, { rootMargin: "100px" });
        observer.observe(document.getElementById('scroll-trigger'));

        skeletonContainer.style.display = 'none'; document.getElementById('section-b').style.display = 'flex'; renderPage();

        if (window.location.hash.startsWith('#profile-')) {
            const uid = window.location.hash.replace('#profile-', '');
            openModal(uid, true);
        }
    }).catch(err => { skeletonContainer.style.display = 'none'; errorMsg.style.display = 'block'; errorMsg.innerText = "Failed to connect to server."; });
});

function renderPage() {
    const container = document.getElementById('leaderboard-container'); const start = (currentPage - 1) * itemsPerPage; const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);
    pageData.forEach(player => {
        const isCreator = (player.Subscription || '').toLowerCase() === 'creator';
        if (isCreator) {
            container.innerHTML += `
                <div class="player-card tier-creator" onclick="openModal('${player.Uid}')">
                    <div class="player-card-photo-wrapper"><img src="${player.Photo || 'https://via.placeholder.css/70'}" class="player-card-photo" draggable="false" crossorigin="anonymous"></div>
                    <div class="player-card-info">
                        <div class="player-card-name">${player.GameName || 'Unknown'}</div>
                        <div class="player-card-uid">UID: ${player.Uid}</div>
                        <div class="badge-container"><div class="creator-badge-list">CONTENT CREATOR</div></div>
                    </div>
                    <div class="mini-tier-icon" style="color: #ff4c4c;"><i class="fas fa-video"></i></div>
                </div>`;
        } else {
            const wins = parseInt(player.Win) || 0; const kills = parseInt(player.Kill) || 0; 
            const rankIndex = getPlayerRankIndex(player.Uid); const tierInfo = getTierInfo(rankIndex);
            container.innerHTML += `
                <div class="player-card ${tierInfo.class}" onclick="openModal('${player.Uid}')">
                    <div class="card-rank-badge">#${rankIndex + 1}</div>
                    <div class="player-card-photo-wrapper"><img src="${player.Photo || 'https://via.placeholder.css/70'}" class="player-card-photo" draggable="false" crossorigin="anonymous"></div>
                    <div class="player-card-info">
                        <div class="player-card-name">${player.GameName || 'Unknown'}</div>
                        <div class="player-card-uid">UID: ${player.Uid}</div>
                        <div class="badge-container"><div class="win-badge">WINS: ${wins}</div><div class="kill-badge">KILLS: ${kills}</div></div>
                    </div>
                    <div class="mini-tier-icon" style="color: ${tierInfo.color};"><i class="fas ${tierInfo.icon}"></i></div>
                </div>`;
        }
    });
    applyTiltEffect();
}

window.downloadPostcard = async function(uid) {
    const player = globalPlayerData.find(p => p.Uid.toString() === uid.toString()); if(!player) return;
    const isCreator = (player.Subscription || '').toLowerCase() === 'creator';
    const generator = document.getElementById('postcard-generator');
    const photoUrl = player.Photo || 'https://via.placeholder.css/1080';
    const brandLogoUrl = "https://ik.imagekit.io/5lz94dan6e/Picsart_26-03-30_08-28-40-573.png?updatedAt=1774839553114";
    const fileName = `${(player.GameName || 'Player').replace(/\s+/g, '_')}_Dragon_Profile.png`;

    if(isCreator) {
        let igHandle = player.HisInstagram ? player.HisInstagram.trim() : '';
        if(igHandle && !igHandle.startsWith('@')) igHandle = '@' + igHandle;
        
        let ytHandle = player.HisYoutube ? player.HisYoutube.trim() : '';
        if(ytHandle && !ytHandle.startsWith('@')) ytHandle = '@' + ytHandle;

        generator.className = `tier-creator`;
        generator.innerHTML = `
            <div class="pc-bg" style="background-image: url('${photoUrl}');"></div>
            <div class="pc-content">
                <div class="pc-tier-title">CONTENT CREATOR</div>
                <div class="pc-dp-wrapper"><img class="pc-dp" src="${photoUrl}" crossorigin="anonymous"><div class="pc-icon"><i class="fas fa-video"></i></div></div>
                <div class="pc-name">${player.GameName || 'Unknown'}</div>
                <div class="pc-uid">UID: ${player.Uid}</div>
                <div class="pc-socials-container">
                    ${igHandle ? `<div class="pc-social-row"><i class="fab fa-instagram"></i> ${igHandle}</div>` : ''}
                    ${ytHandle ? `<div class="pc-social-row"><i class="fab fa-youtube"></i> ${ytHandle}</div>` : ''}
                </div>
                <div class="pc-brand"><img src="${brandLogoUrl}" crossorigin="anonymous"></div>
            </div>`;
    } else {
        const rankIndex = getPlayerRankIndex(player.Uid); const tierInfo = getTierInfo(rankIndex);
        const wins = parseInt(player.Win) || 0; const kills = parseInt(player.Kill) || 0;
        generator.className = `tier-${tierInfo.name.toLowerCase()}`;
        generator.innerHTML = `
            <div class="pc-bg" style="background-image: url('${photoUrl}');"></div>
            <div class="pc-content">
                <div class="pc-tier-title">${tierInfo.name} RANK #${rankIndex + 1}</div>
                <div class="pc-dp-wrapper"><img class="pc-dp" src="${photoUrl}" crossorigin="anonymous"><div class="pc-icon"><i class="fas ${tierInfo.icon}"></i></div></div>
                <div class="pc-name">${player.GameName || 'Unknown'}</div>
                <div class="pc-uid">UID: ${player.Uid}</div>
                <div class="pc-stats-container"><div class="pc-stat pc-win">WINS<span>${wins}</span></div><div class="pc-stat pc-kill">KILLS<span>${kills}</span></div></div>
                <div class="pc-brand"><img src="${brandLogoUrl}" crossorigin="anonymous"></div>
            </div>`;
    }

    const btn = document.querySelector('.modal-share-btn'); const oldText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> GENERATING...'; btn.style.pointerEvents = 'none';
    await Promise.all(Array.from(generator.querySelectorAll('img')).map(img => {
        if(img.complete) return Promise.resolve();
        return new Promise(resolve => { img.onload = img.onerror = resolve; });
    }));
    
    try {
        const canvas = await html2canvas(generator, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#000', width: 1080, height: 1080 });
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        
        try {
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], fileName, { type: 'image/png' });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({ title: 'Dragon Tournament Profile', text: `Check out my Profile!`, files: [file] });
            } else { throw new Error("Share not supported"); }
        } catch (shareErr) {
            document.getElementById('fallback-generated-img').src = dataUrl;
            const dlBtn = document.getElementById('fallback-direct-download-btn');
            dlBtn.onclick = function() {
                const link = document.createElement('a'); link.download = fileName; link.href = dataUrl; link.click();
            };
            document.getElementById('share-fallback-modal').style.display = 'flex';
        }

    } catch (e) { console.error("Could not generate postcard", e); alert("Sorry, an error occurred while creating the postcard."); }
    btn.innerHTML = oldText; btn.style.pointerEvents = 'auto';
}

window.openModal = function(uid, fromRoute = false) {
    const player = globalPlayerData.find(p => p.Uid.toString() === uid.toString()); 
    
    if(!player) { window.location.hash = 'home'; return; }
    if (!fromRoute) { window.location.hash = `profile-${uid}`; }

    const modal = document.getElementById('profile-modal'); 
    const innerContent = document.getElementById('modal-inner-content');
    
    innerContent.setAttribute('data-current-uid', uid);
    
    if (player.Photo && player.Photo.trim() !== '') modal.style.backgroundImage = `url('${player.Photo}')`;
    else { modal.style.backgroundImage = 'none'; modal.style.backgroundColor = '#0b0c10'; }

    const isCreator = (player.Subscription || '').toLowerCase() === 'creator';

    const profileImageUrl = player.Photo && player.Photo.trim() !== '' ? player.Photo : "https://ik.imagekit.io/5lz94dan6e/Picsart_26-02-26_14-18-51-931.png?updatedAt=1772095781110";
    let profileDesc = isCreator ? `Check out Content Creator ${player.GameName} on Dragon Tournaments!` : `Check out ${player.GameName}'s E-Sport profile on Dragon Tournaments!`;
    updateMetaTags(`${player.GameName} | Dragon Tournaments`, profileDesc, profileImageUrl);
    
    let galleryHTML = '';
    const pics = [player.AlbumPic1, player.AlbumPic2, player.AlbumPic3, player.AlbumPic4, player.AlbumPic5];
    pics.forEach(pic => { if(pic && pic.trim() !== "") galleryHTML += `<img src="${pic}" class="gallery-img" draggable="false" loading="lazy" style="border: 1px solid rgba(255,255,255,0.1);" onclick="openLightbox('${pic}')">`; });

    if(isCreator) {
        document.body.className = `scroll-creator`; innerContent.className = `modal-content tier-creator`;
        let videoButtonsHTML = '';
        if (player.YoutubeVideo || player.InstaShort1 || player.InstaShort2) {
            videoButtonsHTML += `<div class="video-grid">`;
            if (player.YoutubeVideo) videoButtonsHTML += `<div class="cyber-video-btn yt" onclick="openDeepLinkApp('${player.YoutubeVideo}', event)"><i class="fab fa-youtube"></i><span>Must To Watch</span></div>`;
            if (player.InstaShort1) videoButtonsHTML += `<div class="cyber-video-btn ig" onclick="openDeepLinkApp('${player.InstaShort1}', event)"><i class="fab fa-instagram"></i><span>Must To Watch</span></div>`;
            if (player.InstaShort2) videoButtonsHTML += `<div class="cyber-video-btn ig" onclick="openDeepLinkApp('${player.InstaShort2}', event)"><i class="fab fa-instagram"></i><span>Must To Watch</span></div>`;
            videoButtonsHTML += `</div>`;
        }

        const cleanIg = player.HisInstagram ? player.HisInstagram.replace(/^@/, '').trim() : '';
        const cleanYt = player.HisYoutube ? player.HisYoutube.replace(/^@/, '').trim() : '';

        innerContent.innerHTML = `
            <button class="modal-share-btn" onclick="downloadPostcard('${player.Uid}')"><i class="fas fa-share-alt"></i> Share Card</button>
            <div class="creator-header-section">
                <div class="creator-photo-wrapper">
                    <img src="${player.Photo || 'https://via.placeholder.css/150'}" alt="Photo" class="creator-photo" draggable="false" crossorigin="anonymous" onclick="openPfpLightbox('${player.Photo}')">
                </div>
                <div class="creator-info-wrapper">
                    <div class="creator-name">${player.GameName || 'Unknown'}</div>
                    <div class="creator-uid-container">
                        <span>UID: ${player.Uid}</span>
                        <i class="fas fa-copy copy-btn" title="Copy UID" onclick="copyText('${player.Uid}', this)" style="font-size:14px;"></i>
                    </div>
                    ${player.SquadRole ? `<div style="margin-top:8px; font-size:10px; color:#ff4c4c; border:1px solid rgba(255,76,76,0.3); background: rgba(255,76,76,0.1); padding:4px 8px; border-radius:6px; letter-spacing:1px; text-transform:uppercase;"><i class="fas fa-crosshairs"></i> ${player.SquadRole}</div>` : ''}
                </div>
            </div>
            ${player.Bio ? `<div class="creator-bio">"${player.Bio}"</div>` : ''}
            ${(cleanIg || cleanYt) ? `<div class="creator-social-header">${player.GameName} Social media 👇🏻</div>` : ''}
            <div class="social-container" style="justify-content: center;">
                ${cleanIg ? `<div class="social-icon creator-red" onclick="openSocialApp('${cleanIg}', 'ig')"><i class="fab fa-instagram"></i></div>` : ''}
                ${cleanYt ? `<div class="social-icon creator-red" onclick="openSocialApp('${cleanYt}', 'yt')"><i class="fab fa-youtube"></i></div>` : ''}
            </div>
            ${videoButtonsHTML}
            ${galleryHTML ? `<div class="gallery-container">${galleryHTML}</div>` : ''}
        `;

    } else {
        const wins = parseInt(player.Win) || 0; const kills = parseInt(player.Kill) || 0; 
        const rankIndex = getPlayerRankIndex(player.Uid); const tierInfo = getTierInfo(rankIndex);
        document.body.className = `scroll-${tierInfo.name.toLowerCase()}`; innerContent.className = `modal-content ${tierInfo.class}`;

        let videoButtonsHTML = '';
        if (player.YoutubeVideo || player.InstaShort1 || player.InstaShort2) {
            videoButtonsHTML += `<div class="video-grid">`;
            if (player.YoutubeVideo) videoButtonsHTML += `<div class="cyber-video-btn yt" onclick="openDeepLinkApp('${player.YoutubeVideo}', event)"><i class="fab fa-youtube"></i><span>Tournament</span></div>`;
            if (player.InstaShort1) videoButtonsHTML += `<div class="cyber-video-btn ig" onclick="openDeepLinkApp('${player.InstaShort1}', event)"><i class="fab fa-instagram"></i><span>Funny Reel</span></div>`;
            if (player.InstaShort2) videoButtonsHTML += `<div class="cyber-video-btn ig" onclick="openDeepLinkApp('${player.InstaShort2}', event)"><i class="fab fa-instagram"></i><span>Commentary</span></div>`;
            videoButtonsHTML += `</div>`;
        }

        const cleanIg = player.HisInstagram ? player.HisInstagram.replace(/^@/, '').trim() : '';
        const cleanYt = player.HisYoutube ? player.HisYoutube.replace(/^@/, '').trim() : '';

        innerContent.innerHTML = `
            <button class="modal-share-btn" onclick="downloadPostcard('${player.Uid}')"><i class="fas fa-share-alt"></i> Share Card</button>
            <div class="modal-tier-box" style="color: ${tierInfo.color};">${tierInfo.name}</div>
            <div class="modal-photo-wrapper">
                <img src="${player.Photo || 'https://via.placeholder.css/150'}" alt="Photo" class="modal-photo" draggable="false" crossorigin="anonymous" onclick="openPfpLightbox('${player.Photo}')">
                <div class="tier-icon-badge" style="color: ${tierInfo.color};"><i class="fas ${tierInfo.icon}"></i></div>
            </div>
            <div class="name-copy-container">
                <div class="modal-name">${player.GameName || 'Unknown'}</div>
                <i class="fas fa-copy copy-btn" title="Copy Name" onclick="copyText('${player.GameName || ''}', this)"></i>
            </div>
            <div class="uid-copy-container">
                <span>UID: ${player.Uid}</span>
                <i class="fas fa-copy copy-btn" title="Copy UID" onclick="copyText('${player.Uid}', this)"></i>
            </div>
            ${player.SquadRole ? `<div class="modal-squadrole"><i class="fas fa-crosshairs"></i> ROLE: ${player.SquadRole}</div>` : ''}
            <div class="detail-badges-container">
                <div class="detail-win-badge">WINS: ${wins}</div>
                <div class="detail-kill-badge">KILLS: ${kills}</div>
            </div>
            ${videoButtonsHTML}
            ${player.Bio ? `<div class="modal-bio">"${player.Bio}"</div>` : ''}
            <div class="social-container">
                ${cleanIg ? `<div class="social-icon insta" onclick="openSocialApp('${cleanIg}', 'ig')"><i class="fab fa-instagram"></i></div>` : ''}
                ${cleanYt ? `<div class="social-icon yt" onclick="openSocialApp('${cleanYt}', 'yt')"><i class="fab fa-youtube"></i></div>` : ''}
            </div>
            ${galleryHTML ? `<div class="gallery-container">${galleryHTML}</div>` : ''}
        `;
    }
}
