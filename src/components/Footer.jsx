const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <a href="#home">Ravindi Satharasinghe</a>
            </div>
            
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#activities">Activities</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-social">
              <a href="https://github.com/ravindimandari" className="social-icon">GitHub</a>
              <a href="https://www.linkedin.com/in/mandari-satharasinghe-3a6b18267/" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">Instagram</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} RavindiSatharasinghe. All Rights Reserved.</p>
            {/* <p>Made with ❤️ and React</p> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  