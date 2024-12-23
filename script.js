/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
}

h1, h2, h3 {
    text-align: center;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav-links a {
    color: white;
    font-weight: bold;
}

.menu-toggle {
    display: none;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(to bottom right, #6a11cb, #2575fc);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.hero span {
    color: #ff6363;
}

.cta-btn {
    padding: 0.8rem 2rem;
    background: #ff6363;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
}

/* About Section */
.about {
    padding: 2rem;
    text-align: center;
}

/* Projects Section */
.projects {
    background: #f4f4f4;
    padding: 2rem;
    text-align: center;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.project-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Contact Section */
.contact {
    padding: 2rem;
    background: #333;
    color: white;
    text-align: center;
}

.contact input, .contact textarea, .contact button {
    display: block;
    width: 80%;
    margin: 1rem auto;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
}

.contact button {
    background: #6a11cb;
    color: white;
    cursor: pointer;
}

/* Footer */
footer {
    text-align: center;
    padding: 1rem;
    background: #222;
    color: white;
}
