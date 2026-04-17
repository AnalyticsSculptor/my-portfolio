import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Analyst</h4>
                <h5>Accenture · Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a junior developer focusing on practical solutions in the Life Sciences R&D space. Developing robust automation tools specifically for data comparison and image processing on Excel files. Processing structured and unstructured datasets to derive actionable insights without unnecessary complexity.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Associate</h4>
                <h5>Accenture · Bengaluru</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Nov 2023 – Feb 2026. Leveraged data science techniques and machine learning algorithms to analyze complex datasets and drive decision-making. Collaborated with cross-functional teams to enhance processes in drug discovery and healthcare analytics.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>CodersCave</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Sep 2023 – Oct 2023. Tackled real-world problems through statistical analysis, machine learning, and data visualization. Gained hands-on experience in data analysis fundamentals.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;