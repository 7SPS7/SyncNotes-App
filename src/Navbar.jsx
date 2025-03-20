import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { state: { scrollToNotes: true } }); // Navigate to Home
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close menu
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  return (
    <nav className="bg-neutral-950 text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">SyncNotes.</h1>
          <p className="text-xs font-light leading-6 ml-7">Save. Sync. Access</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li>
            <NavLink
              to="/"
              onClick={handleNavLinkClick} // Close menu and scroll up
              className={({ isActive }) =>
                `cursor-pointer hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white pb-1" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pastes"
              onClick={handleNavLinkClick} // Close menu and scroll up
              className={({ isActive }) =>
                `cursor-pointer hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white pb-1" : ""
                }`
              }
            >
              All Notes
            </NavLink>
          </li>
          <li>
            <button onClick={handleClick} className="hover:text-gray-300">
              Create New Note
            </button>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <a
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-white py-4 px-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/pastes" onClick={handleNavLinkClick}>All Notes</NavLink>
            </li>
            <li>
              <button onClick={handleClick}>Create New Note</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
