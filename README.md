# Job Portal – MERN Stack + Cloud Deployment

A full-stack job portal application where companies can post jobs, manage applicants, and candidates can apply for jobs, upload resumes, and track applications.  
Built with **MERN(MongoDB, Express, React, Node.js) Stack**, integrated with **Clerk authentication**, **Cloudinary** for media storage, and deployed entirely on **Vercel**.

---

## 🚀 Features

### For Candidates
- Sign up & log in securely via **Clerk authentication**.
- Browse available jobs with detailed descriptions.
- Apply to jobs with uploaded resumes.
- Track application status (*Pending, Accepted, Rejected*).

### For Companies
- Register & log in securely with **JWT authentication**.
- Post, update, and manage job listings.
- View applicants and update application status.
- Toggle job visibility without deleting data.

### Admin/Platform Highlights
- Secure server-side validation & middleware protection.
- **Webhook integration** for real-time Clerk user sync.
- Cloud-based media handling via **Cloudinary**.
- Deployed server & client as **separate apps** on Vercel for scalability.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, Clerk Authentication  
**Backend:** Node.js, Express.js, MongoDB, JWT, Clerk Webhooks  
**Database:** MongoDB Atlas  
**Cloud Storage:** Cloudinary  
**Deployment:** Vercel (Frontend & Backend)  
**Other Tools:** Multer (in-memory upload), Sentry error tracking

---

## 📂 Project Structure

client/ # Frontend React app

├─ config/ # Cloudinary, DB, Multer configs

├─ controllers/ # Route handlers for jobs, companies, users

├─ middleware/ # Authentication middleware

├─ models/ # Mongoose models

├─ routes/ # API endpoints

├─ utils/ # Utility functions

server/ # Backend Node.js API

├─ config/ # Cloudinary, DB, Multer configs

├─ controllers/ # Route handlers for jobs, companies, users

├─ middleware/ # Authentication middleware

├─ models/ # Mongoose models

├─ routes/ # API endpoints

├─ utils/ # Utility functions

---

## ⚙️ Deployment

**Frontend:**  
Deployed on Vercel as a static site via `vite build`.

**Backend:**  
Deployed on Vercel using serverless functions for Express API routes.

---
## 📸 Screenshots
<img width="682" height="896" alt="image" src="https://github.com/user-attachments/assets/bb0c00bb-ff32-427b-915a-85a5333015da" />
<img width="1915" height="869" alt="image" src="https://github.com/user-attachments/assets/7d1ead06-6cb3-4325-b78c-ca6bc1450603" />
