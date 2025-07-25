import { useState } from "react";
import {
  Github,
  Code,
  Database,
  Menu,
  Phone,
  Linkedin,
  Mail
} from "lucide-react";
import { FaHtml5,FaCss3Alt ,FaNodeJs, FaReact  } from "react-icons/fa";
import { SiTailwindcss,SiExpress,SiGraphql  } from "react-icons/si";


function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ">
      {/* Modern Dark Navbar */}
      <nav className="bg-gray-800/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="text-3xl md:text-xl lg:text-3xl font-bold tracking-wider text-white">
              Rathod Uday
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-12">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-lg lg:text-xl font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-md shadow-lg border-t border-gray-700">
              <div className="px-4 py-4 space-y-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300 py-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/djthtyogx/image/upload/v1753433438/uday_w9cd95.jpg"
              alt="Rathod Uday"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-gray-700 transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-serif tracking-wider mb-4">
            Hello, I am
          </div>
          <div className="font-bold text-4xl sm:text-5xl lg:text-5xl tracking-wider mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Rathod Uday
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 tracking-wider mb-8">
            web Developer
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 text-white">
            <a
              className="bg-transparent border-2 border-emerald-400 text-emerald-500  py-3 px-8 rounded-full text-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 transform hover:-translate-y-1"
              href="https://drive.google.com/file/d/1IDtUSG2zqI5OL-BI_8JuETnA7s-Erq0S/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            <a
              href="#Contact"
              className="bg-emerald-600 border-2 border-emerald-600 text-gray-200 py-3 px-8 rounded-full text-xl font-semibold hover:bg-transparent hover:text-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-600/25 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/UDAY4512"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Github
                size={50}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/uday-rathod-9b045931b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Linkedin
                size={50}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              />
            </a>
            
            <a
              href="https://leetcode.com/u/raud05/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Code
                size={50}
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className="bg-gray-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-400 tracking-wider font-sans mb-4">
              Get to Know More about Me
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wider text-white">
              About Me
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-2/3 text-lg lg:text-xl text-gray-300 space-y-6">
              <p className="leading-relaxed">
                Hey there! Rathod Uday, 20-year-old B.Tech Computer Engineering
                student based in Rajkot with a relentless passion for technology
                and software development. As an aspiring tech enthusiast, I am
                constantly seeking new challenges and opportunities to broaden
                my knowledge and skills in the ever-evolving tech landscape.
              </p>

              <div className="bg-gray-700/50 p-6 rounded-lg shadow-inner backdrop-blur-sm transform transition-all duration-300 hover:bg-gray-700/70">
                <h4 className="font-bold text-xl mb-4 text-white">
                  Education:
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-emerald-400">
                      Bachelor's of Engineering from:
                    </span>
                    <span>V.V.P Engineering College, Rajkot</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-emerald-400">Result:</span>
                    <span className="text-green-400 font-semibold">
                      8.52 CGPA
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-emerald-400">Higher Education:</span>
                    <span>Navyug Vidyalaya, Morbi</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-emerald-400">Result:</span>
                    <span className="text-green-400 font-semibold">72.72 PR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src="https://res.cloudinary.com/djthtyogx/image/upload/v1753433676/img2_uj04pa.png"
                alt="img2"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl mx-auto border-4 border-gray-700 transform transition-transform duration-300 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="Skills"
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold tracking-wider text-gray-400 mb-4">
              Explore My
            </h2>
            <h3 className="text-4xl lg:text-5xl tracking-wider font-sans text-white">
              Tech Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: <FaHtml5 size={120} className="text-red-400" />,
                name: "HTML",
              },
              {
                icon: <FaCss3Alt  size={120} className="text-blue-700" />,
                name: "CSS",
              },
              {
                icon: <FaReact size={120} className="text-blue-400" />,
                name: "React",
              },
              {
                icon: <FaNodeJs size={120} className="text-green-500" />,
                name: "Node.js",
              },
              {
                icon: <SiExpress size={120} className="text-gray-300" />,
                name: "Express.js",
              },
              {
                icon: <SiTailwindcss size={120} className="text-blue-600" />,
                name: "Tailwind CSS",
              },
              {
                icon: <Database size={120} className="text-teal-300" />,
                name: "MySQL",
              },
              {
                icon: <SiGraphql   size={120} className="text-amber-600" />,
                name: "Data Structure",
              },
            ].map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-emerald-500/50">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="font-semibold text-lg lg:text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="Projects" className="bg-gray-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl tracking-wider font-serif text-gray-400 mb-4">
              Check My
            </h2>
            <h3 className="text-5xl lg:text-6xl tracking-widest font-serif text-emerald-400 underline decoration-solid">
              Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                img: "https://acropolium.com/img/articles/chatbots-in-healthcare/img01.jpg",
                title: "Health-AI",
                description: "AI-powered diet recommendation system",
                link: "https://github.com/UDAY4512/Healthchatbot",
              },
              {
                img: "https://i.pinimg.com/originals/d0/0b/d5/d00bd5d615a005646c0b98a43e8c152b.jpg",
                title: "JwelKart",
                description: "Online Jwellery Shop",
                link: "https://github.com/UDAY4512/Jwelercrt",
              },
              {
                img: "https://www.amitree.com/wp-content/uploads/2021/12/what-is-a-task-tracker-and-why-you-need-one.jpeg",
                title: "Task-Tracker",
                description: "crate and delete task",
                link: "https://github.com/UDAY4512/TASK-TRACKER",
              },
               {
                img: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/2024-spotify-brand-assets-media-kit.jpg",
                title: "Spotify-clone",
                description: "platform clone of ui of spotify",
                link: "https://github.com/UDAY4512/SPOTIFY-CLONE",
              },
              {
                img: "https://cdn.dribbble.com/userupload/17904218/file/original-1115752d98bab7877e3dddc43f7dbffb.jpeg?resize=1504x1128&vertical=center",
                title: "Portfolio",
                description: "My portfolio",
                link: "https://github.com/UDAY4512/Portfolio",
              },
              {
                img: "https://media.hudle.in/photos/49940",
                title: "Box-Cricket",
                description: "Cricket management application",
                link: "https://github.com/UMANG797/Box-Cricket",
              },
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-600 hover:border-emerald-500/50">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={project.img}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-bold text-2xl text-center mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-emerald-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-emerald-500 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105"
                  >
                     Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="Contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-400 tracking-wider font-sans mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl lg:text-5xl tracking-widest font-bold text-white">
              Contact Me
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 lg:p-8 max-w-4xl w-full transform transition-all duration-300 hover:shadow-emerald-500/20">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
                <div className="flex items-center gap-4 group">
                  <Mail
                    size={40}
                    className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    href="mailto:rathoduj65@gmail.com"
                  >
                    rathoduj65@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Linkedin
                    size={40}
                    className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    href="https://tinyurl.com/yc2ysdxa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Phone
                    size={25}
                    className="text-green-400 group-hover:scale-110 transition-transform duration-300"
                  />
                  <a
                    className="text-lg lg:text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                    href="https://www.linkedin.com/in/umang-rathod-a63bab255/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 81608 43664
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Dark Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl lg:text-3xl text-blue-500 font-bold tracking-wider mb-4 md:mb-0">
              Rathod Uday
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400">
              <p className="text-sm lg:text-base">
                © 2025 Rathod Uday. All rights reserved. Built with React &
                Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App