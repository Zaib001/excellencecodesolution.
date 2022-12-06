import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div>
        {/* Slider Start */}
        <section className="slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize">
                    Prepare for new future
                  </span>
                  <h1 className="animated fadeInUp mb-5">
                    Our work is <br />
                    presentation of our <br />
                    capabilities.
                  </h1>
                  <a
                    href="#"
                    className="btn btn-main animated fadeInUp btn-round-full"
                    aria-label="Get started"
                  >
                    Get started
                    <i className="btn-icon fa fa-angle-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Intro Start */}
        <section className="section intro">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="section-title">
                  <span className="h6 text-color color-three ">
                    We are creative &amp; expert people
                  </span>
                  <h2 className="mt-3 content-title">
                    We work with business &amp; provide solution to client with
                    their business problem
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-desktop color-three" />
                  <h4 className="mt-4 mb-3">Modern &amp; Responsive design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, ducimus.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-medall color-three" />
                  <h4 className="mt-4 mb-3">Awarded licensed company</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, ducimus.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="intro-item">
                  <i className="ti-layers-alt color-three" />
                  <h4 className="mt-4 mb-3">
                    Build your website Professionally
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Intro END */}
        {/* Section About Start */}
        <section className="section about position-relative">
          <div className="bg-about">
           <video controls autoPlay width="100%" height="600">
           <source src="../images/about/bg.mp4" type="video/mp4"/>
           </video>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6 offset-md-0">
                <div className="about-item ">
                  <span className="h6 color-three">What we are</span>
                  <h2 className="mt-3 mb-4 position-relative content-title">
                    We are dynamic team of creative people
                  </h2>
                  <div className="about-content">
                    <p className="mb-5">
                      "ECS (Excellence Code Solution) is a leading, Development
                      & Desing expert company providing Superior Software Web
                      mobile and creative Desing solutions and Services. Highly
                      Skill intellectual personnel most having substantial work
                      experience in diverse areas of information technology make
                      a our team. Company has developed project that are
                      ecnomical and qualitative. Our goal is to exceed our
                      customers expectations in the form of value quality and
                      complete customer satisfaction. ."
                    </p>
                    <Link to="/" className="btn btn-main btn-round-full">
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section About End */}
        {/* section Counter Start */}
        <section className="section counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item text-center mb-5 mb-lg-0">
                  <h3 className="mb-0">
                    <span className="counter-stat font-weight-bold">30</span> +
                  </h3>
                  <p className="text-muted">Project Done</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item text-center mb-5 mb-lg-0">
                  <h3 className="mb-0">
                    <span className="counter-stat font-weight-bold">12 </span>k{" "}
                  </h3>
                  <p className="text-muted">User Worldwide</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item text-center mb-5 mb-lg-0">
                  <h3 className="mb-0">
                    <span className="counter-stat font-weight-bold">1</span>
                  </h3>
                  <p className="text-muted">Availble Country</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item text-center">
                  <h3 className="mb-0">
                    <span className="counter-stat font-weight-bold">1</span>
                  </h3>
                  <p className="text-muted">Award Winner </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section Counter End  */}
        {/*  Section Services Start */}
        <section className="section service border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 color-three">Our Services</span>
                  <h2 className="mt-3 content-title ">
                    We provide a wide range of creative services{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-desktop color-three" />
                  <h4 className="mb-3">Web development.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-layers color-three" />
                  <h4 className="mb-3">Interface Design.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-bar-chart color-three" />
                  <h4 className="mb-3">Business Consulting.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-vector color-three" />
                  <h4 className="mb-3">Branding.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-android color-three" />
                  <h4 className="mb-3">App development.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-pencil-alt color-three" />
                  <h4 className="mb-3">Content creation.</h4>
                  <p>
                    A digital agency isn't here to replace your internal team,
                    we're here to partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section Services End */}
        {/* Section Cta Start */}
        <section className="section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="cta-item  bg-white p-5 rounded">
                  <span className="h6 color-three">We create for you</span>
                  <h2 className="mt-2 mb-4">
                    Entrust Your Project to Our Best Team of Professionals
                  </h2>
                  <p className="lead mb-4">
                    Have any project on mind? For immidiate support :
                  </p>
                  <h3>
                    <i className="ti-mobile mr-3 color-three" />
                    +92 320-4702032
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section Cta End*/}
       
        <section className="section latest-blog bg-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 color-three">Latest Events</span>
                  <h2 className="mt-3 content-title text-white">Our Events</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card bg-transparent border-0">
                  <img
                    loading="lazy"
                    src="images/blog/1.jpg"
                    alt="blog"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <img
                    loading="lazy"
                    src="images/blog/2.jpg"
                    alt="blog"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <img
                    loading="lazy"
                    src="images/blog/3.jpg"
                    alt="blog"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-70 position-relative">
          <div className="container">
            <div className="cta-block-2 bg-gray p-5 rounded border-1">
              <div className="row justify-content-center align-items-center ">
                <div className="col-lg-7">
                  <span className="color-three">For Every type business</span>
                  <h2 className="mt-2 mb-4 mb-lg-0">
                    Entrust Your Project to Our Best Team of Professionals
                  </h2>
                </div>
                <div className="col-lg-4">
                  <Link
                    to="/contact"
                    className="btn btn-main btn-round-full float-lg-right "
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
