class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
          const placeholder = document.getElementById('navbar-placeholder');
          if (placeholder) {
            placeholder.innerHTML = html;
            this.initializeNavbar();
          } else {
            console.error('Navbar placeholder not found');
          }
        })
        .catch(error => console.error('Error loading navbar:', error));
    }
  
    initializeNavbar() {
      // Your existing initializeNavbar code
    }
  
  }
  
  customElements.define('nav-bar', Navbar);
  
  document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.createElement('nav-bar');
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.appendChild(navBar);
    } else {
      console.error('Navbar placeholder not found');
    }
  });