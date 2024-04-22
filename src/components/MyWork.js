import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h1 className="font-bold text-2xl">My Portfolio</h1>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/w-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/w-03.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Task Manager App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/syamsulKamil" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"> Source Code</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/m-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/m-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/m-03.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">Food delivery app</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="https://github.com/syamsulKamil" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"> Source Code</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/n-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/n-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/n-03.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/n-04.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">E-commerce (listing) App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/syamsulKamil" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank">Source Code</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/myunifi-01.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/myunifi-02.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/myunifi-03.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/myunifi-04.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">TM MyUnifi Apps</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://play.google.com/store/apps/details?id=my.myunifi" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"> Try Live Apps</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/unifi-01.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/unifi-02.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/unifi-03.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">TM Unifi Website</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://unifi.com.my/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"> Watch Live</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/nham-01.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/nham-02.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/nham-03.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/nham-04.png" className="d-block w-100 h-64" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">NHAM Conference</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://nhamconferences.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"> Watch Live</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default MyWork