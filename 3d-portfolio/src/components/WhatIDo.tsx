import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation to reveal cards as you scroll down
    gsap.fromTo(
      ".what-content",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className="whatIDO" id="about" ref={sectionRef}>
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          {/* Card 1: Agentic AI */}
          <div className="what-content">
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>01. AI ORCHESTRATION</h4>
              <h3>Agentic AI & RAG</h3>
              <p>
                Architecting autonomous agent workflows using <strong>LangGraph</strong> and 
                <strong> LangChain</strong>. Specializing in financial underwriting meshes and 
                automated IT ticket resolution systems.
              </p>
              <div className="what-content-flex">
                <span className="what-tags">Python</span>
                <span className="what-tags">FastAPI</span>
                <span className="what-tags">Vector DBs</span>
              </div>
            </div>
          </div>

          {/* Card 2: Clinical Vision */}
          <div className="what-content">
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>02. COMPUTER VISION</h4>
              <h3>Clinical Vision & XAI</h3>
              <p>
                Developing end-to-end pipelines for medical imaging. Implementing 
                <strong> Explainable AI (XAI)</strong> with Grad-CAM and uncertainty 
                quantification for high-trust clinical decision support.
              </p>
              <div className="what-content-flex">
                <span className="what-tags">PyTorch</span>
                <span className="what-tags">XAI</span>
                <span className="what-tags">Gradio</span>
              </div>
            </div>
          </div>

          {/* Card 3: Backend & DevOps */}
          <div className="what-content">
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h4>03. DATA PIPELINES</h4>
              <h3>Scalable Backend</h3>
              <p>
                Building production-grade APIs and containerized microservices. 
                Experience deploying to <strong>GCP Cloud Run</strong> and managing 
                large-scale pharmaceutical data extraction pipelines.
              </p>
              <div className="what-content-flex">
                <span className="what-tags">Docker</span>
                <span className="what-tags">GCP</span>
                <span className="what-tags">MS SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;