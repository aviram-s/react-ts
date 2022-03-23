import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="socialLinks">
          <a className="bx bxl-facebook footerIcon facebook"></a>
          <a className="bx bxl-instagram footerIcon instagram"></a>
          <a className="bx bxs-envelope footerIcon envelope"></a>
        </div>
        <p className="footerEmailText">DealSourceMedia@gmail.com</p>
        <p className="footerText">
          "Deal Source is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn advertising fees by advertising and linking to
          amazon.com."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
