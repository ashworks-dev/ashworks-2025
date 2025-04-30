import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  achievements?: string[];
  companyDescription?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  link?: string;
  period: string;
  technologies: {
    icon: string;
    name: string;
  }[];
}

interface OtherProject {
  title: string;
  period: string;
  link?: string;
  description?: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  summary = `Experienced web/application developer (20+ years) and videographer (8+ years) with a passion for creating high-quality corporate training, educational, and promotional content. Self-taught, adaptable, and obsessed with emerging tech — from Flash to Angular, from digital tape videos to virtual tours, from AWS hosting to implementing AI models. Currently seeking new opportunities to leverage my skills in web development and videography to create innovative, high-quality digital solutions.`;

  experiences: Experience[] = [
    
    {
      company: 'Liberate Learning',
      position: 'Web Applications Developer / Videographer',
      period: '2014–Present',
      location: 'Remote Contractor',
      companyDescription: 'A leading Australian eLearning company specializing in custom learning solutions, corporate training, and educational technology. Known for innovative approaches to digital learning and award-winning courseware.',
      description: [
        'Built and deployed Angular web apps, portals, 360 tours, mobile apps for major Australian universities, banks, and gov departments',
        'Led multi-year Angular / Laravel / Lumen projects',
        'Developed award-winning 360 training environments and video-first learning modules',
        'Embedded R&D for emerging tech: VR, AI chatbots, cloud infrastructure',
        'Produced 200+ short-form corporate/training videos across Australia',
        
        'Developed internal business tools for lesson planning, chatbots',
        'R&D and tech consulting on projects: custom LLM uses, volumetric 3D video rendering, AI avatars, AI courseware generation'
      ],
      achievements: [
        '2023 LearnX Winner – Best eLearning Design',
        '2023 AITD Finalist – Best Learning Technology'
      ]
    },
    {
      company: 'Omni Asia Pacific',
      position: 'Senior Web & Multimedia Developer',
      period: '2007–2013',
      location: 'Melbourne, Australia',
      companyDescription: 'A pioneering eLearning company that specialized in creating interactive learning solutions using Flash and 3D technologies. Known for developing innovative training tools and compliance courses for major Australian corporations.',
      description: [
        'Built hundreds of interactive Flash/HTML training sites',
        'Developed custom and reusable courseware frameworks in HTML/JS',
        'Created mobile apps for training medical registrars',
        'Managed small dev teams, offshored production, 3D avatar development',
        'Heavy focus on accessibility, LMS integration, cross-browser compliance'
      ],
      achievements: [
        'eLearning Excellence Award Winner 2009 & 2012'
      ]
    },
    {
      company: 'CSIRO Multimedia',
      position: 'Lead Multimedia Developer',
      period: '2004–2008',
      location: 'Melbourne, Australia',
      companyDescription: 'Australia\'s national science agency and one of the largest and most diverse research agencies in the world. The Multimedia division focused on creating educational content and documentaries to make science accessible to the public.',
      description: [
        'Built Flash-based science and math learning modules for primary and secondary students',
        'Assisted in CSIRO video documentary productions as a cameraman'
      ]
    },
    {
      company: 'Adacel Technologies',
      position: 'Lead Web & Multimedia Developer',
      period: '1999–2004',
      location: 'Melbourne, Australia',
      companyDescription: 'A global technology company specializing in air traffic management, simulation, and training solutions. Known for developing advanced software systems for aviation and defense industries.',
      description: [
        'Built national training systems during ANZ\'s upgrade from DOS to Windows 2000',
        'Worked alongside software dev teams to create learning support tools for 20,000+ staff'
      ]
    },
    {
      company: 'Access Net Australia',
      position: 'Systems Developer / ISP Admin',
      period: '1998–1999',
      location: 'Melbourne, Australia',
      companyDescription: 'An early internet service provider and web development company in Australia, focusing on providing internet access and web solutions for businesses during the early days of commercial internet.',
      description: [
        'Managed early Mac-based web servers, Unix servers, and Lasso scripting',
        'ISP server administration and maintenance'
      ]
    }
  ];

