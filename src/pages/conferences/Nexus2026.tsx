import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
  Calendar, MapPin, Video, Code, Shield, Cloud, Component, CheckCircle2, Trophy, Crosshair, ClipboardList, Target, Award, ExternalLink, Users, User
} from 'lucide-react';

import zohaImg from '@/assets/advisors/ZR.jpeg';
import joeImg from '@/assets/advisors/advisor-2.png';
import ezinneImg from '@/assets/advisors/advisor-6.jpeg';
import firasImg from '@/assets/advisors/Dr firas.jpeg';
import katarzynaImg from '@/assets/advisors/katarzyna.png';
import profOlukemiImg from '@/assets/image copy.png';
import emeraldImg from '@/assets/image copy 6.png';
import drSaleemImg from '@/assets/image copy 3.png';
import fatimahImg from '@/assets/image copy 4.png';
import hassanImg from '@/assets/image copy 5.png';
import truptiImg from '@/assets/image copy 7.png';
import pankajImg from '@/assets/image copy 10.png';
import mrugendraImg from '@/assets/image copy 11.png';
import nandanImg from '@/assets/image copy 12.png';
import satishImg from '@/assets/image copy 14.png';
import sushantImg from '@/assets/image copy 15.png';
import maniImg from '@/assets/image copy 16.png';
import okopiImg from '@/assets/image copy 17.png';
import anshumanImg from '@/assets/image copy 18.png';
import jitenderImg from '@/assets/image copy 19.png';
import anujImg from '@/assets/image copy 20.png';

const expertsData = [
  {
    "name": "Andreza Malena Guedes da Costa Silva",
    "designation": "IPM / International Research Delegate / Data Science & Applied Research",
    "country": "Brazil"
  },
  {
    "name": "Fatimah Alneel",
    "designation": "The University of Arizona / Academic Delegate",
    "country": "United States"
  },
  {
    "name": "Samsar Naouel",
    "designation": "Faculty of Medicine, Oran / Medical Research & Healthcare Innovation",
    "country": "Algeria"
  },
  {
    "name": "PEYELINGA NDANGIATO JOMPLIN",
    "designation": "Privé",
    "country": "Algérie"
  },
  {
    "name": "Marghescu Cristina-Florentina",
    "designation": "University Politehnica of Bucharest (UPB) / Research Delegate / Engineering & Technical Research",
    "country": "Romania"
  },
  {
    "name": "DIAKITE SAMBA KANI",
    "designation": "Ministère de l'Environnement et du Développement Durable",
    "country": "Guinée"
  },
  {
    "name": "Pauline Efeti Luma",
    "designation": "Hasselt university",
    "country": "Belgium"
  },
  {
    "name": "Gail Narinesingh",
    "designation": "The University of the West Indies",
    "country": "Trinidad"
  },
  {
    "name": "Fatemeh Doostgharin",
    "designation": "Quranic reaserch",
    "country": "Iran"
  },
  {
    "name": "KHADRAN MOHAMMED A ALSAHAIMI",
    "designation": "Jamia Hamdard / Conference Delegate / Research Scholar in Applied Sciences",
    "country": "Saudi Arabia"
  },
  {
    "name": "James Abdul Malik",
    "designation": "Academy for Cultural Diplomacy / International Delegate / International Relations & Cultural Studies",
    "country": "Germany"
  },
  {
    "name": "TRAORE Parfait Doubassi",
    "designation": "Université Norbert Zongo, Laboratoire de Mathématiques Informatique et Applications",
    "country": "Burkina Faso"
  },
  {
    "name": "Halima ALMaktoumi",
    "designation": "Sohar University, Academic Research & Higher Education",
    "country": "Oman"
  }
];

