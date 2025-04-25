import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.'
    },
    {
      title: 'Software Engineer',
      company: 'Startup Inc',
      period: '2018 - 2020',
      description: 'Developed and maintained web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University Name',
      period: '2016 - 2018'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2012 - 2016'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 