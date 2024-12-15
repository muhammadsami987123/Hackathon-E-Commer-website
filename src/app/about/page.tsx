import React from "react";
import ContactForm from "@/app/ContactForm";
import FeatureSection from "../FeatureSection";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[200px]">
        <Image
          src="/about.jpg"
          alt="About Us"
          layout="fill" // Makes the image fill the entire container
          objectFit="cover" // Ensures the image covers the entire area without distortion
          className="absolute inset-0 w-full h-64 object-cover" // Ensures the image is positioned correctly
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* You can add content here if needed */}
        </div>
      </div>

      <div className="bg-white p-8 text-center rounded-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us an email. Our <br />
          team is always here to help you.
        </p>
        <ContactForm />
      </div>

      {/* About Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Highlights Section */}
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
