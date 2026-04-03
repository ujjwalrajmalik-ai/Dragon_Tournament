// --- UNIVERSAL SECURE AUTHENTICATION & UI CONTROLLER --- //

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4arq66EEVVkiNDuCrPLfwzmgmvfEvhELtF7gKU4Kv9PGTaMUpLeQNITua-n9X7hdP/exec";

// Safe Event Listener Helper (Prevents errors if an element is missing on a specific page)
function addEvent(id, eventType, callback) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(eventType, callback);
}

// UI Elements (Safe Fetch)
const uiOverlay = document.getElementById('ui-overlay');
const modalOverlay = document.getElementById('modal-overlay');
const dialogOverlay = document.getElementById('dialog-overlay');

// --- OVERLAY & MODAL CONTROLLERS --- //
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
    if (modalOverlay) modalOverlay.classList.add('active');
}
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
    if (modalOverlay) modalOverlay.classList.remove('active');
}

// Cyber Alert System
window.showAlert = function(title, msg) {
    const alertBox = document.getElementById('cyber-alert');
    if (!alertBox) return alert(title + ": " + msg); // Fallback for pages without modal
    
    document.getElementById('alert-title').innerText = title;
    document.getElementById('alert-msg').innerText = msg;
    alertBox.classList.add('active');
    if (dialogOverlay) dialogOverlay.classList.add('active');
}

addEvent('alert-ok-btn', 'click', () => {
    document.getElementById('cyber-alert').classList.remove('active');
    if (dialogOverlay) dialogOverlay.classList.remove('active');
});

// Sidebar Logic
addEvent('open-sidebar-btn', 'click', () => {
    document.getElementById('sidebar').classList.add('active');
    if (uiOverlay) uiOverlay.classList.add('active');
});

// Profile Sheet & Full Profile Logic
addEvent('open-profile-btn', 'click', () => {
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    if (user) {
        populateFullProfile(user);
        const fp = document.getElementById('full-profile-modal');
        if (fp) fp.classList.add('active');
    } else {
        const ps = document.getElementById('profile-sheet');
        if (ps) {
            ps.classList.add('active');
            if (uiOverlay) uiOverlay.classList.add('active');
        }
    }
});

addEvent('close-fp-btn', 'click', () => {
    document.getElementById('full-profile-modal').classList.remove('active');
});

// Global Overlay Click
if (uiOverlay) {
    uiOverlay.addEventListener('click', () => {
        const sb = document.getElementById('sidebar');
        const ps = document.getElementById('profile-sheet');
        if (sb) sb.classList.remove('active');
        if (ps) ps.classList.remove('active');
        uiOverlay.classList.remove('active');
    });
}

// Navigation Transitions
document.querySelectorAll('.nav-route').forEach(el => {
    el.addEventListener('click', (e) => {
        const url = el.getAttribute('data-url');
        if(url) {
            const transition = document.getElementById('app-transition-overlay');
            if (transition) {
                transition.style.opacity = '1';
                setTimeout(() => window.location.href = url, 300);
            } else {
                window.location.href = url;
            }
        }
    });
});

// --- CORE SYSTEM: INITIALIZATION --- //
function initApp() {
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    if (user) {
        const icon = document.getElementById('header-user-icon');
        const img = document.getElementById('header-user-img');
        if (icon) icon.style.display = 'none';
        if (img) {
            img.style.display = 'block';
            img.src = user.ProfilePic || 'https://via.placeholder.css/40';
        }
    }
}
initApp();

// --- API ACTIONS --- //

// 1. LOGIN
addEvent('trigger-login-btn', 'click', () => {
    document.getElementById('profile-sheet').classList.remove('active');
    if (uiOverlay) uiOverlay.classList.remove('active');
    setTimeout(() => openModal('login-modal'), 300);
});

addEvent('login-form', 'submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-login-btn');
    const txt = document.getElementById('login-btn-text');
    const spin = document.getElementById('login-spinner');
    
    btn.style.pointerEvents = 'none'; txt.innerText = 'VERIFYING...'; spin.style.display = 'block';

    const mobile = document.getElementById('login-mobile').value;
    const pass = document.getElementById('login-password').value;

    try {
        const res = await fetch(`${SCRIPT_URL}?action=login&mobile=${encodeURIComponent(mobile)}&password=${encodeURIComponent(pass)}`);
        const data = await res.json();

        if (data.success) {
            localStorage.setItem('dragonUser', JSON.stringify(data.user));
            closeModal('login-modal');
            initApp();
            showAlert('ACCESS GRANTED', `Welcome back, ${data.user.GameName}!`);
        } else {
            showAlert('ACCESS DENIED', data.message);
        }
    } catch (err) {
        showAlert('SYSTEM ERROR', 'Network connection failed.');
    } finally {
        btn.style.pointerEvents = 'auto'; txt.innerText = 'VERIFY IDENTITY'; spin.style.display = 'none';
    }
});

// 2. LOGOUT
addEvent('logout-btn', 'click', () => {
    localStorage.removeItem('dragonUser');
    window.location.reload();
});

