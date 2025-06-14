import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4" 
            style={{
              background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)'
            }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3">ResumeCraft Pro</h3>
            <p className="opacity-75">
              The most powerful resume builder to help you land your dream job. 
              Trusted by professionals worldwide.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/templates" className="text-white opacity-75 hover-opacity-100">Templates</Link></li>
              <li className="mb-2"><Link to="/features" className="text-white opacity-75 hover-opacity-100">Features</Link></li>
              <li className="mb-2"><Link to="/pricing" className="text-white opacity-75 hover-opacity-100">Pricing</Link></li>
              <li className="mb-2"><Link to="/examples" className="text-white opacity-75 hover-opacity-100">Examples</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-white opacity-75 hover-opacity-100">About Us</Link></li>
              <li className="mb-2"><Link to="/careers" className="text-white opacity-75 hover-opacity-100">Careers</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-white opacity-75 hover-opacity-100">Blog</Link></li>
              <li className="mb-2"><Link to="/press" className="text-white opacity-75 hover-opacity-100">Press</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/help" className="text-white opacity-75 hover-opacity-100">Help Center</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white opacity-75 hover-opacity-100">Contact Us</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-white opacity-75 hover-opacity-100">FAQs</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-white opacity-75 hover-opacity-100">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/resume-guide" className="text-white opacity-75 hover-opacity-100">Resume Guide</Link></li>
              <li className="mb-2"><Link to="/cover-letters" className="text-white opacity-75 hover-opacity-100">Cover Letters</Link></li>
              <li className="mb-2"><Link to="/interview-tips" className="text-white opacity-75 hover-opacity-100">Interview Tips</Link></li>
              <li className="mb-2"><Link to="/career-advice" className="text-white opacity-75 hover-opacity-100">Career Advice</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-4 opacity-10" />
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 opacity-75 small">
              &copy; {new Date().getFullYear()} ResumeCraft Pro. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end">
              <Link to="/terms" className="text-white opacity-75 hover-opacity-100 small">Terms of Service</Link>
              <Link to="/privacy" className="text-white opacity-75 hover-opacity-100 small">Privacy Policy</Link>
              <Link to="/cookies" className="text-white opacity-75 hover-opacity-100 small">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;