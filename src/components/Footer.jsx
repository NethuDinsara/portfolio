const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <a href="#home">RavindiSatharasinghepura</a>
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
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">Twitter</a>
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
  