import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveals';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="bg-gradient-to-b from-blue-500 to-blue-700 h-screen flex flex-col items-center justify-center text-white">
        <Reveal><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-pulse font-mono">Welcome to Your Job Portal</h1></Reveal>
        <Reveal><i className="fa fa-search animate-bounce text-9xl" aria-hidden="true"></i></Reveal>
        <Reveal><p className="text-lg md:text-xl lg:text-2xl mb-8 text-center max-w-md">
          Find your dream job or hire the perfect candidate. Your journey starts here.
        </p></Reveal>
        <Reveal>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-black transition-all duration-300 tr"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-black transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-white text-blue-700 py-12 text-center">
        <Reveal><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-pulse"><i className="fa fa-user-o animate-pulse" aria-hidden="true"></i> About Us</h2></Reveal>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-6 text-left">
            <Reveal><h3 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h3></Reveal>
            <Reveal><p className="text-gray-700">
              Welcome to Your Job Portal, where we are committed to connecting employers and job
              seekers seamlessly. Our mission is to simplify the job search and recruitment
              process, making it efficient and effective for everyone.
            </p></Reveal>
          </div>
          <div>
            <Reveal><h3 className="text-xl md:text-2xl font-bold mb-2">Our Values</h3></Reveal>
            <Reveal><p className="text-gray-700">
              We value transparency, diversity, and innovation in the job market. Our goal is to create
              an inclusive platform that benefits both employers and job seekers.
            </p></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-12 text-center">
        <Reveal><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-pulse"><i className="fa fa-question-circle-o animate-pulse" aria-hidden="true"></i> How It Works</h2></Reveal>
        <Reveal><p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
we don't work        </p></Reveal>
      </section>

      <section className="bg-gray-200 text-gray-800 py-12 text-center">
        <Reveal><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-pulse"><i className="fa fa-database animate-pulse" aria-hidden="true"></i> Data Posting and Rendering</h2></Reveal>
        <div className="max-w-3xl mx-auto">
          <Reveal><p className="text-lg md:text-xl lg:text-2xl mb-8">
            Learn how we simplify the job posting and data rendering process. Our advanced algorithms
            ensure that your job listings are seen by the right candidates.
          </p></Reveal>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-8">
        <Reveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: sharmasambhav06@gmail.com</p>
            <p>Phone: +91-7986147005 </p>
            <p>Address: Ludhiana</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <p>Connect with us on social media for the latest updates and job opportunities.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p>Subscribe to our newsletter for the latest job postings and updates.</p>
          </div>
        </div>
        </Reveal>
      </footer>
    </div>
  );
};

export default LandingPage;