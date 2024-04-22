import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 bg-dark slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">SYAMSUL KAMIL</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Frontend Developer</h4>
                                    <h6 className="blue-label px-2 py-1">May 2021 - Present</h6>
                                    <p className="m-0">Accenture Solutions Sdn Bhd · Full-time</p>
                                    <p>Kuala Lumpur, Malaysia</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Embedded Software Programmer</h4>
                                    <h6 className="blue-label px-2 py-1">Jan 2021 - Apr 2021</h6>
                                    <p className="m-0">Akar Indah Engineering Sdn Bhd · Contract</p>
                                    <p>Serdang, Selangor, Malaysia</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">PHP Web Developer</h4>
                                    <h6 className="blue-label px-2 py-1">March 2018 - Dec 2020</h6>
                                    <p className="m-0">Gaia Technologies Sdn Bhd · Internship - Contract</p>
                                    <p>Kota Damansara, Selangor, Malaysia</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">

                            <h4 className="ff-jose ls-2">EDUCATION</h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Bachelor of Computer Science (Hons) Specialization in Software Engineering.</h4>
                                    <h6 className="blue-label px-2 py-1">2015 - 2019</h6>
                                    <p className="m-0"> Multimedia University (MMU), Cyberjaya, Malaysia</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">A-Level Foundation</h4>
                                    <h6 className="blue-label px-2 py-1">2013 - 2015</h6>
                                    <p className="m-0"> German-Malaysian Institute, Kajang, Malaysia</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">Malaysian Certificate of Education</h4>
                                    <h6 className="blue-label px-2 py-1">2008 - 2012</h6>
                                    <p className="m-0"> MRSM Kuala Kubu Bharu, Malaysia</p>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <hr></hr>

                </div>
            </div>
        </Fragment>
    )
}

export default Resume