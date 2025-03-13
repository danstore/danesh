// User authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    const userAuthModal = document.getElementById('user-auth-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const userProfileBtn = document.getElementById('user-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userProfileInfo = document.getElementById('user-profile-info');
    
    // Initialize login state
    checkLoginState();
    
    // Event listeners for showing login/register modal
    document.querySelectorAll('.show-login-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            showLoginModal('login');
        });
    });
    
    // Switch between login and register tabs
    loginTab.addEventListener('click', function() {
        switchAuthTab('login');
    });
    
    registerTab.addEventListener('click', function() {
        switchAuthTab('register');
    });
    
    // Close modal when clicking on the close button or outside
    document.querySelector('#user-auth-modal .close-modal').addEventListener('click', function() {
        userAuthModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === userAuthModal) {
            userAuthModal.style.display = 'none';
        }
    });
    
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Check if user exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Set login state
            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email,
                favorites: user.favorites || []
            }));
            
            // Update UI
            checkLoginState();
            userAuthModal.style.display = 'none';
            
            // Show success message
            alert(translations[currentLanguage].loginSuccess);
        } else {
            alert(translations[currentLanguage].loginError);
        }
    });
    
    // Register form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        // Check if email is already registered
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(u => u.email === email)) {
            alert(translations[currentLanguage].emailExists);
            return;
        }
        
        // Add new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            favorites: [],
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Log in the new user
        localStorage.setItem('currentUser', JSON.stringify({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            favorites: []
        }));
        
        // Update UI
        checkLoginState();
        userAuthModal.style.display = 'none';
        
        // Show success message
        alert(translations[currentLanguage].registerSuccess);
    });
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            checkLoginState();
            
            // Redirect to home if on profile page
            if (window.location.hash === '#profile') {
                window.location.hash = '#home';
            }
        });
    }
    
    // Check login state and update UI
    function checkLoginState() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
            // User is logged in
            document.querySelectorAll('.logged-out').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.logged-in').forEach(el => el.style.display = 'block');
            
            // Set user name
            document.getElementById('user-name').textContent = currentUser.name;
            
            // Update profile info if exists
            if (userProfileInfo) {
                userProfileInfo.innerHTML = `
                    <h3>${currentUser.name}</h3>
                    <p>${currentUser.email}</p>
                `;
            }
        } else {
            // User is logged out
            document.querySelectorAll('.logged-out').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.logged-in').forEach(el => el.style.display = 'none');
        }
    }
    
    // Show login modal with specified tab
    function showLoginModal(tab) {
        switchAuthTab(tab);
        userAuthModal.style.display = 'block';
    }
    
    // Switch between login and register tabs
    function switchAuthTab(tab) {
        if (tab === 'login') {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
        }
    }
    
    // Add to favorites functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-favorites')) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            
            if (!currentUser) {
                showLoginModal('login');
                return;
            }
            
            const productId = parseInt(e.target.getAttribute('data-id'));
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            
            if (userIndex !== -1) {
                if (!users[userIndex].favorites) {
                    users[userIndex].favorites = [];
                }
                
                // Toggle favorite status
                const favoriteIndex = users[userIndex].favorites.indexOf(productId);
                if (favoriteIndex === -1) {
                    // Add to favorites
                    users[userIndex].favorites.push(productId);
                    e.target.innerHTML = '<i class="fas fa-heart"></i>';
                    alert(translations[currentLanguage].addedToFavorites);
                } else {
                    // Remove from favorites
                    users[userIndex].favorites.splice(favoriteIndex, 1);
                    e.target.innerHTML = '<i class="far fa-heart"></i>';
                    alert(translations[currentLanguage].removedFromFavorites);
                }
                
                // Update localStorage
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify({
                    ...currentUser,
                    favorites: users[userIndex].favorites
                }));
            }
        }
    });
});