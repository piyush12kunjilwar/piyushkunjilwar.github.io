import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Bio</h2>
          <p className="text-gray-700">
            I am a passionate developer with a strong background in web development and software engineering.
            With several years of experience in the industry, I specialize in creating modern, responsive,
            and user-friendly applications.
          </p>
          <p className="text-gray-700">
            My journey in technology started with a deep curiosity about how things work, which led me to
            pursue a career in software development. I'm constantly learning and adapting to new technologies
            to stay at the forefront of the industry.
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Degree in Computer Science</h3>
              <p className="text-gray-600">University Name, Year</p>
            </div>
            <div>
              <h3 className="font-semibold">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Certification 1</li>
                <li>Certification 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 