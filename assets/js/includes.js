class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <a href="index.html"
          ><img src="assets/img/logo.png" alt="" class="img-fluid"
        /></a>
      </div>
  
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="index.html#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">About Us</a></li>
          <li><a class="nav-link scrollto" href="index.html#services">Services</a></li>
          <li>
            <a class="nav-link scrollto" href="index.html#portfolio">Portfolio</a>
          </li>
          <li><a class="nav-link scrollto" href="index.html#team">Team</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
          <li>
            <a class="getstarted scrollto" href="index.html#about">Get Started</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
    `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 footer-contact">
          <h3>S&S Services and Solutions</h3>
          <p>
            Schafgasse 2 <br />
            88131 Lindau (Bodensee)<br />
            Germany <br /><br />
            <strong>Phone:</strong> +49 1521 2357185<br />
            <strong>Email:</strong> project.management.MSR@outlook.com<br />
          </p>
        </div>
  
        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#hero">Home</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#about">About us</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services">Services</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#team">Team</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
  
        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services">Web Design</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services"
                >Web Development</a
              >
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services"
                >Mobile App development</a
              >
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services"
                >Embedded Software Engineering</a
              >
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
              <a class="nav-link scrollto active" href="#services"
                >Digital Marketing</a
              >
            </li>
          </ul>
        </div>
  
        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Our Social Networks</h4>
          <p>Stay connected and follow us on our social networks:</p>
          <div class="social-links mt-3">
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container py-4">
    <div class="copyright">
      &copy; Copyright
      <strong><span>S&S Services and Solutions</span></strong
      >. All Rights Reserved
    </div>
  </div>  
    `;
  }
}

customElements.define("my-footer", MyFooter);
