import "./Home.css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import experiences from "../data/experiences";

import "swiper/css";

export default function Home() {
  const navigate = useNavigate();
  const featuredCards = experiences.slice(0, 5);

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <p>LUXURY TRAVEL EXPERIENCE</p>
          <h1>
            Explore The <br />
            World Differently.
          </h1>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="travelSwiper"
        >
          {featuredCards.map((card) => (
            <SwiperSlide className="travel-card" key={card.name}>
              <img src={card.image} alt={card.name} />

              <div className="card-overlay">
                <div>
                  <p className="vibe">{card.vibe}</p>
                  <h3>{card.name}</h3>
                  <span>{card.description}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="experience-btn"
          onClick={() => navigate("/experience/Vacation")}
        >
          Explore Now
        </button>
      </section>

      <section className="experiences" id="experiences">
        <div className="section-heading">
          <p>CURATED EXPERIENCES</p>
          <h2>Explore Experiences</h2>
        </div>

        <div className="experience-grid" id="destinations">
          {experiences.map((experience) => (
            <div className="experience-card" key={experience.name}>
              <img src={experience.image} alt={experience.name} />

              <div className="experience-overlay">
                <div className="experience-text">
                  <h3>{experience.name}</h3>
                  <span>{experience.vibe}</span>
                </div>

                <button
                  className="experience-btn"
                  onClick={() => navigate(`/experience/${experience.name}`)}
                >
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
