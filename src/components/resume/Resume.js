import React from 'react';
import { l } from "../../assets/index";
import { vishnu } from "../../assets/index";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black flex justify-center items-center">
      <div className="flex flex-col items-start w-1/2 space-y-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Looking for My Resume?</h2>
        <p className="text-lg mb-4">
          I'm always open to new opportunities. If you'd like to see my qualifications, download my resume or get in touch with me.
        </p>
        <div>
          <p className="text-lg mb-2">
            Email: <a href="mailto:your.email@example.com" className="text-designColor underline">vishnupriyaramar68@gmail.com</a>
          </p>
          <p className="text-lg">
            Phone: <a href="tel:+1234567890" className="text-designColor underline">+936 300 7399</a>
          </p>
        </div>
        <button className="px-8 py-3 bg-designColor text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-glow">
          <a href={vishnu}>Download Resume</a>
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={l} alt="Resume Illustration" className="w-full h-full object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Resume;
