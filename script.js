// Function to show Sign Up form with smooth animation
function showSignUp() {
    const container = document.querySelector('.container');
    
    // Add class to trigger CSS animation
    container.classList.add('show-signup');
    
    // Update info content for sign up
    updateInfoContent('signup');
}

// Function to show Login form with smooth animation
function showSignIn() {
    const container = document.querySelector('.container');
    
    // Remove class to return to login view
    container.classList.remove('show-signup');
    
    // Update info content for login
    updateInfoContent('login');
}

// Function to update the info content based on current form
function updateInfoContent(formType) {
    const infoContent = document.querySelector('.info-content');
    
    if (formType === 'signup') {
        infoContent.innerHTML = `
            <h1>Olive jikuze IT solutions</h1>
            <h2>JOIN US TODAY</h2>
            <p>Create your account and start your journey with us</p>
        `;
    } else {
        infoContent.innerHTML = `
            <h1>Olive jikuze IT solutions</h1>
            <h2>WELCOME BACK</h2>
            <p>Enter your credentials to access your account</p>
        `;
    }
}
