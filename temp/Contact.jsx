import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/Imagescontact/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Contact Alpha Groups</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Reach out for Interior Design, Construction or 3D Concrete Printing Services.
          </p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl p-6 md:p-10 lg:p-14 xl:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 xl:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send a Message</h2>
              <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" name="firstName" id="firstName" placeholder="First Name" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            {/* Interested In */}
            <div className="md:col-span-2">
              <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
              <select name="interestedIn" id="interestedIn" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" required>
                <option value="">Select an option</option>
                <option value="interior-design">Interior Design</option>
                <option value="construction">Construction</option>
                <option value="3d-concrete-printers">3D Concrete Printers</option>
              </select>
            </div>
            {/* Organization Name */}
            <div>
              <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
              <input type="text" name="orgName" id="orgName" placeholder="Organization Name" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            {/* Designation */}
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation in Org</label>
              <input type="text" name="designation" id="designation" placeholder="Designation" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <input type="text" name="industry" id="industry" placeholder="Industry" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            {/* Where did you hear about us */}
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">Where did you hear about us?</label>
              <input type="text" name="referral" id="referral" placeholder="e.g. Google, Social Media, Friend" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="Your Message..." className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
            </div>
            {/* Terms and Conditions */}
            <div className="md:col-span-2 flex items-center gap-2 mt-2">
              <input type="checkbox" name="terms" id="terms" required className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the <a href="#" className="underline text-indigo-700 hover:text-indigo-900">terms and conditions</a>.</label>
            </div>
            {/* Submit Button */}
            <button type="submit" className="col-span-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition mt-2">
              Submit
            </button>
          </form>
        </div>
            {/* Map + Filler Image */}
            <div className="flex flex-col h-full">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.779201047863!2d79.28588076154723!3d13.62345264391564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b511cbefcaf3%3A0x4eb0b29e1d33b522!2sMohan%20Babu%20University!5e0!3m2!1sen!2sin!4v1751289500300!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpha Groups Location"
                ></iframe>
              </div>
              {/* Filler Image for vertical gap */}
              <img src="/src/assets/ImageConcretePrinting/concretePrint.webp" alt="Project Related" className="w-full h-40 object-cover rounded-xl shadow-lg mt-4 hidden md:block flex-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Social Media & Address Section */}
      <div className="max-w-[1200px] w-full mx-auto px-4 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl p-6 md:p-10 lg:p-14 xl:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Address */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <MapPin className="w-8 h-8 text-red-500" />
            <div>
              <div className="font-bold text-lg text-gray-800">Alpha Groups</div>
              <div className="text-gray-700">123 Main Street, City Name, State, Country</div>
              <div className="text-gray-700">Phone: +91 12345 67890</div>
              <div className="text-gray-700">Email: info@alphagroups.com</div>
            </div>
          </div>
          {/* Social Media Handles */}
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition flex items-center gap-2">
              <Linkedin className="w-7 h-7" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition flex items-center gap-2">
              <Instagram className="w-7 h-7" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2">
              <Facebook className="w-7 h-7" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition flex items-center gap-2">
              <Twitter className="w-7 h-7" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
