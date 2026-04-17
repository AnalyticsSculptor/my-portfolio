import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:singhofficial99@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                singhashutosh.tech@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:7596827441"
                data-cursor="disable"
              >
                +91 7596827441
              </a>
            </p>
            <h4>Education</h4>
            <p>
              PG Degree, Data Analytics & ML, Imarticus Learning — 2023
            </p>
            <p>
              B.Tech Computer Engineering, GMIT — 2018–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/aksingh-techscientist"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://linktr.ee/singh_ashu"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linktree Portfolio <MdArrowOutward />
            </a>
            <a
              href="https://github.com/" 
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ashutosh Kumar Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;