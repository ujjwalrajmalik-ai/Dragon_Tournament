// --- auth.js (Master Controller) ---

const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz4arq66EEVVkiNDuCrPLfwzmgmvfEvhELtF7gKU4Kv9PGTaMUpLeQNITua-n9X7hdP/exec";

// Global States
let authCreds = JSON.parse(localStorage.getItem('dragonAuth')) || null;
let currentUser = null; 

// Make functions global so inline HTML can access them
window.cyberAlert = function(msg, title = "SYSTEM MESSAGE") {
    return new Promise(resolve => {
        document.getElementById('alert-title').innerText = title;
        document.getElementById('alert-msg').innerText = msg;
        document.getElementById('dialog-overlay').classList.add('active');
        document.getElementById('cyber-alert').classList.add('active');
        
        document.getElementById('alert-ok-btn').onclick = () => {
            document.getElementById('cyber-alert').classList.remove('active');
            document.getElementById('dialog-overlay').classList.remove('active');
            resolve();
        };
    });
};

window.cyberConfirm = function(msg, title = "CONFIRMATION") {
    return new Promise(resolve => {
        document.getElementById('confirm-title').innerText = title;
        document.getElementById('confirm-msg').innerText = msg;
        document.getElementById('dialog-overlay').classList.add('active');
        document.getElementById('cyber-confirm').classList.add('active');
        
        document.getElementById('confirm-yes-btn').onclick = () => {
            document.getElementById('cyber-confirm').classList.remove('active');
            document.getElementById('dialog-overlay').classList.remove('active');
            resolve(true);
        };
        document.getElementById('confirm-no-btn').onclick = () => {
            document.getElementById('cyber-confirm').classList.remove('active');
            document.getElementById('dialog-overlay').classList.remove('active');
            resolve(false);
        };
    });
};

window.cyberPrompt = function(msg, defaultVal, title = "UPDATE DATA") {
    return new Promise(resolve => {
        document.getElementById('prompt-title').innerText = title;
        document.getElementById('prompt-msg').innerText = msg;
        const input = document.getElementById('prompt-input');
        input.value = defaultVal || '';
        
        document.getElementById('dialog-overlay').classList.add('active');
        document.getElementById('cyber-prompt').classList.add('active');
        
        document.getElementById('prompt-save-btn').onclick = () => {
            document.getElementById('cyber-prompt').classList.remove('active');
            document.getElementById('dialog-overlay').classList.remove('active');
            resolve(input.value);
        };
        document.getElementById('prompt-cancel-btn').onclick = () => {
            document.getElementById('cyber-prompt').classList.remove('active');
            document.getElementById('dialog-overlay').classList.remove('active');
            resolve(null);
        };
    });
};

window.renderUI = function() {
    // Top bar checks
    const userIcon = document.getElementById('header-user-icon');
    const userImg = document.getElementById('header-user-img');
    
    if (currentUser) {
        if(userIcon) userIcon.style.display = 'none';
        if(userImg) {
            userImg.src = currentUser.ProfilePic || 'https://via.placeholder.com/150';
            userImg.style.display = 'block';
        }

        // Safe updates for Full Profile
        const setTxt = (id, val) => { let el = document.getElementById(id); if(el) el.innerText = val; };
        
        let fpImg = document.getElementById('fp-avatar-img');
        if(fpImg) fpImg.src = currentUser.ProfilePic || 'https://via.placeholder.com/150';
        
        setTxt('fp-uid-txt', `UID: ${currentUser.GameUid}`);
        setTxt('fp-name-txt', currentUser.GameName);
        setTxt('fp-coin', currentUser.Coin || 0);
        setTxt('fp-wcoin', currentUser.WCoin || 0);
        setTxt('fp-win', currentUser.Win || 0);
        setTxt('fp-kill', currentUser.Kill || 0);
        setTxt('fp-matches', currentUser.MatchPlayed || 0);
        setTxt('fp-top10', currentUser.Top10 || 0);
        setTxt('fp-mobile', currentUser.MobileNumber);
        setTxt('fp-role', currentUser.SquadRole || 'Unassigned');
        setTxt('fp-bio', currentUser.Bio || 'No bio set.');
        setTxt('fp-earnings', currentUser.TotalEarnings || 0);
        setTxt('fp-sub', currentUser.Subscription || 'Free');

        let igLink = document.getElementById('fp-ig-link');
        let ytLink = document.getElementById('fp-yt-link');
        if(igLink) igLink.href = currentUser.Instagram || '#';
        if(ytLink) ytLink.href = currentUser.Youtube || '#';

    } else {
        if(userIcon) { userIcon.className = 'fas fa-user'; userIcon.style.display = 'block'; }
        if(userImg) userImg.style.display = 'none';
    }
};

window.closeAllUI = function() {
    ['ui-overlay', 'modal-overlay', 'sidebar', 'profile-sheet', 'login-modal', 'withdraw-modal'].forEach(id => {
        let el = document.getElementById(id);
        if(el) el.classList.remove('active');
    });
};

