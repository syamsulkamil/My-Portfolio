import React, { Fragment } from 'react'
import { Button } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">

        <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                <h1 className="m-0 font-big animate-charcter">I'm Syamsul,</h1>
                <p className="ls-2 mt-2 slide-in-bottom">Frontend Developer / React Native / React Js</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/nomad-bro.png" alt="..."></img>
            </div>

          </div>

          <NavLink to="/mywork" className="nav-link align-middle px-0 text-white flex flex-row">
            <Button variant="gradient" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              View Portfolio
            </Button>
          </NavLink>

        </div>

      </div>
    </Fragment>
  )
}

export default Home