// 3. POPULATE FULL PROFILE
function populateFullProfile(user) {
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    const setSrc = (id, val) => { const el = document.getElementById(id); if (el) el.src = val; };
    
    setSrc('fp-avatar-img', user.ProfilePic || 'https://via.placeholder.css/100');
    setTxt('fp-uid-txt', `UID: ${user.GameUid}`);
    setTxt('fp-name-txt', user.GameName);
    setTxt('fp-coin', user.Coin || 0);
    setTxt('fp-wcoin', user.WCoin || 0);
    setTxt('fp-win', user.Win || 0);
    setTxt('fp-kill', user.Kill || 0);
    setTxt('fp-matches', user.MatchPlayed || 0);
    setTxt('fp-top10', user.Top10 || 0);
    setTxt('fp-mobile', user.MobileNumber);
    setTxt('fp-role', user.SquadRole || 'None');
    setTxt('fp-bio', user.Bio || 'No Bio');
    setTxt('fp-earnings', user.TotalEarnings || 0);
    setTxt('fp-sub', user.Subscription || 'Free');
    
    const igLink = document.getElementById('fp-ig-link'); if (igLink) igLink.href = user.Instagram || '#';
    const ytLink = document.getElementById('fp-yt-link'); if (ytLink) ytLink.href = user.Youtube || '#';
}

// 4. WITHDRAWAL SYSTEM
addEvent('trigger-withdraw-btn', 'click', () => {
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    if (!user) return showAlert('ERROR', 'You must be logged in.');
    if (Number(user.WCoin) < 50) return showAlert('INSUFFICIENT FUNDS', 'You need at least ₹50 to withdraw.');
    
    document.getElementById('wd-amount').max = user.WCoin;
    openModal('withdraw-modal');
});

addEvent('close-wd-btn', 'click', () => closeModal('withdraw-modal'));

addEvent('withdraw-form', 'submit', async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    const btn = document.getElementById('submit-wd-btn');
    const txt = document.getElementById('wd-btn-text');
    const spin = document.getElementById('wd-spinner');
    
    const amount = document.getElementById('wd-amount').value;
    const upi = document.getElementById('wd-upi').value;

    if (Number(amount) > Number(user.WCoin)) return showAlert('ERROR', 'You cannot withdraw more than you have.');

    btn.style.pointerEvents = 'none'; txt.innerText = 'PROCESSING...'; spin.style.display = 'block';

    try {
        const res = await fetch(`${SCRIPT_URL}?action=withdraw&uid=${encodeURIComponent(user.GameUid)}&amount=${encodeURIComponent(amount)}&upi=${encodeURIComponent(upi)}`);
        const data = await res.json();

        if (data.success) {
            user.WCoin = Number(user.WCoin) - Number(amount);
            localStorage.setItem('dragonUser', JSON.stringify(user));
            populateFullProfile(user);
            closeModal('withdraw-modal');
            showAlert('TRANSACTION SECURE', 'Your withdrawal request has been sent to admins.');
        } else {
            showAlert('TRANSACTION FAILED', data.message);
        }
    } catch (err) {
        showAlert('SYSTEM ERROR', 'Network connection failed.');
    } finally {
        btn.style.pointerEvents = 'auto'; txt.innerText = 'SUBMIT REQUEST'; spin.style.display = 'none';
    }
});

// 5. PROFILE EDIT SYSTEM
let pendingEditField = ''; let pendingEditCost = 0;

window.initiateEdit = function(field, cost, label) {
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    if (!user) return;
    if (Number(user.Coin) < cost) return showAlert('INSUFFICIENT COINS', `Updating ${label} costs ${cost} Coins. You have ${user.Coin}.`);

    pendingEditField = field; pendingEditCost = cost;
    
    document.getElementById('prompt-title').innerText = `EDIT ${label.toUpperCase()}`;
    document.getElementById('prompt-msg').innerText = cost > 0 ? `Cost: ${cost} Coins. Enter your new data below:` : `Enter your new ${label} below:`;
    document.getElementById('prompt-input').value = user[field] || '';
    
    document.getElementById('cyber-prompt').classList.add('active');
    if (dialogOverlay) dialogOverlay.classList.add('active');
}

addEvent('prompt-cancel-btn', 'click', () => {
    document.getElementById('cyber-prompt').classList.remove('active');
    if (dialogOverlay) dialogOverlay.classList.remove('active');
});

addEvent('prompt-save-btn', 'click', async () => {
    const user = JSON.parse(localStorage.getItem('dragonUser'));
    const newValue = document.getElementById('prompt-input').value.trim();
    if (!newValue) return showAlert('ERROR', 'Field cannot be empty.');

    const btn = document.getElementById('prompt-save-btn');
    btn.innerText = 'SAVING...'; btn.style.pointerEvents = 'none';

    try {
        const res = await fetch(`${SCRIPT_URL}?action=updateProfile&uid=${encodeURIComponent(user.GameUid)}&field=${encodeURIComponent(pendingEditField)}&value=${encodeURIComponent(newValue)}&cost=${pendingEditCost}`);
        const data = await res.json();

        if (data.success) {
            user.Coin = Number(user.Coin) - pendingEditCost;
            user[pendingEditField] = newValue;
            localStorage.setItem('dragonUser', JSON.stringify(user));
            
            populateFullProfile(user);
            document.getElementById('cyber-prompt').classList.remove('active');
            if (dialogOverlay) dialogOverlay.classList.remove('active');
            showAlert('DATA UPDATED', `Your profile has been successfully modified.`);
        } else {
            showAlert('UPDATE FAILED', data.message);
        }
    } catch (err) {
        showAlert('SYSTEM ERROR', 'Network connection failed.');
    } finally {
        btn.innerText = 'SAVE'; btn.style.pointerEvents = 'auto';
    }
});
