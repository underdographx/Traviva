import "./TripDetails.css";

import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import trips from "../data/trips";
import React from "react";

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function TripDetails() {
  const { slug } = useParams();

  const [paymentStatus, setPaymentStatus] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const trip = trips.find((item) => item.slug === slug);

  const handlePayment = async () => {
    setIsPaying(true);
    setPaymentStatus("Preparing secure payment...");

    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      const options = {
        key: "rzp_test_Srd9CQ1p1erXeY",
        amount: trip.amount * 100,
        currency: "INR",
        name: "TRAVIVA",
        description: trip.title,

        handler: async () => {
          setPaymentStatus(
            "Payment successful. Your luxury trip request is confirmed."
          );
          setIsPaying(false);
        },

        prefill: {
          name: "Traviva User",
          email: "traviva@example.com",
        },

        theme: {
          color: "#8b5cf6",
        },

        modal: {
          ondismiss: () => {
            setPaymentStatus("Payment cancelled.");
            setIsPaying(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", (response) => {
        setPaymentStatus(
          response.error?.description || "Payment failed."
        );
        setIsPaying(false);
      });

      razorpay.open();
    } catch (error) {
      setPaymentStatus(error.message || "Something went wrong.");
      setIsPaying(false);
    }
  };

  if (!trip) {
    return <div className="not-found">Trip Not Found</div>;
  }

  return (
    <div className="trip-page">
      <Navbar />

      <section className="trip-hero">
        <img src={trip.image} alt={trip.name} />

        <div className="hero-overlay">
          <div className="hero-content">
            <p>{trip.category.toUpperCase()} EXPERIENCE</p>
            <h1>{trip.title}</h1>
            <span>{trip.about}</span>
          </div>

          <div className="floating-card">
            <h3>Starting From</h3>
            <h2>{trip.price}</h2>

            <div className="floating-items">
              <p>Premium Hotels</p>
              <p>Meals Included</p>
              <p>Private Transfers</p>
              <p>Guided Experiences</p>
            </div>

            <button
              type="button"
              disabled={isPaying}
              onClick={handlePayment}
            >
              {isPaying ? "Opening Payment..." : "Proceed To Payment"}
            </button>

            {paymentStatus && (
              <p className="payment-status">{paymentStatus}</p>
            )}
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div className="info-box">
          <h3>Duration</h3>
          <p>{trip.duration}</p>
        </div>

        <div className="info-box">
          <h3>Luxury Stay</h3>
          <p>{trip.hotel}</p>
        </div>

        <div className="info-box">
          <h3>Transport</h3>
          <p>{trip.transport}</p>
        </div>

        <div className="info-box">
          <h3>Meals</h3>
          <p>{trip.meals}</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-heading">
          <p>DAY WISE EXPERIENCE</p>
          <h2>Your Journey Plan</h2>
        </div>

        <div className="timeline">
          {trip.itinerary.map((item) => (
            <div className="timeline-item" key={item.day}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <h3>{item.day}</h3>
                <p>{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading">
          <p>DESTINATION GALLERY</p>
          <h2>Explore The Beauty</h2>
        </div>

        <div className="gallery-grid">
          {trip.gallery.map((image) => (
            <img src={image} alt={trip.name} key={image} />
          ))}
        </div>
      </section>
    </div>
  );
}