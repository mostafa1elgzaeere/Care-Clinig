import React from 'react';

function News(props) {
    return (
        <div className=''>
            <div className="page-section bg-light ">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Latest News</h1>
                    <div className="row mt-5">
                        <div className="col-lg-4 py-2 wow zoomIn">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="post-category">
                                        <a href="#">Covid19</a>
                                    </div>
                                    <a href="blog-details.html" className="post-thumb">
                                        <img src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                    </a>
                                </div>
                                <div className="body">
                                    <h5 className="post-title"><a href="blog-details.html">List of Countries without Coronavirus case</a></h5>
                                    <div className="site-info">

                                        <span className="mai-time" /> 1 week ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 py-2 wow zoomIn">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="post-category">
                                        <a href="#">Covid19</a>
                                    </div>
                                    <a href="blog-details.html" className="post-thumb">
                                        <img src="https://images.pexels.com/photos/7108389/pexels-photo-7108389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                    </a>
                                </div>
                                <div className="body">
                                    <h5 className="post-title"><a href="blog-details.html">Recovery Room: News beyond the pandemic</a></h5>
                                    <div className="site-info">

                                        <span className="mai-time" /> 4 weeks ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 py-2 wow zoomIn">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="post-category">
                                        <a href="#">Covid19</a>
                                    </div>
                                    <a href="blog-details.html" className="post-thumb">
                                        <img src="https://images.pexels.com/photos/9317179/pexels-photo-9317179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                    </a>
                                </div>
                                <div className="body">
                                    <h5 className="post-title"><a href="blog-details.html">What is the impact of eating too much sugar?</a></h5>
                                    <div className="site-info">
                                        <div className="avatar mr-2">

                                        </div>
                                        <span className="mai-time" /> 2 months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4 wow zoomIn">
                            <a href="blog.html" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div> {/* .page-section */}
        </div>

    );
}

export default News;