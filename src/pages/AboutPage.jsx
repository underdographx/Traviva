import Navbar from "../components/Navbar";
import "./AboutPage.css";

import heroImage from "../assets/anu.jpg";
import aboutImage from "../assets/aboutanu.jpg";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="about-page">

      <Navbar />

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="social-sidebar">

          <a
            href="https://www.linkedin.com/in/anuja-yadav-5392a6376/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/underdographx"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/anujay_13"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

        <div className="hero-content">

          <img
            src={heroImage}
            alt="hero"
            className="hero-image"
          />

          <h1>Anuja Yadav</h1>

          <h3>
            Full Stack Developer 
          </h3>

          <div className="hero-line"></div>

          <p>
            Crafting digital experiences with passion and turning
            travel dreams into unforgettable memories.
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">

        <div className="section-number">
          <span>01</span>
        </div>

        <div className="about-left">

          <div className="dots"></div>

          <img
            src={aboutImage}
            alt="about"
          />

        </div>

        <div className="about-right">

          <p className="section-title">
            DISCOVER
          </p>

          <h2>About Me</h2>

          <div className="small-line"></div>

          <p className="about-text">
            Hi, I’m Anuja Yadav. I’m a Full Stack Developer
            based in Mumbai, India. I build modern, responsive
            and user-friendly web applications.
          </p>

          <div className="info-box">

            <div>
              <strong>Name:</strong>
              <span>Anuja Yadav</span>
            </div>

            <div>
              <strong>Age:</strong>
              <span>18</span>
            </div>

            <div>
              <strong>Phone:</strong>
              <span>+91 9082421549</span>
            </div>

            <div>
              <strong>Location:</strong>
              <span>Mumbai, India</span>
            </div>

            <div>
              <strong>Freelance:</strong>
              <span>Available</span>
            </div>

            <div>
              <strong>Email:</strong>
              <span>anujay013@gmail.com</span>
            </div>

            <div>
              <strong>Languages:</strong>
              <span>English, Hindi</span>
            </div>

          </div>

          
        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section" id="contact">

        <div className="section-number">
          <span>02</span>
        </div>

        <div className="contact-left">

          <p className="section-title">
            LET'S TALK
          </p>

          <h2>Contact Us</h2>

          <div className="small-line"></div>

          <p className="contact-description">
            Have a project in mind or want to collaborate?
            Feel free to reach out to me.
          </p>

          <div className="contact-info">

            <div>
              <FaEnvelope />
              <span>anujay013@gmail.com</span>
            </div>

            <div>
              <FaPhoneAlt />
              <span>+91 9082421549</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Mumbai, India</span>
            </div>

          </div>

          <div className="contact-socials">

            <a
              href="https://www.linkedin.com/in/anuja-yadav-5392a6376/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/underdographx"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/anujay_13"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="mailto:anujay013@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            SEND MESSAGE ✈
          </button>

        </form>

      </section>

      <footer className="footer">
        © 2025 <span>Traviva.</span> All Rights Reserved.
      </footer>

    </div>
  );
}