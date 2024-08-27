"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    launchTime: "",
    projectDetails: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Business Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.launchTime) newErrors.launchTime = "Launch Time is required";
    if (!formData.projectDetails.trim())
      newErrors.projectDetails = "Project Details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setFormData(initialFormData); // Reset the form data to initial state
      setErrors({}); // Clear any existing errors
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <section className="contact-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12 contact-sub left">
            <p>Get in Touch with</p>
            <h2>Our Experts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <p>Integrate Towards Innovation</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <Link href="/" className="partner-btn about--btn">
              Become a Partner&nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                role="img"
                aria-label="Arrow Right"
              />
            </Link>
            <div className="contact-info">
              <h4>Contact Info:</h4>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="ps-1"
                        role="image"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales -{" "}
                        <a href="tel:730 700 1777">(+91) 730 700 1777</a>
                      </p>
                      <p>
                        Jobs -{" "}
                        <a href="tel:(+91) 959 201 6444">(+91) 959 201 6444</a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="ps-1"
                        role="image"
                        aria-label="Envelope"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales -{" "}
                        <a
                          href="mailto:provider@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          provider@webguruz.in
                        </a>
                      </p>
                      <p>
                        Jobs -
                        <a
                          href="mailto:careers@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          careers@webguruz.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <form
              className="contact-right-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3>Let&apos;s Get to know you</h3>
              <label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                <PhoneInput
                  country={"in"}
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(phone) => handleChange("phone", phone)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label>
                <select
                  value={formData.launchTime}
                  onChange={(e) => handleChange("launchTime", e.target.value)}
                >
                  <option value="">
                    When do you want to launch a solution?
                  </option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </select>
                {errors.launchTime && (
                  <span className="error">{errors.launchTime}</span>
                )}
              </label>
              <label>
                <textarea
                  placeholder="About Project"
                  value={formData.projectDetails}
                  onChange={(e) =>
                    handleChange("projectDetails", e.target.value)
                  }
                ></textarea>
                {errors.projectDetails && (
                  <span className="error">{errors.projectDetails}</span>
                )}
              </label>
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
