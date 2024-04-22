import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="col py-3 d-flex align-items-center about-image">

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">About me</h1>
                                <hr></hr>
                                <p className='slide-in-bottom'>Experienced software developer specialize in frontend development for web and mobile apps
                                    with five years of software development working experience.<br></br>
                                </p>
                                <p className='slide-in-bottom'>
                                    Highly passionate about innovation and committed to staying updated with industry trends to deliver high-quality products.
                                </p>
                                <p className='slide-in-bottom'>
                                    Currently work as Frontend Developer at <a className="text-red ls-2" href="https://www.accenture.com/my-en" target="/blank"> Accenture</a><br></br>
                                    The technology I've worked on : <span className="text-red ls-2">React Native, React JS <br></br>
                                        Angular, PHP, MySQL </span>
                                </p>
                                <p className='slide-in-bottom'>
                                    I enjoy researching latest technology trends and working on side projects during my free time. <br></br>
                                    <a className="text-red ls-2" href="/mywork" rel="noopener noreferrer">Refer to my portfolio</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                        </div>



                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default About