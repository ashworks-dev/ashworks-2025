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
  summary = `Senior web/application developer (20+ years) and videographer (8+ years) with a proven track record of delivering high-impact corporate training, educational, and promotional content. Combines deep technical expertise with business acumen to create practical, scalable solutions. Passionate about emerging technologies while maintaining a pragmatic approach to implementation. From Flash to Angular, digital tape to virtual tours, AWS to AI models - consistently delivers innovative solutions that balance technical excellence with business requirements. Seeking contract opportunities to leverage extensive experience in web development and videography for forward-thinking organizations.`;

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
        { icon: 'fas fa-brain', name: 'Model Training' }
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
      description: 'Transparent video and 3D overlays inside browser-based 360 environments. After the success of the Coles and Suncorp 360 tours, I was aiming at the next level of interactivity in 360 environments including 3D models and aloha based video.',
      period: '2022',
      technologies: [
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-video', name: '360° Video' }
      ]
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
    email: 'ash@ashworks.com.au',
    location: 'Melbourne, Australia',
    linkedin: 'https://www.linkedin.com/in/ashley-norriss-2033621b/',
    portfolio: 'https://framedvideo.com/portfolio',
    portfolioCredentials: {
      user: 'guest',
      pass: 'framed101'
    }
  };

  aboutMe = {
    summary: `Senior technology professional with 20+ years of hands-on experience in web development and digital media production. Combines technical expertise with business acumen to deliver practical, scalable solutions. Proven track record of successfully managing complex projects and building sustainable business operations.`,
    strengths: [
      'Extensive hands-on experience in emerging technologies while maintaining focus on practical business applications',
      'Proven ability to balance innovation with real-world constraints and business requirements',
      'Strong track record of delivering complex projects on time and within budget',
      'Extensive experience in cross-functional communication, effectively collaborating with graphic designers, developers, instructional designers, management, and external stakeholders',
      'Ability to translate complex technical concepts into clear, accessible language for diverse audiences'
    ],
    workStyle: [
      'Hands-on approach to problem-solving and implementation',
      'Strong focus on delivering measurable business value',
      'Proven ability to work effectively in both remote and on-site environments',
      'Experienced in managing complex projects with multiple stakeholders',
      'Balances technical innovation with practical business considerations'
    ],
    keyAchievements: [
      'Independently invested in and operated a successful video production service, delivering 200+ corporate training videos for major Australian organizations',
      'Projects have received numerous industry awards and recognition for innovation and quality, often as the sole developer.',
      'Evolved into a trusted technology consultant as the industry shifted towards emerging technologies, primarily through self-directed learning and implementation',
      'Became the preferred developer or videographer for several major Australian corporations and their projects',
      'Developed award-winning 360 training environments for major corporations through solo development and production',
      'Maintained successful business operations (for my primary client) while independently delivering complex technical projects'
    ],
    personalBackground: {
      story: `With over two decades in the technology industry, I've maintained a hands-on approach to development while building a deep understanding of business requirements and constraints. My journey began in the late 90s, and I've consistently adapted to technological changes while focusing on delivering practical, business-focused solutions. After years of desk-based development work, I recognized the value of direct client interaction and expanded into video production, allowing me to combine technical expertise with face-to-face client engagement. The growing demand for high-quality video content in the corporate training and educational sectors provided the perfect opportunity to leverage my technical background while meeting market needs.`,
      family: `Based in Melbourne, I've built a successful career while maintaining a strong work-life balance. My family has been a constant source of support throughout my professional journey. The flexibility of remote work has allowed me to be more present for my family, attending important events and providing support while maintaining professional commitments.`
    },
    careerObjectives: `Seeking longer-term projects with creative businesses where I can deeply engage with innovative concepts, or short-term development work to assist with general technical needs. While video production remains a separate service offering, I'm particularly interested in opportunities that combine both technical development and video production capabilities. Thriving in hands-on technical roles where I can experiment and innovate, bringing a 'mad scientist' approach to solving complex problems. Comfortable collaborating with specialized teams, able to understand and discuss technical concepts across different domains while focusing on my core expertise. Focused on delivering innovative, practical solutions that balance technical excellence with business requirements. Preference for remote work arrangements that allow for flexible engagement while maintaining high-quality delivery.`
  };

  constructor() { }

  ngOnInit(): void {
  }
}