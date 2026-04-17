import { useState, useCallback } from "react";
import "./styles/Work.css"; // Reusing Work.css for consistent styling
import WorkImage from "./WorkImage"; // Reusing WorkImage for the preview
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certs = [
  {
    title: "Generative AI Engineering",
    category: "Professional Certification",
    tools: "Large Language Models, Prompt Engineering, LangChain",
    image: "/images/cert-genai.png", // Preview image of your certificate
    link: "/certificates/genai_cert.pdf", // Actual PDF/Link
  },
  {
    title: "Deep Learning Specialization",
    category: "Neural Networks & AI",
    tools: "PyTorch, CNNs, RNNs, Model Optimization",
    image: "/images/cert-dl.png",
    link: "/certificates/dl_specialization.pdf",
  },
  {
    title: "Python for Data Science",
    category: "Data Engineering",
    tools: "Pandas, NumPy, Scikit-Learn, SQL",
    image: "/images/cert-python.png",
    link: "/certificates/python_ds.pdf",
  }
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? certs.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === certs.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div className="work-section" id="certifications" style={{ borderTop: "1px solid #363636" }}>
      <div className="work-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev}>
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certs.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="carousel-category">{cert.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Key Topics</span>
                          <p>{cert.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={cert.image}
                        alt={cert.title}
                        link={cert.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {certs.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;