const judgesData = [
  {
    name: "Taleb Hammad",
    organisation: "EyesNY",
    designation: "DBA / executive director",
    country: "USA",
    image: "/images/judges/taleb.png",
    bio: "Experienced executive director with a demonstrated history of working in database administration."
  },
  {
    name: "Tamar Makharoblidze",
    organisation: "School Of Arts and Sciences Ilai State University.",
    designation: "Professor",
    country: "Georgia",
    image: "/images/judges/tamar.png",
    bio: "Professor specializing in advanced academic research and higher education."
  },
  {
    name: "Trupti Raikar",
    designation: "SAP Technology Architect",
    country: "USA",
    image: truptiImg,
    bio: "SAP Technology Architect providing strategic guidance for technology initiatives."
  },
  {
    name: "Ezinne Esther Arisa",
    designation: "Candy Rainbow Creations",
    country: "South Africa",
    image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg",
    bio: "Creative leader and professional driving innovation in the South African region."
  },
  {
    name: "Dr. Saleem Abu Jaber",
    organisation: "Achva Academic College",
    designation: "Academic Advisor Head & Senior Lecturer",
    country: "Israel",
    image: drSaleemImg,
    bio: "Academic Advisor Head & Senior Lecturer focused on advancing academic methodologies."
  },
  {
    name: "Fatimah Alneel",
    organisation: "The University of Arizona",
    designation: "PhD Higher Education",
    country: "Saudi Arabia",
    image: fatimahImg,
    bio: "Higher Education professional committed to educational development."
  },
  {
    name: "Dr. Sushant Kumar Dubey",
    organisation: "Amity University, Patna",
    designation: "Assistant Professor",
    country: "India",
    image: sushantImg,
    bio: "Assistant Professor and researcher in modern technologies."
  },
  {
    name: "Okopi Fredrick",
    organisation: "Unique UJ SERVICE LIMITES",
    designation: "CEO",
    country: "Nigeria",
    image: okopiImg,
    bio: "CEO driving strategic business services in Nigeria."
  },
  {
    name: "Emerald Abena Amponsah Baffour",
    organisation: "G-Fash Networks",
    designation: "CEO",
    country: "Ghana",
    image: emeraldImg,
    bio: "CEO leading technological advancements and network solutions."
  }
];

const technicalJudgesData = [
  {
    name: "Hassan Mohammad Karimi",
    organisation: "Amirkabir University of Technology",
    designation: "Researcher",
    country: "Iran",
    image: hassanImg,
    bio: "Researcher specializing in technology and academic advancements."
  },
  {
    name: "Anshuman Khandelwal",
    designation: "Technical Review & Evaluation Judge",
    image: anshumanImg,
    bio: "Expert Technical Review & Evaluation Judge."
  },
  {
    name: "Jitender Yadav",
    designation: "Technical Review & Evaluation Judge",
    image: jitenderImg,
    bio: "Professional Technical Review & Evaluation Judge."
  },
  {
    name: "Anuj Agrawal",
    designation: "Technical Review & Evaluation Judge",
    image: anujImg,
    bio: "Dedicated Technical Review & Evaluation Judge."
  },
  {
    name: "Marghescu Cristina-Florentina",
    organisation: "University Politehnica of Bucharest (UPB)",
    designation: "PhD Researcher in Mathematics",
    country: "Romania",
    image: "/images/judges/cristina.jpeg",
    bio: "PhD Researcher in Mathematics."
  },
  {
    name: "Pankaj Arora",
    designation: "Healthcare Supply Chain Leader",
    country: "United States",
    image: pankajImg,
    bio: "Leader in Healthcare Supply Chain optimizations."
  },
  {
    name: "Mrugendra Madalagi",
    designation: "Technical Architect",
    country: "USA",
    image: mrugendraImg,
    bio: "Skilled Technical Architect in modern software design."
  },
  {
    name: "Nandan Sharma",
    designation: "Technology, Delivery & Innovation Leader",
    country: "United States",
    image: nandanImg,
    bio: "Leader driving innovation and successful technology delivery."
  },
  {
    name: "Satish Kabade",
    designation: "Product Technical Expert",
    country: "New York, USA",
    image: satishImg,
    bio: "Expert in technical product strategy and development."
  }
];

const internationalDelegatesData = [
  {
    name: "Prof. Olukemi Ajibike Aluko",
    organisation: "Obafemi Awolowo University",
    designation: "Professor",
    country: "Nigeria",
    image: profOlukemiImg,
    bio: "Professor involved in extensive academic and international research."
  }
];

