import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Front-end developer with more than 3 years of experience developing and 
        maintaining the user interface of enterprise applications using the latest 
        technologies.<br/>
        I have a passion for programming and technology and always strive to solve 
        complex problems and overcome challenges. 
        So far I have HTML, CSS,JavaScript,Bootstrap,React.Js,Tailwind,QraphQl 
        and Git/GitHub.<br/> And I still reach out enthusiastically for other 
        programming languages, frameworks, or principles.
        </p>


      </div>
    </div>
  );
};

export default About;