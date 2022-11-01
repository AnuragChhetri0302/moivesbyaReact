import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about content">
        <h3>
          About<span></span>
        </h3>
        <div style={{marginTop:"2%"}}>
          <p>
           This is the footer example of one of my projects for portfolio.
           <br></br>
           Hope You Like it.
          </p>
        </div>
      </div>

      <div className="link content">
        <a href="https://www.Linkedin.com/in/anuragchhetri/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFF", margin: "2%" }}>
          LinkedIn
        </a>
        
        <a href="www.fb.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFF", margin: "2%" }}> 
          Facebook
        </a>
        <a href="https://www.instagram.com/anurag.chhetri_/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFF", margin: "2%" }}>
          Instagram
        </a>
      </div>
      <div className="contact content">
        <h2>
        <a href="mailto:anuragchhetri49@gmail.com" style={{color:"#fff"}}>Send Feedback</a></h2>
      </div>
    </footer>
  );
};

export default Footer;
