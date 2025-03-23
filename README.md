# 🏨 Veldora Hotel  

Veldora Hotel is a modern hotel booking platform built with **React, Vite, and Firebase**. It allows users to **sign up, log in, or continue as a guest** to explore and book hotel rooms. The platform provides **exclusive deals, trending destinations, and easy booking** for users.  

---

## 🚀 Features  

✅ **User Authentication**: Sign up, log in with email and password, or continue as a guest.  
✅ **Firebase Integration**: Secure authentication and real-time user state management.  
✅ **Responsive Navigation Bar**: Includes a hamburger menu and a user profile sidebar.  
✅ **Exclusive Hotel Deals**: Display featured and trending hotel stays.  
✅ **Booking Option**: Easy access to room booking options.  
✅ **Modern UI**: Clean and attractive design with animations.  

---

## 🛠️ Tech Stack  

- **Frontend**: React (Vite)  
- **Authentication**: Firebase Authentication  
- **Hosting**: Firebase Hosting  
- **Icons**: Lucide-React  
- **Styling**: CSS  

---

## 📂 Folder Structure  

```
VeldoraHotel/
│── public/                     # Static assets  
│── src/  
│   ├── assets/                 # Images and icons  
│   ├── components/             # Reusable components  
│   │   ├── AuthPage.jsx        # Login and Signup page  
│   │   ├── Navbar.jsx          # Navigation bar with authentication  
│   │   ├── Banner.jsx          # Home page banner  
│   │   ├── DealsSection.jsx    # Hotel deals section  
│   │   ├── Footer.jsx          # Footer section  
│   ├── firebaseConfig.js       # Firebase setup  
│   ├── App.jsx                 # Main application file  
│   ├── main.jsx                # Entry point  
│   ├── App.css                 # Global styles  
│── .gitignore  
│── index.html  
│── package.json  
│── README.md  
│── vite.config.js  
```

---

## 🏗️ Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/veldora-hotel.git
cd veldora-hotel
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Firebase  
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
- Enable **Authentication** → Sign in with **Email/Password**.  
- Copy your Firebase config keys and paste them into `firebaseConfig.js`.  

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 4️⃣ Run the Project  
```sh
npm run dev
```

---

## 🖥️ Usage  

1️⃣ **Login or Sign Up**  
- Users will be greeted with an authentication page.  
- They can **log in**, **sign up**, or **continue as a guest**.  

2️⃣ **Home Page**  
- After logging in, users will be redirected to the main page.  
- The page features exclusive **hotel deals, trending destinations, and a booking option**.  

3️⃣ **Navigation**  
- A responsive navbar allows users to explore different sections.  
- Authenticated users can view their **profile and log out** from the sidebar.  

---

## 🔥 Screenshots  

### 🔐 Login / Sign Up Page  
<img src="https://github.com/Priyankanegi28/Veldora/blob/main/veldora-hotel/public/login.png" width="600" alt="Auth Page">  

### 🏡 Main Home Page
<img src="https://github.com/Priyankanegi28/Veldora/blob/main/veldora-hotel/public/main.png" width="600" alt="Home Page">  

---

## 🚀 Deployment (Optional)  

### Deploy on Firebase Hosting  
1️⃣ **Install Firebase CLI**  
```sh
npm install -g firebase-tools
```

2️⃣ **Login to Firebase**  
```sh
firebase login
```

3️⃣ **Initialize Firebase Hosting**  
```sh
firebase init
```
- Choose **Hosting** → Select Firebase project → Set `dist/` as the public directory.  

4️⃣ **Deploy**  
```sh
npm run build
firebase deploy
```

---

## 📝 License  

This project is licensed under the **MIT License**.

---
