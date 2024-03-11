import React from "react";

interface FooterProps {
  // Add any required props
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <div id="footer">
        <div className="container text-center pt-44 max-sm:pt-52 pb-2">
          <p>
            &copy; 2024 LMS All Rights Reserved. See{" "}
            <a href="#" rel="nofollow">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
