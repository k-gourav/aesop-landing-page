import React from 'react';
import './FooterNew.css'
function FooterNew() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Subscribe to Aesop communications</h1>
      </header>
      <main>
        <section className="subscribe">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
          <label>
            <input type="checkbox" />
            Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.
          </label>
        </section>
        <section className="orders-and-support">
          <h2>Orders and support</h2>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order history</a></li>
            <li><a href="#">Check gift card balance</a></li>
            <li><a href="#">Terms and conditions</a></li>
          </ul>
        </section>
        <section className="services">
          <h2>Services</h2>
          <ul>
            <li>Live assistance</li>
            <li>Corporate gifts</li>
            <li>Facial Appointments</li>
            <li>Click and Collect</li>
            <li>Video consultation</li>
          </ul>
        </section>
        <section className="location-preferences">
          <h2>Location preferences</h2>
          <div className="shipping">
            <h3>Shipping:</h3>
            <p>Hong Kong, SAR</p>
          </div>
          <div className="language">
            <h3>Language:</h3>
            <ul>
              <li>English</li>
              <li>繁體中文</li>
            </ul>
          </div>
        </section>
        <section className="sustainability">
          <h2>Sustainability</h2>
          <p>
            All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
          </p>
        </section>
        <section className="about">
          <h2>About</h2>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Foundation</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </section>
        <section className="social-media">
          <h2>Social media</h2>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">WeChat</a></li>
            <li><a href="#">Weibo</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default FooterNew;