  skills: Skill[] = [
    {
      category: 'Web & Application Development',
      items: [
        'Languages/Frameworks: Angular (10y), HTML/JS/CSS/SASS/PUG (15y), React, Python/Pydantic, Node.js, PHP (Laravel, Lumen), Three.js',
        'eLearning: (15y) Storyline, Lectora, Moodle, SCORM/xAPI, LMS setup/debugging',
        'Cloud/Servers: AWS, Google Cloud, Azure, Linux (CentOS), VPS management (40+ accounts), NAS, BackBlaze B2, Cloudflare R2',
        'Mobile: Cordova (iOS/Android apps), Titanium, PhoneGap (old tech)',
        'AI Development: LLM integration, RAG implementations, AI workflow automation, Stable Diffusion/ControlNet, Whisper voice processing, custom AI model training and deployment',
        'Design Platforms: Figma, Webflow',
        'AI coding assists: VS-Code, Cursor, Github Copilot'
      ]
    },
    {
      category: 'Videography & Media',
      items: [
        'Corporate and Training Video Production: 200+ assets (8y)',
        '360 Photography',
        'Production: audio wired/wireless setups, lighting setups & modifiers, grip, green screen studio production, directing, camera operation, script supervision.',
        'Pre-Production: Storyboarding, script reviews, shotlisting, scheduling',
        'Editing: Davinci Resolve, Adobe Premiere Pro, After Effects, Photoshop, Audition etc. Handover, rough assemblies or full editing, local and cloud backups.',
        'Logistics: Travel ready (local or interstate) with full production kit; White Card certified (construction/industrial)',
        "AI Generation: ComfyUI, Stable Diffusion, Runway, Kling, HeyGen (aiming for commerical avatar generation)",
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'AI Courseware Generator',
      description: 'Developing an AI-powered system for Coles that automatically generates interactive training modules in the Adapt Framework. The system processes existing eLearning content or AI-generated storyboards through a sophisticated pipeline: initially using LLMs to parse and generate intermediate data files, followed by an extensive storyboard-to-courseware processor. Features include review capabilities, block and text editing, image upload functionality, and comprehensive user and process/build queue management. The final output can be previewed within the tool or exported to the Adapt Authoring tool for further refinement.',
      period: '2024-present',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI/LLM' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-brain', name: 'Machine Learning' },
        { icon: 'fas fa-graduation-cap', name: 'eLearning' }
      ]
    },
    {
      title: 'Coles Training Series',
      description: 'Long-term collaboration (2019-2024) producing comprehensive training content including: 360° store walkthroughs for new store layouts and safety procedures, green screen training modules for customer service and compliance, VR training experiences for warehouse operations, and complex scene alignment for procedural training. Projects involved extensive pre-production planning, multi-camera setups, and post-production workflows to ensure consistent quality across all deliverables.',
      period: '2019–2024',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-cube', name: '3D/VR' },
        { icon: 'fas fa-camera', name: '360° Video' }
      ]
    },
    {
      title: 'Suncorp Insurance Training Series',
      description: 'Comprehensive training and management video series (2020-2023) including: insurance fraud training with professional actors in staged scenarios, management communication videos, and 360° virtual tours of offices. Projects spanned multiple locations across Victoria, New South Wales, and Queensland, involving complex logistics, multi-camera setups, and professional actors. Content included both procedural training and executive communications, with a focus on maintaining consistent quality across all deliverables.',
      period: '2020-2023',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-theater-masks', name: 'Acting' },
        { icon: 'fas fa-map-marker-alt', name: 'Location' },
        { icon: 'fas fa-camera', name: '360° Video' }
      ]
    },
    {
      title: 'ACU Melbourne 360 Tour',
      description: 'Combined on-location presenter video and 360 footage to create an immersive virtual tour of the ACU Melbourne campus. The project integrated high-quality video production with interactive 360° photography to provide an engaging experience for prospective students.',
      period: '2020',
      technologies: [
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-map-marked-alt', name: 'Virtual Tour' }
      ]
    },
    {
      title: 'Lesson Planner',
      description: 'A comprehensive web-based lesson planning tool that helps teachers create, organize, and share lesson plans. Features include curriculum mapping, resource management, and collaborative planning capabilities via an interactive calendar. A PHP/Laravel backend with an Angular frontend and a modified Wordpress marketplace. Project was about two months from beta testing when the project was cancelled due to a company merger.',
      period: '2022-2024',
      technologies: [
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-database', name: 'Database' },
        { icon: 'fas fa-users', name: 'Collaboration' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
      ]
    },
    {
      title: 'Department of Education Inclusion',
      description: 'Comprehensive video series (2021-2022) covering multiple educational initiatives: 50+ videos on inclusive classroom practices, teaching strategies, and professional development. Project included 140+ interviews with teachers, principals, staff, and students across 20 schools, plus additional content on innovative teaching methodologies and professional development programs. The project spanned three months of shooting and six months of editing, resulting in a rich library of educational resources.',
      period: '2021-2022',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-microphone', name: 'Interviews' },
        { icon: 'fas fa-film', name: 'Documentary' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
      ]
    },
    {
      title: '360 Virtual Tours',
      description: 'Photographer and developer of a custom built 360 panoramic onboarding solution for Coles, NAB, Suncorp, ACU, Monash and Dept of Health.',
      period: '2020-2023',
      technologies: [
        { icon: 'fas fa-camera', name: '360° Photography' },
        { icon: 'fas fa-code', name: 'Web Development' }
      ]
    },
    {
      title: 'Respect Now Always',
      description: 'iOS, Android & Web application for Monash University and Western Sydney University. Built so it could be rebranded to other universities to promote a safe campus.',
      period: '2022',
      technologies: [
        { icon: 'fab fa-apple', name: 'iOS' },
        { icon: 'fab fa-android', name: 'Android' },
        { icon: 'fas fa-mobile-alt', name: 'Mobile' }
      ]
    },
    {
      title: 'Copyright Query',
      description: 'Single page AngularJS app to support teachers in assessing what media they could safely use in their work. The tool was hosted internally and contained a self-contained data set they could query. The data set could also be edited online to make updates easy.',
      period: '2021',
      technologies: [
        { icon: 'fab fa-angular', name: 'AngularJS' },
        { icon: 'fas fa-database', name: 'Data Management' }
      ]
    },
    {
      title: 'Suncorp Career Compass',
      description: 'Web based tool (Flash) to compare the skills of various job roles using interactive charts and data. Staff would compare their current role to a future role and the app would compile a catalogue of training assets required to pursue the role.',
      period: '2014',
      technologies: [
        { icon: 'fas fa-chart-line', name: 'Charts' },
        { icon: 'fas fa-code', name: 'Web App' },
        { icon: 'fas fa-users', name: 'HR' }
      ]
    },
    {
      title: 'Dr. MCQ',
      description: 'Native iOS and Android app for training medical registrars to sit their exam. Only reached prototype stage.',
      period: '2012',
      technologies: [
        { icon: 'fas fa-mobile-alt', name: 'Mobile' },
        { icon: 'fas fa-graduation-cap', name: 'eLearning' },
        { icon: 'fas fa-award', name: 'Award Winner' }
      ]
    },
    {
      title: 'Budda Jitcha & You Can Work',
      description: 'Flash based e-learning each consisting of over 40 hours of 3D avatars, video and puzzles.',
      period: '2011',
      technologies: [
        { icon: 'fas fa-gamepad', name: 'Games' },
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-user-circle', name: 'Avatars' }
      ]
    }
  ];

  rndProjects: Project[] = [
    {
      title: 'Personal Finance & Accounting System',
      description: 'A comprehensive personal and business finance system built to test AI coding capabilities. Features include: GST/PAYG monthly tracking, EOFY tax estimates, invoice generation, recurring budget management, live bank feed integration, financial analytics, and interactive charts. Built with Python and Django, with plans to integrate AI-driven financial analysis and automated email notifications for business and family financial tracking.',
      period: '2024-present',
      technologies: [
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-database', name: 'Django' },
        { icon: 'fas fa-chart-line', name: 'Analytics' },
        { icon: 'fas fa-robot', name: 'AI Integration' }
      ]
    },
    {
      title: 'AI Development Playground',
      description: 'A focused environment for experimenting with and staying current on LLM technologies. Includes private hosting and API integration of various LLM models, RAG implementations for secure data handling, agentic workflows, and custom model fine-tuning. Regularly testing and implementing new AI capabilities as they emerge, with a particular focus on practical business applications and workflow automation.',
      period: '2023-present',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI/LLM' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-image', name: 'AI Art' },
        { icon: 'fas fa-microphone', name: 'Voice AI' }
      ]
    },
    
    {
      title: 'AI Voice Assistant',
      description: 'Before it really became mainstream, I was testing a Whisper based → ChatGPT → AI Voice (like a cheap version of the Star Trek computer)',
      period: '2023',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI' },
        { icon: 'fas fa-microphone', name: 'Voice' }
      ]
    },
    {
      title: 'AI image Workflows',
      description: 'On going experiments with ComfyUI, Stable Diffusion and the big video generation platforms. Mainly focused on finding commerical workflows using ControlNet and other techniques to match client brand briefs and post editing. Almost there!',
      period: '2023-present',
      technologies: [
        { icon: 'fas fa-image', name: 'AI Art' },
        { icon: 'fas fa-paint-brush', name: 'Design' }
      ]
    },
    {
      title: '360 Environment Overlays',
      description: "After the success of the 360 tours we wanted to do more. As an ongoing project to enhance the platform with transparent video and 3D overlays inside browser-based 360 environments.  This project would lean on three.js. Work on this stopped nearly three years ago, but with the new AI agents I'm interested to see when we can start work on V2.",
      period: '2022',
      technologies: [
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-video', name: '360° Video' }
      ]
    }
  ];

  otherWebProjects: OtherProject[] = [
    {
      title: 'St John Ambulance Compliance (Flash)',
      period: '2012'
    },
    {
      title: 'BankWest Training',
      period: '2011'
    },
    {
      title: 'CGU Insurance Training',
      period: '2010'
    },
    {
      title: 'JobFind eLearning (Flash)',
      description: 'Custom e-learning for JobFind, a job search website incorporating 3D avatars and video nd 40+ hours of training.',
      period: '2009'
    },
    {
      title: 'Various e-learning projects',
      description: 'Custom e-learning for various clients including BankWest, BHP, Target, CGU Insurance, Dept of Education, Aust MultiCultural Assoc, Suncorp, Nissan,.',
      period: '2008-2016'
    }
  ];

  awards: string[] = [
    'Australian Good Design Selection',
    'LearnX 2023 Winner – Best eLearning Design',
    'AITD Excellence Finalist 2023 – Best Learning Technology',
    'eLearning Excellence Awards (2009, 2011 Finalist, 2012 Winner)',
    'Good Design Award 2014 – Suncorp Career Compass',
    'eLearning Premiership Award 2012 – Dr. MCQ',
    'Life Long Learning Award 2011 – Budda Jitcha & You Can Work'
  ];

  endorsement = {
    text: '"Ashley has become an invaluable technical advisor, providing guidance and expertise in emerging technologies. His extensive experience in web, eLearning, video, and creative technology, combined with his enthusiasm, has added significant value and innovation to our offerings."',
    author: 'Rodney Beach',
    position: 'Group Managing Director, Liberate Learning',
    email: 'rodney@liberatelearning.com.au'
  };

  contact = {
    phone: '0412 884 283',
    email: 'ash@framedvideo.com',
    location: 'Melbourne, Australia',
    linkedin: 'https://www.linkedin.com/in/ashley-norriss-2033621b/',
    portfolio: 'https://framedvideo.com/portfolio',
    portfolioCredentials: {
      user: 'guest',
      pass: 'framed101'
    }
  };

  aboutMe = {
    summary: `Self-taught web developer and videographer with 20+ years of experience creating high-quality digital solutions. Proven track record of building successful businesses and delivering complex projects both independently and in team environments.`,
    strengths: [
      'Completely self-taught in web development, videography, and emerging technologies',
      'Successfully built and operated a busy videography business (200+ corporate videos)',
      'Expertise in both solo/remote work and team collaboration environments',
      'Strong problem-solving and technical troubleshooting abilities',
      'Excellent communication and client relationship management'
    ],
    workStyle: [
      'Highly adaptable - equally effective working independently or in teams',
      'Self-motivated with proven ability to manage complex projects solo',
      'Strong attention to detail and quality assurance',
      'Proactive in identifying and implementing improvements',
      'Experienced in both remote and on-site project delivery'
    ],
    keyAchievements: [
      'Built successful videography business producing 200+ corporate training videos',
      '2023 LearnX Winner – Best eLearning Design',
      '2023 AITD Finalist – Best Learning Technology',
      'eLearning Excellence Award Winner 2009 & 2012',
      'Developed award-winning 360 training environments',
      'Successfully managed multiple concurrent projects as a solo operator'
    ],
    personalBackground: {
      story: `Born and raised in Melbourne, I've always had a passion for technology and creativity. My journey in web development began in the late 90s when I taught myself HTML and JavaScript to build my first websites. This self-taught approach has been a cornerstone of my career, allowing me to adapt and grow with the ever-evolving tech landscape.`,
      family: `I'm a proud parent of two children who have grown up watching me build and grow my business. My family has been a constant source of support and inspiration throughout my career journey.`,
      interests: [
        'Exploring emerging technologies and their practical applications',
        'Mentoring young developers and sharing knowledge',
        'Outdoor photography and nature exploration',
        'Family time and creating lasting memories'
      ]
    },
    careerObjectives: `Seeking opportunities to leverage my extensive self-taught expertise in web development and videography to create innovative, high-quality digital solutions. Passionate about staying at the forefront of technology and delivering exceptional results for clients and organizations.`
  };

  constructor() { }

  ngOnInit(): void {
  }
} 