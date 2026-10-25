import { useEffect, useState } from "react";
import {
  Github,
  Code,
  Database,
  Menu,
  Phone,
  Linkedin,
  Mail,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Projects" },
  { label: "Connect", href: "#Contact" },
];

const LINKS = {
  cv: "https://drive.google.com/file/d/1IDtUSG2zqI5OL-BI_8JuETnA7s-Erq0S/view",
  github: "https://github.com/UDAY4512",
  linkedin: "https://www.linkedin.com/in/uday-rathod-9b045931b/",
  leetcode: "https://leetcode.com/u/raud05/",
  email: "mailto:rathoduj65@gmail.com",
  phone: "tel:+918160843664",
};

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 size={40} className="text-red-400" aria-hidden="true" />, name: "HTML" },
      { icon: <FaCss3Alt size={40} className="text-blue-500" aria-hidden="true" />, name: "CSS" },
      { icon: <FaJs size={40} className="text-yellow-400" aria-hidden="true" />, name: "JavaScript" },
      { icon: <FaReact size={40} className="text-sky-400" aria-hidden="true" />, name: "React" },
      { icon: <SiTailwindcss size={40} className="text-cyan-400" aria-hidden="true" />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs size={40} className="text-green-500" aria-hidden="true" />, name: "Node.js" },
      { icon: <SiExpress size={40} className="text-gray-300" aria-hidden="true" />, name: "Express.js" },
      { icon: <Code size={40} className="text-emerald-400" aria-hidden="true" />, name: "REST APIs" },
      { icon: <Code size={40} className="text-amber-400" aria-hidden="true" />, name: "JWT Auth" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMongodb size={40} className="text-green-400" aria-hidden="true" />, name: "MongoDB" },
      { icon: <Database size={40} className="text-teal-300" aria-hidden="true" />, name: "MySQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt size={40} className="text-orange-500" aria-hidden="true" />, name: "Git" },
      { icon: <Github size={40} className="text-gray-200" aria-hidden="true" />, name: "GitHub" },
      { icon: <SiVite size={40} className="text-violet-400" aria-hidden="true" />, name: "Vite" },
      { icon: <Code size={40} className="text-amber-500" aria-hidden="true" />, name: "Data Structures" },
    ],
  },
];