const chiefTechDirectorData = [
  {
    name: "Mani Tahriri",
    organisation: "Mentor, Professor in Computer Engineering",
    designation: "Director of Technology & Chief Technology Presenter",
    country: "Spain",
    image: maniImg,
    bio: "Renowned mentor and Professor in Computer Engineering, leading technology strategies."
  }
];

const directorsData = [
  {
    name: "Dr. Zoha Rahman",
    organisation: "Centre for Big Data & Machine Learning",
    designation: "Board Member",
    country: "USA",
    image: zohaImg,
    bio: "Expert in Big Data and Machine Learning."
  },
  {
    name: "Dr. Joe Perez",
    organisation: "NC Department of Health & Human Services",
    designation: "Head of Data Strategy",
    country: "Raleigh, NC, USA",
    image: joeImg,
    bio: "Experienced data strategist and analytics leader."
  },
  {
    name: "Ezinne Esther Arisa",
    organisation: "Global Centre for Responsible Technology",
    designation: "Independent Director",
    country: "South Africa",
    image: ezinneImg,
    bio: "Advocate for responsible and ethical technology adoption."
  },
  {
    name: "Dr. Katarzyna Antosz",
    organisation: "European Academy of Engineering Sciences",
    designation: "Board Member & Research Strategist",
    country: "Poland",
    image: katarzynaImg,
    bio: "Research strategist driving engineering advancements."
  },
  {
    name: "Dr. Firas Zeidan",
    organisation: "Institute for Technology & Human Progress",
    designation: "Advisory Board Member",
    country: "Lebanon",
    image: firasImg,
    bio: "Advisor specializing in the intersection of technology and human progress."
  }
];

const hostsData = [
  {
    name: "Dr. Aida Mehrad",
    organisation: "C3S Business School",
    designation: "Chairperson & Chief Program Moderator",
    country: "Spain",
    image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg"
  }
];

