import React from 'react';
import { Github, Linkedin, Mail, MapPin, Globe, Award, BookOpen, Code, Camera, Facebook, Instagram, Twitter, Music, Gamepad2, Users, Heart } from 'lucide-react';

const CV = () => {
  const skills = [
    { name: 'HTML5 / CSS / JS', level: '95%' },
    { name: 'React / Vue.js', level: '90%' },
    { name: 'Adobe Illustrator / Photoshop', level: '85%' },
    { name: 'CI/CD & Git', level: '80%' },
    { name: 'Web Application Security', level: '75%' }
  ];

  const socialLinks = [
    { icon: <Github size={20}/>, url: "github.com/jonny5v" },
    { icon: <Linkedin size={20}/>, url: "linkedin.com/in/jonny5v" },
    { icon: <Facebook size={20}/>, url: "facebook.com/jonny5v" },
    { icon: <Instagram size={20}/>, url: "instagram.com/jonny5v" },
    { icon: <Twitter size={20}/>, url: "twitter.com/jonny5v" }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden shadow-xl">
             <img src="/avatar.jpeg" alt="Jonathan Vu Tran" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight">Jonathan Vu Tran</h1>
            <p className="text-xl text-blue-400 mt-2 font-medium italic">Application Developer & Delivery Lead</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-slate-300 text-sm">
              <span className="flex items-center gap-1"><Mail size={16}/> me@jonathanvutran.com</span>
              <span className="flex items-center gap-1"><MapPin size={16}/> Kenner, Louisiana</span>
              <span className="flex items-center gap-1"><Globe size={16}/> jonathanvutran.com</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-[-40px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar - Left */}
        <div className="lg:col-span-4 space-y-8">
          {/* Socials & Info */}
          <section className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Connect & Info</h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  {social.icon} <span className="text-sm">{social.url}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {['Martial Arts', 'Gaming', 'Photography', 'Music', 'Teaching', 'Family'].map(hobby => (
                <span key={hobby} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">{hobby}</span>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>{skill.name}</span>
                    <span className="text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Main Content - Right */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Bio Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 border-b pb-4">
              <BookOpen className="text-blue-600" /> Biography
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-sm">
              <p>Born and raised in the Greater New Orleans area, my early exposure to technology was influenced by my parents in the IT field. However, martial arts quickly became my other passion, providing me with a lifetime of discipline and a 5th-degree black belt.</p>
              <p>During my time at Tulane, I balanced high school marching band and a fascination with coding. After graduation, I joined my college IT department, where I discovered a creative flair for photography and graphic design—a synergy that now shapes my work as a Developer and Delivery Lead.</p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 border-b pb-4">
              <Code className="text-blue-600" /> Experience
            </h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 ring-4 ring-blue-50"></div>
                <h4 className="text-xl font-bold">Project / Technical Delivery Lead</h4>
                <p className="text-sm font-semibold text-blue-600">Tulane University | 2019 – Present</p>
                <ul className="mt-4 space-y-2 text-slate-600 text-sm list-disc ml-4">
                  <li>Overseeing communications and delivery for multi-department university projects.</li>
                  <li>Monitoring risk, managing scope, and ensuring high-quality technical deliverables.</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-200 text-slate-400">
                <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-bold">Advanced Application Developer</h4>
                <p className="text-sm font-semibold italic uppercase">Tulane University | 2010 – 2019</p>
                <p className="mt-2 text-sm">Designed and innovated custom, scalable applications for university-wide use.</p>
              </div>
            </div>
          </section>

          {/* Accomplishments */}
          <section className="bg-white p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 border-b pb-4">
              <Award className="text-blue-600" /> Notable Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold text-slate-800">5th Degree Black Belt</p>
                <p className="text-slate-500">Taekwondo Junior Nationals Silver Medalist (2001)</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold text-slate-800">BS in Computer Applications</p>
                <p className="text-slate-500">Tulane University (2009)</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CV;