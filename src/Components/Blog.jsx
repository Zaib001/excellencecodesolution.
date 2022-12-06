import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
         <div>
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Our blog</span>
                  <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item text-white-50">Our blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section blog-wrap bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-5">
                    <div className="blog-item">
                      <img loading="lazy" src="images/blog/1.jpg" alt="blog" className="img-fluid rounded" />
                      <div className="blog-item-content bg-white p-4">
                        <div className="blog-item-meta  py-1 px-2">
                          <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Creativity</span>
                        </div>
                        <h3 className="mt-3 mb-3"><a href="blog-single.html">Improve design with typography?</a></h3>
                        <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium
                          pariatur repudiandae!</p>
                        <Link to='' className="btn btn-small btn-main btn-round-full">Learn More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5">
                    <div className="blog-item">
                      <img loading="lazy" src="images/blog/2.jpg" alt="blog" className="img-fluid rounded" />
                      <div className="blog-item-content bg-white p-4">
                        <div className="blog-item-meta py-1 px-2">
                          <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Design</span>
                        </div>
                        <h3 className="mt-3 mb-3"><a href="blog-single.html">Interactivity connect consumer</a></h3>
                        <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium
                          pariatur repudiandae!</p>
                        <Link to='' className="btn btn-small btn-main btn-round-full">Learn More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5">
                    <div className="blog-item">
                      <img loading="lazy" src="images/blog/3.jpg" alt="blog" className="img-fluid rounded" />
                      <div className="blog-item-content bg-white p-4">
                        <div className="blog-item-meta py-1 px-2">
                          <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Community</span>
                        </div>
                        <h3 className="mt-3 mb-3"><a href="blog-single.html">Marketing Strategy to bring more affect</a></h3>
                        <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium
                          pariatur repudiandae!</p>
                        <Link to='' className="btn btn-small btn-main btn-round-full">Learn More</Ln>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5">
                    <div className="blog-item">
                      <img loading="lazy" src="images/blog/4.jpg" alt="blog" className="img-fluid rounded" />
                      <div className="blog-item-content bg-white p-4">
                        <div className="blog-item-meta py-1 px-2">
                          <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2" />Marketing</span>
                        </div>
                        <h3 className="mt-3 mb-3"><a href="blog-single.html">Marketing Strategy to bring more affect</a></h3>
                        <p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium
                          pariatur repudiandae!</p>
                        <Link to='' className="btn btn-small btn-main btn-round-full">Learn More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <nav className="navigation pagination py-2 d-inline-block">
                      <div className="nav-links">
                        <Link className="prev page-numbers" href="#">Prev</Link>
                        <span aria-current="page" className="page-numbers current">1</span>
                        <Link className="page-numbers" href="#">2</Link>
                        <Link className="next page-numbers" href="#">Next</Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-wrap">
                  <div className="sidebar-widget search card p-4 mb-3 border-0">
                    <input type="text" className="form-control" placeholder="search" />
                    <a href="#" className="btn btn-mian btn-small d-block mt-2">search</a>
                  </div>
                  <div className="sidebar-widget card border-0 mb-3">
                    <img loading="lazy" src="images/blog/blog-author.jpg" alt="blog-author" className="img-fluid" />
                    <div className="card-body p-4 text-center">
                      <h5 className="mb-0 mt-4">Arther Conal</h5>
                      <p>Digital Marketer</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>
                      <ul className="list-inline author-socials">
                        <li className="list-inline-item mr-3">
                          <a href="#"><i className="fab fa-facebook-f text-muted" /></a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="#"><i className="fab fa-twitter text-muted" /></a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="#"><i className="fab fa-linkedin-in text-muted" /></a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="#"><i className="fab fa-pinterest text-muted" /></a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="#"><i className="fab fa-behance text-muted" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
                    <h5>Latest Posts</h5>
                    <div className="media border-bottom py-3">
                      <a href="#"><img loading="lazy" className="mr-4" src="images/blog/bt-3.jpg" alt="blog" /></a>
                      <div className="media-body">
                        <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                        <span className="text-sm text-muted">03 Mar 2018</span>
                      </div>
                    </div>
                    <div className="media border-bottom py-3">
                      <a href="#"><img loading="lazy" className="mr-4" src="images/blog/bt-2.jpg" alt="blog" /></a>
                      <div className="media-body">
                        <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                        <span className="text-sm text-muted">03 Mar 2018</span>
                      </div>
                    </div>
                    <div className="media py-3">
                      <a href="#"><img loading="lazy" className="mr-4" src="images/blog/bt-1.jpg" alt="blog" /></a>
                      <div className="media-body">
                        <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a></h6>
                        <span className="text-sm text-muted">03 Mar 2018</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
                    <h5 className="mb-4">Tags</h5>
                    <a href="#">Web</a>
                    <a href="#">agency</a>
                    <a href="#">company</a>
                    <a href="#">creative</a>
                    <a href="#">html</a>
                    <a href="#">Marketing</a>
                    <a href="#">Social Media</a>
                    <a href="#">Branding</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog