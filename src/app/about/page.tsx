import React from "react";
import ContactForm from "@/app/ContactForm"
import FeatureSection from "../FeatureSection";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <Image
          src="/about.jpg"
          alt="About Us"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
      <div className="bg-white p-8 text-center rounded-lg ">
        <h2 className="text-3xl text-center font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us an email. Our <br/>team is always here to help you.
        </p>
        <ContactForm />
      </div>

      {/* About Content Section */}
      <div className="container mx-auto px-6 py-12">
         {/* Highlights Section */}
        <FeatureSection/>
        </div>
         
</div>
  );
};

export default About;
