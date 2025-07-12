# Kawser Secure Portal

## Project Overview
This is a secure portal built with Firebase Authentication, Firestore, and Firebase Storage, styled with Tailwind CSS.  
Features include user signup, login, password reset, profile management, file upload/list/delete, and an admin panel.

---

## Setup Instructions

### 1. Firebase Setup
- Go to [Firebase Console](https://console.firebase.google.com/).
- Create a new project (or use your existing one).
- Enable **Email/Password Authentication** in Authentication > Sign-in method.
- Create a Firestore database (in test mode or production as needed).
- Enable Firebase Storage.

### 2. Configure Firebase
- Replace Firebase config object in `firebase.js` with your project credentials.
- Make sure your Storage rules allow authenticated user access.
- Firestore rules should allow read/write for authenticated users as per your needs.

### 3. Project Structure
project-folder/
├── index.html # Login page
├── signup.html # Signup page with additional fields
├── dashboard.html # User dashboard
├── profile.html # Profile view/edit page
├── admin.html # Admin panel (restricted by UID)
├── files.html # File upload/list/delete page
├── forgot.html # Password reset page
├── firebase.js # Firebase config and initialization
├── style.css # Custom styles
└── README.md # Setup instructions

### 4. Running the Project
- Serve the files using a local server or open `index.html` directly in the browser.
- Make sure internet connection is active for Firebase CDN scripts.
- Signup new users, login, upload files, manage profile, and explore the admin panel.

---

## Admin User

- Admin UID: `cNux5HnalhZ9wj6uPDXDA8B6EE02`
- This UID is hardcoded in `dashboard.html` and `admin.html` for access control.

---

## Notes
- Always protect your Firebase API keys (use environment variables in production).
- Adjust Firestore and Storage security rules as per your security requirements.
- Customize styling in `style.css` or Tailwind config as needed.

---

## Contact
For any issues or enhancements, feel free to contact Kawser.

