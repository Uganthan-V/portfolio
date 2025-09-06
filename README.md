# Personal Portfolio Website with Firebase Backend

## Overview
This project consists of a personal portfolio web application that showcases projects, certifications, resume, biography, and contact information. The system is powered by Firebase services, with a secure admin dashboard to manage the portfolio content.

- **Public-facing website**: Displays portfolio content like projects, bio, and resume.
- **Admin Dashboard**: Enables authenticated admin users to manage and update the portfolio content (CRUD operations).

## Key Features
- **Firebase Authentication**: Admin login via email/password.
- **Firestore Database**: Stores portfolio data (projects, resume, bio).
- **Firebase Storage**: For file uploads like images and resumes.
- **Responsive Design**: Dark/glassmorphism theme with smooth animations and modern UI.
- **Separate Hosting**: Public portfolio hosted on a custom domain, admin panel hosted on a subdomain.

## Technology Stack
### Frontend (Public)
- **Next.js** + **TypeScript** + **Tailwind CSS**

### Frontend (Admin Dashboard)
- **Next.js** or **SvelteKit** + **TypeScript** + **Tailwind CSS**

### Backend
- **Firebase Firestore**: NoSQL database for portfolio content.
- **Firebase Authentication**: Handles user authentication for admin login.
- **Firebase Storage**: Stores images and resume files.
- **Hosting**: Vercel or Firebase Hosting for deploying the web apps.
- **Animations & UI**: Framer Motion, CSS, Canvas/WebGL for smooth animations.

## System Architecture
### Public Portfolio Website
- Fetches and displays portfolio content from Firestore (projects, bio, resume).
- Allows the user to submit messages via the contact form (writes to Firestore).
- Hosted independently (e.g., `yourname.dev`).

### Admin Dashboard (CMS)
- Authenticated access via Firebase Authentication.
- Full CRUD operations for managing projects, About Me section, and resume.
- File uploads to Firebase Storage for images and resume.
- Views and manages contact form submissions.
- Hosted separately (e.g., `admin.yourname.dev`).

## Firebase Data Model
### Firestore Structure:
- **projects (collection)**: Stores portfolio projects with fields like title, description, tags, GitHub URL, live URL, and image URL.
- **about_me (document)**: Stores personal bio, skills, education, and social links.
- **resume (document)**: Stores the URL of the resume file in Firebase Storage.
- **contacts (collection)**: Stores contact form submissions (name, email, message).

## Firebase Security Rules
- Public read access to projects, About Me section, and resume.
- Admin-only access for creating, updating, and deleting content.
- Public access for submitting contact messages, but only admins can view/delete them.

### Example Firestore Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == "ADMIN_UID";
    }
    match /about_me/profile {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == "ADMIN_UID";
    }
    match /resume/main_resume {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == "ADMIN_UID";
    }
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.uid == "ADMIN_UID";
    }
  }
}
