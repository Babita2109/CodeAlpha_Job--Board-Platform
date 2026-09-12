# CodeAlpha Job Board Platform 

A full-stack Web Application built using **Node.js, Express, MongoDB, and Vanilla JavaScript/HTML/CSS**. This platform allows users to view, post, update, and delete job listings through a RESTful API and a responsive user interface.

---

##  Features

- **Create Job Listings:** Add new jobs with title, company, location, salary, description, and skills.
- **View All Jobs:** Fetch and display all active job posts dynamically.
- **Update Job Info:** Modify job details (e.g., updating salary using Job ID).
- **Delete Job:** Remove job entries directly from the interface.
- **RESTful API:** Structured API endpoints handling CRUD operations.
- **Responsive UI:** Clean CSS styling for an easy user experience.

---

##  Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Version Control:** Git, GitHub

---

##  Project Structure

--text--
CodeAlpha_Job-Board-Platform/
│
├── models/
│   └── job.js          # Mongoose Schema for Jobs
├── public/
│   ├── index.html      # Frontend HTML layout
│   └── style.css       # Custom styling
├── server.js           # Express backend server & routes
├── package.json        # Project dependencies
└── README.md           # Documentation