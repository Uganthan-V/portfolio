import React from 'react';
import Section from './Section';
import { BIO, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-gray-300 leading-relaxed">
          <p>{BIO}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
