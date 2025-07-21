import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700">
        <div className="space-y-3">
          <h3 className="font-bold uppercase">Find A Store</h3>
          <h3 className="font-bold uppercase">Nike Journal</h3>
          <h3 className="font-bold uppercase">Become A Member</h3>
          <h3 className="font-bold uppercase">Feedback</h3>
          <h3 className="font-bold uppercase">Promo Codes</h3>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <h4 className="font-bold uppercase mb-1">Get Help</h4>
          <p className="hover:underline cursor-pointer">Order Status</p>
          <p className="hover:underline cursor-pointer">
            Shipping and Delivery
          </p>
          <p className="hover:underline cursor-pointer">Returns</p>
          <p className="hover:underline cursor-pointer">Payment Options</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <h4 className="font-bold uppercase mb-1">About Nike</h4>
          <p className="hover:underline cursor-pointer">News</p>
          <p className="hover:underline cursor-pointer">Careers</p>
          <p className="hover:underline cursor-pointer">Investors</p>
          <p className="hover:underline cursor-pointer">Sustainability</p>
        </div>

        {/* Column 4 */}
        <div className="space-y-2">
          <h4 className="font-bold uppercase mb-1">Join Us</h4>
          <p className="hover:underline cursor-pointer">Nike App</p>
          <p className="hover:underline cursor-pointer">Nike Run Club</p>
          <p className="hover:underline cursor-pointer">Nike Training Club</p>
        </div>

        {/* Column 5 (Social) */}
        <div className="space-y-2 col-span-2 md:col-span-1">
          <h4 className="font-bold uppercase mb-1">Social</h4>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaYoutube className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>Australia</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <p className="hover:underline cursor-pointer">Guides</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Terms of Sale</p>
          <p className="hover:underline cursor-pointer">Company Details</p>
          <p className="hover:underline cursor-pointer">Modern Slavery Act</p>
          <p className="hover:underline cursor-pointer">
            Privacy & Cookie Policy
          </p>
          <p className="hover:underline cursor-pointer">Cookie Settings</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Igudy Redesign.
      </div>
    </footer>
  );
};

export default Footer;
