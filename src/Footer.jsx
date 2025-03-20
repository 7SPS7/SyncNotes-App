import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const handleNavLinkClick = () => {
        window.scrollTo(0, 0); // Scroll to top when navigating
      };
  return (
    
    <footer className="bg-neutral-950 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
          <h1 className="text-4xl font-bold">SyncNotes.</h1>
          <p className="text-sm font-light leading-6 ml-7">Save. Sync. Access</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={handleNavLinkClick} className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/pastes" onClick={handleNavLinkClick} className="text-gray-400 hover:text-white">All Notes</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SyncNotes. All rights reserved.</p>
          <p>Designed and Developed By Shashwat Pratap Singh</p>
          <a href="https://www.shashwatpratapsingh.in/">Shashwatpratapsingh.in</a>
        </div>
      </div>
    </footer>

  )
}

export default Footer
