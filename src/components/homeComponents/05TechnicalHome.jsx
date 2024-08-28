"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import techMain from "@/utils/05utilTechHome";

const splitTitle = (title) => {
  const parts = title.split(/<span>(.*?)<\/span>/);
  return (
    <h4>
      {parts.map((part, index) =>
        index % 2 === 1 ? <span key={index}>{part}</span> : part
      )}
    </h4>
  );
};

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TechnicalHome = () => {
  return (
    <section className="technical-main py-5">
      <div className="container">
        <motion.div
          className="row py-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animationVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="col-sm-12 col-xs-12 heading-main text-center">
            <h3 className="mb-3">
              Our <span>Technical Expertise</span>
            </h3>
          </div>
        </motion.div>

        {techMain.map((techmain, index) => (
          <motion.div
            className="row d-flex align-items-center"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="card-content">
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={techmain.img}
                  alt="tech-1.png"
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </div>
              <div className="col-sm-6 col-xs-12 content">
                {splitTitle(techmain.title)}
                <p>{techmain.para}</p>
                <ul className="logos-main">
                  {Array.from({ length: 6 }, (_, i) => (
                    <li key={i}>
                      <Image
                        src={techmain[`img${i + 1}`]}
                        alt={`logo-${i + 1}`}
                        style={{ height: "auto", width: "auto" }}
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalHome;