const Nexus2026 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial Summit Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85 bg-gradient-to-t from-slate-950 via-slate-950/70 flex items-center"></div>
        </div>

        <div className="container-custom relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-md mb-6">
              <Code className="w-4 h-4 mr-2" />
              Global Virtual Summit
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Nexus Industrial Summit <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">2026</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Join the ultimate convergence of AI, Data Science, Cloud, Cybersecurity, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 28, 2026 (Sunday) • EDT / UTC</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Video className="w-5 h-5 text-primary mr-3" />
                <span className="text-white font-medium">Virtual Event</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-background relative">
        <div className="container-custom space-y-24">

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About the Summit</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    Nexus Industrial Summit 2026 is an international virtual summit that brings together researchers, industry professionals, technology leaders, entrepreneurs, educators, and students from around the world to discuss advancements in Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, Machine Learning, and Digital Transformation.
                  </p>
                  <p>
                    We are bringing together the brightest minds to focus on global collaboration, knowledge sharing, research dissemination, industry-academia partnerships, innovation and emerging technologies, and professional networking.
                  </p>
                </div>
              </motion.div>

              {/* About InnovoraMind Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">About InnovoraMind</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    InnovoraMind LLC, a leader in Enterprise IT Solutions, AI, and Digital Transformation, is proud to host the Nexus Industrial Summit. Drawing upon our extensive background in leveraging cutting-edge technologies for enterprise success, we aim to cultivate a community of innovators who can address the complex challenges of tomorrow's digital landscape.
                  </p>
                </div>
              </motion.div>

              {/* Objective Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Objective</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <ul className="text-muted-foreground text-lg leading-relaxed list-disc list-inside space-y-2">
                    <li>Promoting innovation and digital transformation</li>
                    <li>Encouraging interdisciplinary collaboration</li>
                    <li>Supporting research and industry engagement</li>
                    <li>Creating opportunities for international networking</li>
                    <li>Facilitating discussions on real-world technological challenges</li>
                  </ul>
                </div>
              </motion.div>

              {/* Agenda Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Agenda</h2>
                </div>

                <div className="space-y-6 mt-8">
                  {[
                    { time: "09:00 AM EDT / 13:00 UTC", title: "Opening Ceremony & Welcome Address", desc: "Welcome address and summit inauguration." },
                    { time: "10:00 AM EDT / 14:00 UTC", title: "Global Keynote Session", desc: "Insights and visions from leading industry experts." },
                    { time: "12:00 PM EDT / 16:00 UTC", title: "Expert Panel Discussions", desc: "Interactive debates on emerging technologies." },
                    { time: "02:00 PM EDT / 18:00 UTC", title: "Research & Innovation Presentations", desc: "Showcasing groundbreaking research and innovation." },
                    { time: "04:00 PM EDT / 20:00 UTC", title: "Industry Case Studies & Technology Insights", desc: "Real-world applications and technological advancements." },
                    { time: "06:00 PM EDT / 22:00 UTC", title: "International Networking Session", desc: "Global connection and collaboration opportunities." },
                    { time: "08:00 PM EDT / 00:00 UTC", title: "Awards, Recognition & Closing Ceremony", desc: "Honoring achievements and concluding the event." },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center bg-card p-4 rounded-2xl border border-border/50 shadow-sm hover:border-accent/50 transition-colors">
                      <div className="bg-accent/10 text-accent font-bold px-4 py-2 rounded-xl sm:w-40 text-center mb-4 sm:mb-0 sm:mr-6">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Evaluation Criteria Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Recognition Criteria</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: Component, title: "Innovation & Originality", desc: "Originality of the idea and creative approach to solving industry problems." },
                    { icon: Target, title: "Research Contribution", desc: "Depth of research and potential to advance the field." },
                    { icon: Shield, title: "Industry Relevance", desc: "How well the solution addresses practical, real-world industry challenges." },
                    { icon: Crosshair, title: "Technology Impact", desc: "Potential for significant technological advancement and scalability." },
                    { icon: ClipboardList, title: "Presentation Excellence", desc: "Clarity, professionalism, and quality of the presentation." }
                  ].map((crit, idx) => (
                    <div key={idx} className="bg-background border border-border p-6 rounded-2xl">
                      <crit.icon className="w-8 h-8 text-emerald-500 mb-4" />
                      <h4 className="font-bold text-lg mb-2">{crit.title}</h4>
                      <p className="text-sm text-muted-foreground">{crit.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-card border border-border p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2 text-foreground">Selection & Recognition Transparency</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Presentations and research will be reviewed by an international multidisciplinary panel of experts from academia and industry. Submissions are independently evaluated against predefined recognition criteria.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participants who meet the high standards of our recognition criteria will be eligible for various awards and certifications, reflecting their excellence in Knowledge Exchange, Innovation, Research and Industry Collaboration.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Sidebar Registration */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-2xl sticky top-32"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">Registration</h3>
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    Open Now
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Ready to innovate? Join Nexus Industrial Summit 2026. Choose your role below to complete your registration.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="https://forms.gle/ZYx7Hvx5dirdZqa16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Participant Registration
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase font-medium">Or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>

                  <a
                    href="https://forms.gle/A7HTtihp7mNXRG9y8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-muted border border-border px-4 py-4 text-sm font-bold text-foreground hover:bg-muted/80 transition-all"
                  >
                    Panel Member Registration
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Deadline
                  </div>
                  <p className="text-xs text-muted-foreground">Registration closes on June 26, 2026.</p>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border/50 mt-4">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                    IP & Presentation Policy
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Participants retain full ownership and intellectual property rights of their research and presentations. Submitted materials may be used or shared by InnovoraMind LLC solely for promotional and showcase purposes related to the summit.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Board of Directors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Board of Directors</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directorsData.map((director, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{director.name}</h3>
                  {director.designation && (
                    <p className="text-sm font-medium text-blue-500 mb-1">{director.designation}</p>
                  )}
                  {director.organisation && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">{director.organisation}</p>
                  )}
                  {director.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-blue-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {director.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Event Host Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Event Host</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostsData.map((host, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-teal-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {host.image ? (
                      <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{host.name}</h3>
                  {host.designation && (
                    <p className="text-sm font-medium text-teal-500 mb-1">{host.designation}</p>
                  )}
                  {host.organisation && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">{host.organisation}</p>
                  )}
                  {host.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-teal-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {host.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Judges Section (Panel Speakers) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Panel Speakers</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {judgesData.map((judge, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-pink-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {judge.image ? (
                      <img src={judge.image} alt={judge.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{judge.name}</h3>
                  {judge.designation && (
                    <p className="text-sm font-medium text-pink-500 mb-1">{judge.designation}</p>
                  )}
                  {judge.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{judge.organisation}</p>
                  )}
                  {judge.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{judge.bio}</p>
                  )}
                  {judge.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-pink-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {judge.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Review & Evaluation Judges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Technical Review & Evaluation Judges</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalJudgesData.map((judge, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {judge.image ? (
                      <img src={judge.image} alt={judge.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{judge.name}</h3>
                  {judge.designation && (
                    <p className="text-sm font-medium text-amber-500 mb-1">{judge.designation}</p>
                  )}
                  {judge.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{judge.organisation}</p>
                  )}
                  {judge.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{judge.bio}</p>
                  )}
                  {judge.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-amber-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {judge.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Director of Technology & Chief Technology Presenter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Director of Technology & Chief Technology Presenter</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chiefTechDirectorData.map((director, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-cyan-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-32 h-32 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover object-[center_20%]" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{director.name}</h3>
                  {director.designation && (
                    <p className="text-sm font-medium text-cyan-500 mb-1">{director.designation}</p>
                  )}
                  {director.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{director.organisation}</p>
                  )}
                  {director.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{director.bio}</p>
                  )}
                  {director.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-cyan-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {director.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* International Delegates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">International Delegates</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalDelegatesData.map((delegate, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-indigo-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {delegate.image ? (
                      <img src={delegate.image} alt={delegate.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{delegate.name}</h3>
                  {delegate.designation && (
                    <p className="text-sm font-medium text-indigo-500 mb-1">{delegate.designation}</p>
                  )}
                  {delegate.organisation && (
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed flex-grow">{delegate.organisation}</p>
                  )}
                  {delegate.bio && (
                    <p className="text-xs text-muted-foreground italic mb-3 leading-relaxed">{delegate.bio}</p>
                  )}
                  {delegate.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-indigo-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {delegate.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Meet our distinguished experts</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {expertsData.map((expert, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{expert.name}</h3>
                  {expert.country !== "N/A" && (
                    <div className="flex items-center text-sm font-medium text-purple-500/80 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {expert.country}
                    </div>
                  )}
                  {expert.designation !== "N/A" && (
                    <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{expert.designation}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards and Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Awards and Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Global Innovation Excellence Award", desc: "Recognizes outstanding innovation and visionary solutions." },
                { title: "Industry Leadership Award", desc: "Honors excellence in demonstrating significant industry impact and leadership." },
                { title: "Research Impact Award", desc: "Awarded for exceptional contributions to research and technological advancement." },
                { title: "Emerging Professional Award", desc: "Celebrates promising talent and emerging leaders in the field." },
                { title: "Outstanding Presentation Award", desc: "Recognizes the most compelling, clear, and impactful presentation." }
              ].map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-muted border border-border/50 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications & Digital Credentials</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Participants will receive:
                  </p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside mb-4 space-y-1">
                    <li>Certificate of Participation</li>
                    <li>Certificate of Presentation</li>
                    <li>Certificate of Excellence (Award Recipients)</li>
                    <li>Speaker Appreciation Certificate</li>
                    <li>Panel Recognition Certificate</li>
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">
                    All certificates include:
                  </p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Unique Certificate ID</li>
                    <li>QR Code Verification</li>
                    <li>Digital Authentication</li>
                    <li>Online Verification Portal</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Research Publication Showcase</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Selected top presentations may be featured in official summit proceedings or a showcase page to highlight your work to a global audience.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">International Participation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nexus Industrial Summit 2026 is an international professional and academic event that welcomes researchers, professionals, students, innovators, entrepreneurs, and technology leaders from across the globe. The summit promotes international collaboration, innovation, and knowledge exchange across emerging technology domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Nexus2026;
