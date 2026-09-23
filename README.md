# INKWELL

INKWELL is a minimalist personal publishing platform built with Node.js, Express.js, EJS, HTML, CSS and vanilla JavaScript.

The project focuses on understanding the fundamentals of web development, including HTTP requests, Express routing, server-side rendering, forms, CRUD operations and responsive UI design.

🌐 Live Demo
https://inkwell-blog.onrender.com

## Features

- Create articles
- Read articles
- Edit articles
- Delete articles
- Search articles
- Dark mode
- Automatic reading-time calculation
- Responsive design
- Custom 404 page
- About page
- Reusable EJS partials
- Confirmation before deleting articles

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- Vanilla JavaScript
- npm

## Project Structure

```text
inkwell-blog/
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── post.ejs
│   ├── compose.ejs
│   ├── edit.ejs
│   ├── about.ejs
│   └── 404.ejs
├── data/
│   └── posts.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
