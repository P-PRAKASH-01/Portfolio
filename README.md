# Prakash - Creative Developer Portfolio

A modern, responsive personal portfolio website built with HTML5, CSS3 (Tailwind CSS), and JavaScript. It features a clean design, interactive elements, and a fully functional contact form powered by EmailJS.

## Features

-   **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
-   **Modern UI**: utilizing Tailwind CSS for styling, with custom animations and a polished aesthetic.
-   **Project Showcase**: Filterable gallery to display AI/ML and Web Development projects.
-   **Skills Section**: Visual representation of technical skills using official brand SVGs.
-   **Certifications**: Carousel view for certifications with modal preview support.
-   **Contact Form**: Functional contact form integrated with **EmailJS** for real-time email delivery.

## Technologies Used

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Styling**: Tailwind CSS (via CDN) + Custom CSS (`style.css`)
-   **Icons**: Simple Icons (SVGs), Boxicons
-   **Email Service**: EmailJS SDK

## Getting Started

To run this project locally, you don't need any complex build tools.


1.  **Configuration**:
    -   Open `config.js` in the root directory.
    -   Replace the placeholder values with your actual EmailJS credentials:
        ```javascript
        window.CONFIG = {
            EMAILJS_PUBLIC_KEY: "YOUR_PUBLIC_KEY",
            EMAILJS_SERVICE_ID: "YOUR_SERVICE_ID",
            EMAILJS_TEMPLATE_ID: "YOUR_TEMPLATE_ID"
        };
        ```
    -   *Note*: You can get these keys by signing up at [EmailJS](https://www.emailjs.com/).


## File Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── style.css           # Custom styles and override
├── script.js           # Main logic (UI, EmailJS, filtering)
├── config.js           # Configuration file for keys
├── certificates/       # Directory for certificate images
└── README.md           # Project documentation
```
