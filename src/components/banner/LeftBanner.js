import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaTwitter, FaLinkedinIn, FaGithub, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiLeetcode, SiTailwindcss, SiFigma, SiNextdotjs, SiReact, SiSpringboot, SiFlask } from 'react-icons/si';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Full Stack Developer.', 'UI Designer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">vishnupriya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/vishnupriya2607" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vishnupriya-ramar-94b395259/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href="https://leetcode.com/u/VISHNUPRIYARAMAR/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>

            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
