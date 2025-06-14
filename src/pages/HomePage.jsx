import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HomePage.css'; // Custom styles for the HomePage
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: 'bi-file-earmark-text-fill',
      title: "Professional Templates",
      description: "20+ ATS-friendly templates designed by career experts"
    },
    {
      icon: 'bi-palette-fill',
      title: "Custom Design",
      description: "Full control over colors, fonts, and layouts"
    },
    {
      icon: 'bi-lightbulb-fill',
      title: "AI Suggestions",
      description: "Smart content recommendations powered by AI"
    },
    {
      icon: 'bi-cloud-arrow-down-fill',
      title: "Multiple Formats",
      description: "Export as PDF, DOCX, or plain text"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      quote: "Landed 3 interviews in one week after using ResumeCraft!"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      quote: "The clean templates helped me stand out from other applicants."
    },
    {
      name: "David Wilson",
      role: "Financial Analyst",
      quote: "Best resume builder I've used in my 10-year career."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-white" 
               style={{
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                 padding: '6rem 0 5rem',
                 position: 'relative',
                 overflow: 'hidden'
               }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Build a Resume That Gets You Hired</h1>
              <p className="lead mb-4 opacity-75">
                Create a professional resume in minutes with our easy-to-use builder and land your dream job faster.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/builder" className="btn btn-light btn-lg px-4 py-2 fw-bold" style={{ color: '#667eea' }}>
                  Get Started - It's Free
                </Link>
                <Link to="/templates" className="btn btn-outline-light btn-lg px-4 py-2 fw-bold">
                  View Templates
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Resume example" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 py-lg-7 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose ResumeCraft Pro?</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Everything you need to create a resume that stands out from the competition
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body text-center p-4">
                    <div className="icon-lg rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" 
                         style={{
                           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                         }}>
                      <i className={`bi ${feature.icon} text-white fs-4`}></i>
                    </div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 py-lg-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4">Create Your Perfect Resume in 4 Easy Steps</h2>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3">
                  <div className="icon-md rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                       style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                       }}>
                    <span className="text-white fw-bold">1</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Enter Your Details</h5>
                    <p className="text-muted mb-0">Fill in your work history and education</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="icon-md rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                       style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                       }}>
                    <span className="text-white fw-bold">2</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Choose Design</h5>
                    <p className="text-muted mb-0">Select from professional templates</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="icon-md rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                       style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                       }}>
                    <span className="text-white fw-bold">3</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Customize</h5>
                    <p className="text-muted mb-0">Tailor content and appearance</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="icon-md rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                       style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                       }}>
                    <span className="text-white fw-bold">4</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Download</h5>
                    <p className="text-muted mb-0">Get your polished resume in minutes</p>
                  </div>
                </div>
              </div>
              <Link to="/builder" className="btn btn-primary btn-lg mt-4 px-4 py-2 fw-bold">
                Start Building Now
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Resume building process" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 py-lg-7 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Success Stories From Our Users</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Join thousands of professionals who landed their dream jobs
            </p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <i className="bi bi-quote fs-1 text-primary opacity-10"></i>
                    </div>
                    <p className="lead fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light me-3" style={{ width: '50px', height: '50px' }}></div>
                      <div>
                        <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-lg-7 text-white" 
               style={{
                 background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)'
               }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Build Your Dream Career?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Create your professional resume in minutes and take the next step in your career
          </p>
          <Link to="/builder" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{ color: '#ff758c' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;