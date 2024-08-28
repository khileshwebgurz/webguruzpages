"use client";
import React, { useState, useRef } from "react";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import numbercards from "@/utils/04utilHomeNumbers";

const HomeNumbers = () => {
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({ website: "" });
  const websiteRef = useRef(null);

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const trimmedWebsite = website.trim();
    let formattedWebsite = trimmedWebsite;
    let websiteError = "";

    // Ensure URL starts with "http://"
    if (
      !formattedWebsite.startsWith("http://") &&
      !formattedWebsite.startsWith("https://")
    ) {
      formattedWebsite = "http://" + formattedWebsite;
    }

    // Check if the website contains invalid characters like "@"
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

  return (
    <section className="number-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h3>
              By the <span>numbers</span>
            </h3>
            <p>
              Our best-in-class digital marketing agency impresses customers
              with impactful results and wows them with stellar customer
              service.
            </p>
            <form
              className="website-label btn-main"
              onSubmit={handleButtonClick}
            >
              <input
                type="text"
                placeholder="Enter Your Website"
                value={website}
                onChange={handleWebsiteChange}
                ref={websiteRef}
              />
              {errors.website && (
                <p style={{ color: "red" }}>{errors.website}</p>
              )}
              <button type="submit" value="Get a proposal">
                Get a proposal
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ps-1"
                  role="image"
                  aria-label="Arrow Right"
                />
              </button>
            </form>
          </div>
        </div>
        <div className="row numbercard-main">
          {numbercards.map((card, index) => (
            <div className="col col-sm-3 col-xs-12" key={index}>
              <div className="card text-center">
                <h4>{card.title}</h4>
                <p>{card.para}</p>
                <h3>{card.percentage}</h3>
                <Link className="btn-link about--btn" href="/">
                  {card.anchor}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ps-1"
                    role="image"
                    aria-label="Arrow Right"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNumbers;
