# 🎵 Classical Music Explorer

Project for cource ATH/TECH — MODULE CODE: CCS6211
MODULE TITLE: Front-End Application Development — MSc in Web and Mobile Development
A multi-page HTML/CSS/JavaScript website built without frameworks.

---

## 📌 Overview

**Classical Music Explorer** is a fully client-side website designed to explore classical music, composers, and instruments. It includes a main page, five sub-pages, a shared template, form functionality, localStorage-based authentication, and multiple page layouts (single column, double column, triple column, single-with-aside).

This project follows all requirements of the assignment:

* ✔ Pure HTML, CSS, and JavaScript
* ✔ Shared template with navigation bar, logo, footer
* ✔ At least 5 sub-pages
* ✔ Different layouts across pages
* ✔ Form handling + local storage
* ✔ Sign-Up & Sign-In
* ✔ Reserved members-only page
* ✔ Clean structure, comments, and validation

---

## 🌐 Website Structure

**Main Page**

* Hero banner
* Introduction to the world of classical music
* Navigation to all sections
* CTA button

**Sub-Pages (Total: 5+)**

| Page               |                   Layout | Features                         |
| ------------------ | -----------------------: | -------------------------------- |
| Composers          |            Double column | Cards, musician info             |
| Instruments        |            Triple column | Instrument descriptions & images |
| Eras               | Single column with aside | Timeline + historical context    |
| Learn Music Theory |            Single column | Embedded media, lists, tables    |
| Members-Only Page  |                 Reserved | Accessible only after login      |

---

## 🧩 Features Implemented

* Data saved in `localStorage`
* **Contact Form**

  * Validates inputs
  * Stores message data in `localStorage`
  * Prevents empty submissions with JS

---

## 🔍 Interactive Components

* "Saved" popup when storing data
* Responsive navigation
* CSS hover effects, transitions, transforms

---

## 🖼 Common Template Elements

* Logo
* Responsive navigation bar
* Footer with author info
* Reusable layout and shared styles

---

## 🛠 Technologies Used

**HTML**

* headings, images, lists, tables
* semantic layout: `<article>`, `<section>`, `<aside>`, `<nav>`, `<footer>`
* forms with built-in validation
* links and media

**CSS**

* flexbox and floats
* responsive design
* positioning
* transitions & transforms
* custom classes + IDs
* multi-column layouts
* hover styling
* mobile breakpoints

**JavaScript**

* DOM manipulation
* input validation
* `localStorage` (auth + saved content)
* event handling
* dynamic UI updates

---

## 📁 Project Structure

```
/project-root
│── index.html
│── composers.html
│── instruments.html
│── eras.html
│── theory.html
│── members.html
│── signup.html
│── login.html
│── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js
│   ├── popup.js
│   └── contact.js
│
└── images/
```

---

## 📋 Validation & Code Quality

* All pages formatted with consistent indentation
* CSS is structured and grouped
* JavaScript includes descriptive function names
* Inline comments explain non-obvious logic
* HTML and CSS validated using W3C validators

Removed unused selectors and obsolete attributes.

---

## 📚 Documentation

A full PDF report accompanies this website, covering:

* Design decisions
* Template structure
* Layout variations
* Feature implementation
* Code samples
* Validation notes
* Reflection on challenges

---

## 🚀 How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. Explore all sections!

---

## 👤 Author

**Eirini Spanopoulou**

*Classical Music Explorer — HTML/CSS/JS Project*
