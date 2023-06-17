
const firebaseConfig = {
  apiKey: "AIzaSyCToSUi7z3E9Ioa60eDVDjPD2Y2z-UQrzk",
  authDomain: "librarymanagement-system-3e24d.firebaseapp.com",
  projectId: "librarymanagement-system-3e24d",
  storageBucket: "librarymanagement-system-3e24d.appspot.com",
  messagingSenderId: "971497387932",
  appId: "1:971497387932:web:bc6feb1343dc4c7a687a59",
  measurementId: "G-H6LCQ992FH"
  };
  
  firebase.initializeApp(firebaseConfig);
// DOM elements
const loginLink = document.querySelector('#login-link');
const userOptions = document.querySelector('#user-options');
const dropdownMenu = document.querySelector('#dropdown-menu');

// Check user authentication status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    loginLink.style.display = 'none';
    userOptions.style.display = 'block';
  } else {
    // User is signed out
    loginLink.style.display = 'block';
    userOptions.style.display = 'none';
  }
});

// Log out
const logoutButton = document.querySelector('#dropdown-menu li:nth-child(2) a');
logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Sign out user
  firebase.auth().signOut()
    .then(() => {
      // User signed out successfully
      console.log('User signed out');
    })
    .catch((error) => {
      // Handle sign out error
      console.log('Sign out error:', error.message);
    });
});