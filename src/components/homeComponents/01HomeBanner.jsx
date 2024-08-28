"use client";
import React, { useState, useRef } from "react";
import validator from "validator";

const HomeBanner = () => {
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({ website: "" });
  const websiteRef = useRef(null);

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const trimmedWebsite = website.trim();
    let websiteError = "";

    // Ensure URL starts with "http://"
    const formattedWebsite =
      !trimmedWebsite.startsWith("http://") &&
      !trimmedWebsite.startsWith("https://")
        ? "http://" + trimmedWebsite
        : trimmedWebsite;

    // Validate the website URL format
    if (!validator.isURL(formattedWebsite, { require_protocol: true })) {
      websiteError = "Enter a valid URL";
    }
    if (formattedWebsite.includes("@")) {
      websiteError = "Enter a valid URL";
    } else if (!validator.isURL(formattedWebsite, { require_protocol: true })) {
      websiteError = "Enter a valid URL";
    }

    if (websiteError) {
      setErrors({ website: websiteError });
      if (websiteRef.current) websiteRef.current.focus();
      return;
    }

    // Clear errors if the URL is valid
    setErrors({ website: "" });

    // If valid, console the website value and clear the input field
    console.log(`Website entered: ${formattedWebsite}`);
    setWebsite(""); // Clear the input field only if the URL is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    handleButtonClick(e); // Call the button click handler
  };

  return (
    <section className="home-banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 video-banner">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              width={"100%"}
              playsInline
            >
              <source src="/video/baner-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col col-sm-8 col-xs-12 banner-content">
            <h1>
              A{" "}
              <span className="animate-charcter">
                Website & Mobile App Development Company
              </span>{" "}
              with You in Mind
            </h1>
            <p>Innovative Digital Solutions to Fuel your Growth</p>
            <form className="website-label" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Website"
                value={website}
                onChange={handleWebsiteChange}
                ref={websiteRef}
              />
              {errors.website && (
                <p style={{ color: "red" }}>{errors.website}</p>
              )}
              <button type="submit">Send me a proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
