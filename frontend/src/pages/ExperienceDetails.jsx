import "./ExperienceDetails.css";

import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import experiences from "../data/experiences";

export default function ExperienceDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find(
    (item) => item.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  if (!experience) {
    return <div className="not-found">Experience Not Found</div>;
  }

  return (
    <div className="details-page">
      <Navbar />

      <section className="details-hero">
        <img src={experience.image} alt={experience.name} />

        <div className="details-overlay">
          <p>LUXURY EXPERIENCE</p>
          <h1>{experience.name}</h1>
          <span>{experience.description}</span>
        </div>
      </section>

      <section className="details-content">
        <div className="info-card">
          <p className="eyebrow">TRAVIVA COLLECTION</p>
          <h2>About This Experience</h2>
          <p>
            Every {experience.name.toLowerCase()} plan is built with premium
            stays, private support, elegant pacing and a fully detailed day-wise
            itinerary. Choose a destination below to view hotel details, meals,
            transport, pricing and payment options.
          </p>
        </div>

        <div className="places-section">
          <h2>Top Destinations</h2>

          <div className="places-grid">
            {experience.places.map((place) => (
              <button
                className="place-card"
                key={place.slug}
                type="button"
                onClick={() => navigate(`/trip/${place.slug}`)}
              >
                <img src={place.image} alt={place.name} />

                <div className="place-info">
                  <p className="place-category">{place.category}</p>
                  <h3>{place.name}</h3>
                  <p>{place.desc}</p>
                  <div className="place-meta">
                    <span>{place.duration}</span>
                    <span>{place.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