const projects = [
  {
    visual: "LMS",
    title: "Learning Management System",
    featured: true,
    tech: "MongoDB, Express, React, Node.js, JWT, Tailwind CSS",
    description:
      "Full-stack MERN LMS with JWT authentication and role-based access for students and instructors. Instructors can create courses; students can register, sign in, and browse the course catalog through a React and Tailwind interface backed by a REST API and MongoDB.",
    link: "https://github.com/UDAY4512/learning-management-system",
  },
  {
    visual: "JK",
    title: "JewelKart",
    featured: true,
    tech: "React, Node.js, Express, MongoDB, JWT, Cloudinary",
    description:
      "Jewelry admin platform for catalog management. Supports JWT-protected admin access, product create/update/delete, Cloudinary image uploads, generated product codes, filtering, pagination, and visibility controls for what appears on the site.",
    link: "https://github.com/UDAY4512/Jwelercrt",
  },
  {
    visual: "AI",
    title: "HealthAI",
    featured: true,
    tech: "React, Express, Gemini API, Tesseract.js",
    description:
      "Health-focused chatbot that sends user text to a Gemini-powered Express API and returns concise health-related analysis, including session conversation history. The React UI also accepts image uploads and uses OCR (Tesseract.js) to extract text before analysis.",
    link: "https://github.com/UDAY4512/Healthchatbot",
  },
  {
    img: "https://www.amitree.com/wp-content/uploads/2021/12/what-is-a-task-tracker-and-why-you-need-one.jpeg",
    title: "Task Tracker",
    featured: false,
    tech: "HTML, CSS, JavaScript",
    description:
      "Browser-based task list for adding and deleting tasks with a straightforward HTML, CSS, and JavaScript interface.",
    link: "https://github.com/UDAY4512/TASK-TRACKER",
  },
  {
    img: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/2024-spotify-brand-assets-media-kit.jpg",
    title: "Spotify Clone",
    featured: false,
    tech: "HTML, CSS, JavaScript",
    description:
      "Front-end UI clone of Spotify’s layout, built with HTML, CSS, and JavaScript to practice structure, styling, and page composition.",
    link: "https://github.com/UDAY4512/SPOTIFY-CLONE",
  },
  {
    img: "https://cdn.dribbble.com/userupload/17904218/file/original-1115752d98bab7877e3dddc43f7dbffb.jpeg?resize=1504x1128&vertical=center",
    title: "Portfolio",
    featured: false,
    tech: "React, Vite, Tailwind CSS",
    description:
      "This personal portfolio site: a responsive React and Tailwind CSS application used to present projects, skills, and contact details.",
    link: "https://github.com/UDAY4512/Portfolio",
  },
  {
    img: "https://media.hudle.in/photos/49940",
    title: "Box Cricket",
    featured: false,
    tech: "JavaScript",
    description:
      "Cricket management application (collaborative repository) for organizing box-cricket related workflows.",
    link: "https://github.com/UMANG797/Box-Cricket",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#151515]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-gray-900"
      >
        Skip to main content
      </a>

      <header>
        <nav
          className="sticky top-0 z-50 border-b border-[#2C2C29] bg-[#151515]/90 backdrop-blur-md"
          aria-label="Primary"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-5">
              <a href="#top" className="font-display text-xl font-semibold tracking-[-0.04em] text-[#F4F0E8] sm:text-2xl">
                RU<span className="text-[#C7F36B]">.</span>
              </a>

              <div className="hidden items-center gap-8 md:flex">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link group relative text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#A6A39B] transition-colors duration-300 hover:text-[#F4F0E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151515]"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C7F36B] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              <a href="#Contact" className="hidden items-center gap-2 rounded-full bg-[#C7F36B] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#151515] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#D8FF86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151515] md:flex">
                Let&apos;s Connect <ArrowUpRight size={15} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={toggleMenu}
                className="rounded-full border border-[#3B3B37] p-2.5 text-[#F4F0E8] transition-colors duration-300 hover:border-[#C7F36B] hover:text-[#C7F36B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>

            {isMenuOpen && (
              <div id="mobile-menu" className="mobile-menu absolute left-0 right-0 top-full border-t border-[#343430] bg-[#151515] md:hidden">
                <div className="space-y-1 px-5 py-4">
                  {NAV_ITEMS.map((item) => (
                    <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between border-b border-[#292925] py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#D0CDC4] transition-colors duration-300 last:border-0 hover:text-[#C7F36B]">
                      {item.label}<ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ))}
                  <a href="#Contact" onClick={() => setIsMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#C7F36B] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#151515]">Let&apos;s Connect <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl scroll-mt-24 flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20" aria-labelledby="hero-name">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative z-10">
            <div className="max-w-5xl text-center lg:text-left">
              <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C7F36B]" style={{ "--delay": "80ms" }}>
                Full-stack developer / 2026 graduate
              </p>
              <h1 id="hero-name" className="animate-fade-up font-display max-w-4xl text-[clamp(3.6rem,9vw,8.7rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#F4F0E8]" style={{ "--delay": "160ms" }}>
                Rathod<br /><span className="text-[#8B8982]">Uday<span className="text-[#C7F36B]">.</span></span>
              </h1>
              <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-7 text-[#A6A39B] sm:text-lg lg:mx-0" style={{ "--delay": "260ms" }}>
                I build thoughtful, full-stack web experiences with the MERN stack — from clear APIs to interfaces that feel effortless to use.
              </p>

              <div className="animate-fade-up mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start" style={{ "--delay": "360ms" }}>
                <a href="#Projects" className="arrow-button group inline-flex items-center justify-center gap-3 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-bold text-[#151515] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8FF86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151515]">
                  Explore My Work <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </a>
                <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="arrow-button group inline-flex items-center justify-center gap-3 rounded-full border border-[#4B4B45] px-6 py-3.5 text-sm font-bold text-[#F4F0E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F36B] hover:text-[#C7F36B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151515]">
                  Download CV <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </a>
              </div>

              <div className="animate-fade-up mt-10 flex justify-center gap-5 lg:justify-start" style={{ "--delay": "460ms" }}>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
              >
                <Github size={40} className="sm:h-12 sm:w-12" aria-hidden="true" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
              >
                <Linkedin size={40} className="sm:h-12 sm:w-12" aria-hidden="true" />
              </a>
              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="text-gray-400 transition-colors duration-300 hover:text-amber-400"
              >
                <Code size={40} className="sm:h-12 sm:w-12" aria-hidden="true" />
              </a>
                          </div>
            </div>

          </div>
        </section>

        <section id="About" className="scroll-mt-24 border-t border-[#2C2C29] bg-[#1B1B19] py-20 lg:py-28" aria-labelledby="about-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#C7F36B]">01 / About</p>
              <h2 id="about-heading" className="font-display text-4xl font-semibold tracking-[-0.06em] text-[#F4F0E8] lg:text-6xl">A developer who cares about the details.</h2>
            </div>

            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <div className="w-full space-y-6 text-lg text-gray-300 lg:w-2/3 lg:text-xl">
                <p className="leading-relaxed">
                  I am Rathod Uday, a Computer Engineering graduate (2026)
                  from V.V.P. Engineering College, Rajkot, with an 8.50/10
                  CGPA. I focus on full-stack JavaScript: React on the
                  frontend and Node.js, Express, and MongoDB on the backend.
                  I am looking for a junior software developer role where I
                  can apply this stack to real products.
                </p>
                <p className="leading-relaxed">
                  Recent work includes a MERN learning management system with
                  JWT roles, a jewelry admin platform with catalog CRUD and
                  image uploads, and a health chatbot that combines an Express
                  API with Gemini and OCR. I value clear APIs, readable UI,
                  and shipping projects end to end.
                </p>

                <div className="rounded-lg bg-gray-700/50 p-6 shadow-inner backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-emerald-400">
                        Bachelor of Engineering in Computer Engineering
                      </p>
                      <p>V.V.P. Engineering College, Rajkot · 2026</p>
                      <p>
                        CGPA:{" "}
                        <span className="font-semibold text-green-400">8.50 / 10</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-400">Higher Secondary</p>
                      <p>Navyug Vidyalaya, Morbi</p>
                      <p>
                        Result:{" "}
                        <span className="font-semibold text-green-400">72.72 PR</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <img
                  src="https://res.cloudinary.com/djthtyogx/image/upload/v1753433676/img2_uj04pa.png"
                  alt="Decorative illustration from the portfolio"
                  width={384}
                  height={384}
                  className="mx-auto h-72 w-72 rounded-full border-4 border-gray-700 object-cover shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="Skills"
          className="scroll-mt-24 border-t border-[#2C2C29] bg-[#151515] py-20 lg:py-28"
          aria-labelledby="skills-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#C7F36B]">02 / Skills</p>
              <h2 id="skills-heading" className="font-display text-4xl font-semibold tracking-[-0.06em] text-[#F4F0E8] lg:text-6xl">The tools behind the work.</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
                >
                  <h3 className="mb-5 text-xl font-semibold text-emerald-400">{group.title}</h3>
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex flex-col items-center rounded-lg border border-gray-700 bg-gray-900/60 p-4 text-center"
                      >
                        <div className="mb-3">{skill.icon}</div>
                        <span className="text-sm font-semibold text-gray-300 sm:text-base">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="Projects" className="scroll-mt-24 border-t border-[#2C2C29] bg-[#1B1B19] py-20 lg:py-28" aria-labelledby="projects-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#C7F36B]">03 / Selected work</p>
              <h2 id="projects-heading" className="font-display text-4xl font-semibold tracking-[-0.06em] text-[#F4F0E8] sm:text-5xl lg:text-6xl">Featured projects.</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-[1.25rem] border border-[#383833] bg-[#242421] p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-[#C7F36B]/60 sm:p-5"
                >
                  <div className="relative mb-5 overflow-hidden rounded-xl">
                    <img
                      className="h-52 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] sm:h-60"
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%23242421'/%3E%3Cpath d='M0 520h1200' stroke='%23C7F36B' stroke-opacity='.35' stroke-width='2'/%3E%3Ctext x='72' y='168' fill='%23C7F36B' font-family='Arial' font-size='34' letter-spacing='8'%3ETEMPORARY PROJECT VISUAL%3C/text%3E%3Ctext x='72' y='390' fill='%23F4F0E8' font-family='Arial' font-size='150' font-weight='700'%3E${project.visual}%3C/text%3E%3C/svg%3E`}
                      alt={`${project.title} project visual placeholder`}
                    />
                    {project.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#C7F36B] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#151515]">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-2 text-center text-sm font-medium text-emerald-400">{project.tech}</p>
                  <p className="mb-6 flex-grow text-center text-sm leading-relaxed text-gray-300 sm:text-base">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta flex w-full items-center justify-center gap-2 rounded-full border border-[#4B4B45] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#F4F0E8] transition-colors duration-300 hover:border-[#C7F36B] hover:text-[#C7F36B]"
                  >
                    View on GitHub <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="Contact"
          className="scroll-mt-24 border-t border-[#2C2C29] bg-[#151515] py-20 lg:py-28"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#C7F36B]">04 / Connect</p>
              <h2 id="contact-heading" className="font-display text-4xl font-semibold tracking-[-0.06em] text-[#F4F0E8] lg:text-6xl">Let&apos;s build something useful.</h2>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-4xl rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-xl lg:p-8">
                <ul className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:flex-wrap lg:gap-12">
                  <li className="flex items-center gap-4">
                    <Mail size={32} className="shrink-0 text-emerald-400" aria-hidden="true" />
                    <a
                      className="break-all text-lg text-gray-300 transition-colors duration-300 hover:text-emerald-400 lg:text-xl"
                      href={LINKS.email}
                    >
                      rathoduj65@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Linkedin size={32} className="shrink-0 text-emerald-400" aria-hidden="true" />
                    <a
                      className="text-lg text-gray-300 transition-colors duration-300 hover:text-emerald-400 lg:text-xl"
                      href={LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone size={28} className="shrink-0 text-green-400" aria-hidden="true" />
                    <a
                      className="text-lg text-gray-300 transition-colors duration-300 hover:text-emerald-400 lg:text-xl"
                      href={LINKS.phone}
                    >
                      +91 81608 43664
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-2xl font-bold tracking-wider text-emerald-400 lg:text-3xl">
              Rathod Uday
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap justify-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-300 transition-colors duration-300 hover:text-[#C7F36B]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400 lg:text-base">
              © 2026 Rathod Uday. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
