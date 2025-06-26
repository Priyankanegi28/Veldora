# Serene Haven

A luxury hotel and resort booking web application offering world-class accommodations, dining, experiences, and events. Built with React and Vite, Serene Haven provides a seamless, elegant, and modern user experience for guests seeking relaxation, adventure, or celebration.

---

## 🌟 Features & Pages

### Main Pages
- **Home**: Hero section, quick links, featured rooms, amenities, testimonials, and deals.
- **About**: Story, mission, and highlights of Serene Haven.
- **Rooms & Suites**: Browse, filter, and view details of all room types (Deluxe, Executive, Presidential, Family, Penthouse, etc.).
- **Dining**: Explore restaurants, bars, and signature dishes. Reserve a table.
- **Experiences**: Discover unique activities (yoga, safari, beach dinner, scuba, cooking class, cultural tours, etc.).
- **Book Experience**: Reserve curated experiences with a dedicated form.
- **Events**: View and RSVP to upcoming events (Gala, Festival, Retreats, Wine Tasting, Cultural Nights, etc.).
- **Reserve/Booking**: Book your stay with check-in/out, guests, and room selection.
- **RSVP**: RSVP for special events.
- **Contact**: Contact form, address, phone, email, and map.
- **Authentication**: Login, Signup, and Guest access (with Firebase Auth).

### Global Features
- **Navbar**: Quick navigation to all main pages.
- **Footer**: Quick links, social media, newsletter signup, and legal info.
- **Testimonials**: Rotating guest reviews.
- **Deals Section**: Special offers and featured stays.
- **Responsive Design**: Fully mobile-friendly and accessible.

---

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **UI/UX**: Framer Motion, Lucide React, React Icons, custom CSS
- **Authentication**: Firebase Auth
- **State Management**: React Hooks
- **Deployment**: Vite, gh-pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd veldora-hotel

# Install dependencies
$ npm install
```

### Running Locally
```bash
$ npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
$ npm run build
```

### Linting
```bash
$ npm run lint
```

---

## 📁 Folder Structure (Key Parts)
```
veldora-hotel/
  ├── public/                # Static assets
  ├── src/
  │   ├── assets/            # Images and media
  │   ├── components/        # All React components & pages
  │   │   ├── HomePage.jsx
  │   │   ├── AboutPage.jsx
  │   │   ├── RoomsPage.jsx
  │   │   ├── DiningPage.jsx
  │   │   ├── ExperiencesPage.jsx
  │   │   ├── BookExperiencePage.jsx
  │   │   ├── EventsPage.jsx
  │   │   ├── ReservePage.jsx
  │   │   ├── RsvpPage.jsx
  │   │   ├── ContactPage.jsx
  │   │   ├── AuthPage.jsx
  │   │   ├── Navbar.jsx, Footer.jsx, Banner.jsx, DealsSection.jsx, etc.
  │   ├── firebaseConfig.js  # Firebase setup
  │   ├── App.jsx            # Main app entry
  │   └── main.jsx           # ReactDOM render
  ├── package.json           # Project metadata & scripts
  └── README.md              # Project documentation
```

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


