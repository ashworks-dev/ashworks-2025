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
  summary = `Experienced web developer (20+ years) and videographer (8+ years) with a passion for creating high-quality corporate training, educational, and promotional content. Self-taught, adaptable, and obsessed with emerging tech — from Flash to Angular, from DSLR video to VR tours, from AWS hosting to training AI models privately.`;

  experiences: Experience[] = [
    {
      company: 'Self-Employed',
      position: 'Freelance Web Developer / Videographer',
      period: '2014–Present',
      location: 'Melbourne, Australia',
      description: [
        'Produced 200+ short-form corporate/training videos across Australia',
        'Built and deployed Angular web apps, portals, 360 tours, mobile apps',
        'Developed internal business tools for lesson planning, chatbots, R&D prototypes',
        'R&D projects: custom LLM training, volumetric 3D video rendering, Whisper voice-to-GPT'
      ]
    },
    {
      company: 'Liberate Learning',
      position: 'Web Applications Developer / Videographer',
      period: '2014–Present',
      location: 'Remote Contractor',
      companyDescription: 'A leading Australian eLearning company specializing in custom learning solutions, corporate training, and educational technology. Known for innovative approaches to digital learning and award-winning courseware.',
      description: [
        'Created custom web tools, portals, video modules for major Australian universities, banks, and gov departments',
        'Led multi-year Angular / Laravel / Lumen projects',
        'Developed award-winning 360 training environments and video-first learning modules',
        'Embedded R&D for emerging tech: VR, AI chatbots, cloud infrastructure'
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
        'Languages/Frameworks: Angular, HTML/JS/CSS, React, Python, Node.js, PHP (Laravel, Lumen)',
        'eLearning: Storyline, Lectora, Moodle, SCORM/xAPI, LMS setup/debugging',
        'Cloud/Servers: AWS, Google Cloud, Azure, Linux (CentOS), VPS management (40+ accounts)',
        'Mobile: Cordova (iOS/Android apps), Titanium, PhoneGap',
        'Web R&D: Three.js, OpenCL experiments, Google Sheets-driven courseware',
        'AI R&D: Stable Diffusion, Whisper, LLM hosting, Chatbot building'
      ]
    },
    {
      category: 'Videography & Media',
      items: [
        'Corporate and Training Video Production: 200+ assets',
        '360 Photography & Video',
        'Editing: Davinci Resolve, Adobe Premiere Pro, After Effects',
        'Green Screen Production, Motion Design, 3D Overlay in 360',
        'Travel ready with full kit; White Card certified (construction/industrial)'
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'AI Courseware Generator',
      description: 'Developing an AI-powered system for Coles that automatically generates interactive training modules from existing documentation and video content. Uses LLMs to create engaging learning experiences with minimal human intervention.',
      period: '2024',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI/LLM' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-brain', name: 'Machine Learning' },
        { icon: 'fas fa-graduation-cap', name: 'eLearning' }
      ]
    },
    {
      title: 'Department of Education Inclusion',
      description: '50 videos shot at 20 schools, 140 interviews of teachers, principals, staff and students. Used to assist teachers and staff in creating inclusive classrooms for students with a variety of disabilities. Project spanned three months shooting and six months of editing.',
      period: '2021',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-microphone', name: 'Interviews' },
        { icon: 'fas fa-film', name: 'Documentary' }
      ]
    },
    {
      title: 'Suncorp Insurance Fraud Training',
      description: 'Training aimed at educating home and motor insurance assessors in what to look for when conducting an assessment. Interviews, presenters (actors), staged scenes, shot in homes & motor warehouses.',
      period: '2020',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-theater-masks', name: 'Acting' },
        { icon: 'fas fa-map-marker-alt', name: 'Location' }
      ]
    },
    {
      title: '360 Virtual Tours',
      description: 'Photographer and developer of a custom built 360 panoramic onboarding solution for Coles and Suncorp.',
      period: '2020',
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
      description: 'Web based tool to compare the skills of various job roles using interactive charts and data. Staff would compare their current role to a future role and the app would compile a catalogue of training assets required to pursue the role.',
      period: '2014',
      technologies: [
        { icon: 'fas fa-chart-line', name: 'Charts' },
        { icon: 'fas fa-code', name: 'Web App' },
        { icon: 'fas fa-users', name: 'HR' }
      ]
    },
    {
      title: 'Dr. MCQ',
      description: 'Native iOS and Android app for training medical registrars to sit their exam.',
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
      title: 'Private LLM Training',
      description: 'Privately trained LLMs for secure document Q&A (Python)',
      period: '2024',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI/LLM' },
        { icon: 'fab fa-python', name: 'Python' }
      ]
    },
    {
      title: 'Volumetric 3D Video',
      description: 'Volumetric 3D scanned video rendering in browsers',
      period: '2023',
      technologies: [
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-video', name: 'Video' }
      ]
    },
    {
      title: 'AI Voice Assistant',
      description: 'Whisper → ChatGPT → AI Voice (like a cheap version of the Star Trek computer)',
      period: '2023',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI' },
        { icon: 'fas fa-microphone', name: 'Voice' }
      ]
    },
    {
      title: 'Stable Diffusion Workflows',
      description: 'Stable Diffusion/ControlNet workflows to match strict brand briefs',
      period: '2023',
      technologies: [
        { icon: 'fas fa-image', name: 'AI Art' },
        { icon: 'fas fa-paint-brush', name: 'Design' }
      ]
    },
    {
      title: '360 Environment Overlays',
      description: 'Transparent video and 3D overlays inside browser-based 360 environments',
      period: '2022',
      technologies: [
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-video', name: '360° Video' }
      ]
    }
  ];

  otherWebProjects: OtherProject[] = [
    {
      title: 'Custom CMS Backend (Python/Django)',
      period: '2013',
      description: 'Custom CMS backend web application with AWS cloud storage for mobile content authoring and publishing. Integrated AWS video transcoding for mobile delivery.'
    },
    {
      title: 'St John Ambulance Compliance',
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
      title: 'JobFind eLearning',
      period: '2009'
    },
    {
      title: 'Target Staff Training',
      period: '2008'
    }
  ];

  videography = {
    summary: '8 years of professional videography with 200+ video assets for training and corporate use. Trusted by brands like Coles, ACU, NAB, Dept of Education, and Powercor. Experience includes promotional DVDs for thoroughbred racehorse trainers in Victoria.',
    skills: [
      'Shoot planning, script breakdowns, call sheets',
      'Directing, camera operation, lighting, audio',
      'Green screen, 360 photography, b-roll, drone work',
      'Post-production using Davinci Resolve, Adobe Premiere, After Effects, Vegas, Encore',
      'Solo operator with full kit, available for interstate travel'
    ],
    clients: ['ACU', 'RMIT', 'Suncorp', 'NAB', 'CBA', 'IBAC', 'Slater & Gordon', 'Safe Recovery Aust', 'Westpac', 'Thoroughbred Racehorse Trainers'],
    projects: [
      {
        title: 'Coles Training',
        description: '360 walkthroughs, green screen, VR shoots, complex scene alignment.',
        period: '2019–2024',
        technologies: [
          { icon: 'fas fa-video', name: 'Video Production' },
          { icon: 'fas fa-cube', name: '3D/VR' },
          { icon: 'fas fa-camera', name: '360° Video' }
        ]
      },
      {
        title: 'Dept. of Ed. Inclusion',
        description: '50 videos, 140 interviews, 20 schools — 3-month shoot, 6-month edit.',
        period: '2021',
        technologies: [
          { icon: 'fas fa-video', name: 'Video Production' },
          { icon: 'fas fa-microphone', name: 'Interviews' },
          { icon: 'fas fa-film', name: 'Documentary' }
        ]
      },
      {
        title: 'Suncorp Insurance Fraud',
        description: 'Training videos with actors, location/staged scenes.',
        period: '2020',
        technologies: [
          { icon: 'fas fa-video', name: 'Video Production' },
          { icon: 'fas fa-theater-masks', name: 'Acting' },
          { icon: 'fas fa-map-marker-alt', name: 'Location' }
        ]
      },
      {
        title: 'ACU Melbourne 360 Tour',
        description: 'Combined on-location presenter video and 360 footage.',
        link: 'https://webapps.acu.edu.au/acu360/',
        period: '2020',
        technologies: [
          { icon: 'fas fa-camera', name: '360° Video' },
          { icon: 'fas fa-video', name: 'Video Production' },
          { icon: 'fas fa-map-marked-alt', name: 'Virtual Tour' }
        ]
      }
    ],
    otherProjects: [
      {
        title: 'NAB Branch Training Series',
        period: '2023',
        description: 'Series of 12 training videos for branch staff'
      },
      {
        title: 'Powercor Safety Procedures',
        period: '2022',
        description: 'Safety training videos for field staff'
      },
      {
        title: 'RMIT Student Services',
        period: '2021',
        description: 'Student orientation and support videos'
      },
      {
        title: 'Westpac Branch Training',
        period: '2020',
        description: 'Customer service training series'
      },
      {
        title: 'Slater & Gordon Legal Training',
        period: '2019',
        description: 'Legal compliance and procedure videos'
      },
      {
        title: 'Safe Recovery Australia',
        period: '2018',
        description: 'Recovery and support training series'
      },
      {
        title: 'Thoroughbred Racehorse Promotional DVDs',
        period: '2013',
        description: 'Promotional DVDs for thoroughbred racehorse trainers in Victoria'
      }
    ]
  };

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