window.initiateEdit = async function(fieldKey, cost, displayName) {
    if (!currentUser) return;
    if (fieldKey === 'MobileNumber') return; 

    let msg = cost > 0 ? `Update ${displayName} for ${cost} coins? (Bal: ${currentUser.Coin})` : `Update your ${displayName}?`;

    if (await cyberConfirm(msg, "EDIT PROFILE")) {
        if (currentUser.Coin < cost) return cyberAlert(`Insufficient coins! Need ${cost}.`, "ERROR");
        
        let newValue = await cyberPrompt(`Enter new ${displayName}:`, currentUser[fieldKey]);
        if (newValue && newValue !== currentUser[fieldKey]) {
            let prevCoin = currentUser.Coin; let prevVal = currentUser[fieldKey];
            currentUser.Coin -= cost; currentUser[fieldKey] = newValue; window.renderUI();

            try {
                const res = await fetch(`${GAS_WEB_APP_URL}?action=updateProfile&uid=${currentUser.GameUid}&field=${fieldKey}&value=${encodeURIComponent(newValue)}&cost=${cost}`);
                const data = await res.json();
                
                if(data.success) await cyberAlert(`${displayName} updated successfully!`, "SUCCESS");
                else {
                    currentUser.Coin = prevCoin; currentUser[fieldKey] = prevVal; window.renderUI();
                    await cyberAlert("Failed: " + data.message, "ERROR");
                }
            } catch(e) {
                currentUser.Coin = prevCoin; currentUser[fieldKey] = prevVal; window.renderUI();
                await cyberAlert("Network error.", "ERROR");
            }
        }
    }
};

// Wait for DOM to load before attaching events
document.addEventListener('DOMContentLoaded', () => {
    
    // Background Authentication
    async function runBackgroundAuth() {
        if (!authCreds) { window.renderUI(); return; }
        const userIcon = document.getElementById('header-user-icon');
        if(userIcon) { userIcon.className = 'fas fa-spinner fa-spin'; userIcon.style.color = '#66fcf1'; }
        
        try {
            const res = await fetch(`${GAS_WEB_APP_URL}?action=login&mobile=${encodeURIComponent(authCreds.mobile)}&password=${encodeURIComponent(authCreds.password)}`);
            const data = await res.json();
            if (data.success) currentUser = data.user;
            else { localStorage.removeItem('dragonAuth'); authCreds = null; }
        } catch(e) { console.log("Background sync network error"); }
        
        if(userIcon) userIcon.style.color = '';
        window.renderUI();
    }
    runBackgroundAuth();

    // Event Listeners (Safe Checks)
    const addSafeListener = (id, event, callback) => {
        let el = document.getElementById(id);
        if(el) el.addEventListener(event, callback);
    };

    addSafeListener('open-sidebar-btn', 'click', () => { document.getElementById('ui-overlay').classList.add('active'); document.getElementById('sidebar').classList.add('active'); });
    addSafeListener('close-fp-btn', 'click', () => document.getElementById('full-profile-modal').classList.remove('active'));
    addSafeListener('ui-overlay', 'click', window.closeAllUI);
    addSafeListener('modal-overlay', 'click', window.closeAllUI);
    addSafeListener('close-wd-btn', 'click', window.closeAllUI);

    addSafeListener('open-profile-btn', 'click', () => {
        if (currentUser) {
            document.getElementById('full-profile-modal').classList.add('active');
        } else if (authCreds) {
            window.cyberAlert("Syncing your profile data peacefully... Please wait a second.", "LOADING");
        } else {
            document.getElementById('ui-overlay').classList.add('active'); 
            document.getElementById('profile-sheet').classList.add('active'); 
        }
    });

    addSafeListener('trigger-login-btn', 'click', () => {
        document.getElementById('profile-sheet').classList.remove('active');
        document.getElementById('ui-overlay').classList.remove('active');
        setTimeout(() => { 
            document.getElementById('modal-overlay').classList.add('active'); 
            document.getElementById('login-modal').classList.add('active'); 
        }, 100);
    });

    // Login Form Submit
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const mobile = document.getElementById('login-mobile').value;
            const password = document.getElementById('login-password').value;
            
            document.getElementById('login-btn-text').style.display = 'none';
            document.getElementById('login-spinner').style.display = 'block';

            try {
                const res = await fetch(`${GAS_WEB_APP_URL}?action=login&mobile=${encodeURIComponent(mobile)}&password=${encodeURIComponent(password)}`);
                const data = await res.json();
                
                document.getElementById('login-btn-text').style.display = 'inline';
                document.getElementById('login-spinner').style.display = 'none';

                if (data.success) {
                    currentUser = data.user;
                    authCreds = { mobile: mobile, password: password };
                    localStorage.setItem('dragonAuth', JSON.stringify(authCreds));
                    window.renderUI(); window.closeAllUI();
                } else await window.cyberAlert(data.message || 'Invalid Credentials', "LOGIN FAILED");
            } catch(err) {
                document.getElementById('login-btn-text').style.display = 'inline';
                document.getElementById('login-spinner').style.display = 'none';
                await window.cyberAlert('Network error connecting to database.', 'ERROR');
            }
        });
    }

    addSafeListener('logout-btn', 'click', async () => {
        if(await window.cyberConfirm("Are you sure you want to log out?", "LOGOUT")) {
            localStorage.removeItem('dragonAuth'); authCreds = null; currentUser = null;
            document.getElementById('full-profile-modal').classList.remove('active'); window.renderUI();
        }
    });

    // Withdraw Trigger & Submit
    addSafeListener('trigger-withdraw-btn', 'click', () => {
        if (!currentUser) return;
        document.getElementById('modal-overlay').classList.add('active');
        document.getElementById('withdraw-modal').classList.add('active');
    });

    const withdrawForm = document.getElementById('withdraw-form');
    if(withdrawForm) {
        withdrawForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const amount = Number(document.getElementById('wd-amount').value);
            const upi = document.getElementById('wd-upi').value;

            if (amount < 50) return window.cyberAlert("Minimum withdrawal amount is ₹50.", "NOTICE");
            if (currentUser.WCoin < amount) return window.cyberAlert("You don't have enough W-Coins.", "INSUFFICIENT FUNDS");

            document.getElementById('wd-btn-text').style.display = 'none';
            document.getElementById('wd-spinner').style.display = 'block';

            try {
                const res = await fetch(`${GAS_WEB_APP_URL}?action=withdraw&uid=${currentUser.GameUid}&amount=${amount}&upi=${encodeURIComponent(upi)}`);
                const data = await res.json();

                if (data.success) {
                    try {
                        const tgText = `🚨 <b>NEW WITHDRAWAL REQUEST</b> 🚨\n\n👤 <b>Player:</b> ${currentUser.GameName}\n🆔 <b>UID:</b> <code>${currentUser.GameUid}</code>\n💰 <b>Amount:</b> ₹${amount}\n🏦 <b>UPI ID:</b> <code>${upi}</code>`;
                        await fetch(`https://api.telegram.org/bot${data.tgToken}/sendMessage`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ chat_id: data.tgChat, text: tgText, parse_mode: 'HTML' })
                        });
                    } catch (tgError) { console.error("TG Fail", tgError); }

                    currentUser.WCoin -= amount; 
                    window.renderUI();
                    window.closeAllUI(); 
                    document.getElementById('withdraw-form').reset();
                    
                    document.getElementById('wd-btn-text').style.display = 'inline';
                    document.getElementById('wd-spinner').style.display = 'none';
                    
                    await window.cyberAlert("Request Sent! Admins will transfer your funds shortly.", "WITHDRAWAL SUCCESS");
                } else {
                    document.getElementById('wd-btn-text').style.display = 'inline';
                    document.getElementById('wd-spinner').style.display = 'none';
                    await window.cyberAlert(data.message, "ERROR");
                }
            } catch(e) {
                document.getElementById('wd-btn-text').style.display = 'inline';
                document.getElementById('wd-spinner').style.display = 'none';
                await window.cyberAlert("Network Error processing withdrawal.", "ERROR");
            }
        });
    }

    // Navigation Redirect System
    document.querySelectorAll('.nav-route').forEach(route => {
        route.addEventListener('click', function(e) {
            if(e.target.tagName.toLowerCase() === 'a') e.preventDefault();
            const url = this.getAttribute('data-url');
            if (url) {
                window.closeAllUI(); 
                const transitionOverlay = document.getElementById('app-transition-overlay');
                if(transitionOverlay) {
                    transitionOverlay.style.pointerEvents = 'auto';
                    transitionOverlay.style.opacity = '1';
                }
                setTimeout(() => window.location.href = url, 300);
            }
        });
    });

    window.addEventListener('pageshow', () => {
        const transitionOverlay = document.getElementById('app-transition-overlay');
        if(transitionOverlay) { transitionOverlay.style.opacity = '0'; transitionOverlay.style.pointerEvents = 'none'; }
    });

    // Ambient Lighting
    const ambientLight = document.getElementById('ambient-light');
    if(ambientLight) {
        document.querySelectorAll('.hub-card').forEach(card => {
            card.addEventListener('mouseenter', () => ambientLight.style.background = `radial-gradient(circle, ${card.getAttribute('data-color')} 0%, rgba(0,0,0,0) 70%)`);
            card.addEventListener('mouseleave', () => ambientLight.style.background = 'radial-gradient(circle, rgba(102, 252, 241, 0.08) 0%, rgba(0,0,0,0) 60%)');
        });
    }
    
    document.addEventListener('contextmenu', e => e.preventDefault());
});
