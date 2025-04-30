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
  subcategories: {
    name: string;
    items: string[];
  }[];
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
      category: 'Development',
      subcategories: [
        {
          name: 'Languages',
          items: ['TypeScript/JavaScript (20y)', 'Python (3y)', 'PHP (2y)', 'HTML/CSS/SASS (25y)']
        },
        {
          name: 'Frameworks',
          items: ['Angular (10y)', 'React', 'Node.js', 'Laravel/Lumen', 'Three.js']
        },
        {
          name: 'Cloud/DevOps',
          items: ['AWS', 'Google Cloud', 'Azure', 'Linux', 'VPS management']
        },
        {
          name: 'Mobile',
          items: ['Cordova (iOS/Android)', 'React Native']
        },
        {
          name: 'AI/ML',
          items: ['LLM integration', 'RAG implementations', 'Stable Diffusion', 'Custom model training']
        }
      ]
    },
    {
      category: 'eLearning & Media',
      subcategories: [
        {
          name: 'eLearning Platforms',
          items: ['Adapt Framework', 'Storyline', 'Lectora', 'Moodle', 'SCORM/xAPI', 'Custom built solutions']
        },
        {
          name: 'Video Production',
          items: ['200+ corporate/training videos', '360° photography','Concepting', 'Script reviews/breakdowns', 'Shotlists', 'Scheduling/Call Sheets']
        },
        {
          name: 'Onsite / Studio',
          items: ['Professional cinema camera operator (SONY)', 'S-Log or quick delivery formats', 'Audio: wired/wireless setup', 'Lighting setups', 'Green screen workflow', 'DOP/Directing', 'Script supervision','Multiple camera setups']
        },
        {
          name: 'Post-Production',
          items: ['Davinci Resolve (8y)', 'Premiere Pro (15y)', 'After Effects']
        },
        {
          name: 'AI Media',
          items: ['ComfyUI', 'Stable Diffusion', 'Runway', 'HeyGen', 'Suno']
        }
      ]
    },
    {
      category: 'Tools & Design',
      subcategories: [
        {
          name: 'Design',
          items: ['Figma', 'Webflow', 'Adobe Creative Suite (15y)', 'Canva', 'Affinity Designer', 'Affinity Photo', 'Blender']
        },
        {
          name: 'Development',
          items: ['VS Code', 'Cursor', 'WebStorm','PyCharm','PHPStorm']
        },
        {
          name: 'AI Coding',
          items: ['GitHub Copilot', 'Cursor', 'Roo', 'Continue']
        },
        {
          name: 'Project Management / Comms',
          items: ['ClickUp', 'Trello', 'Asana', 'Avaza', 'Slack']
        },
        {
          name: 'Version Control',
          items: ['Git', 'GitHub', 'Bitbucket']
        }
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'National Australia Bank (NAB)',
      description: 'Long-term collaboration (2018-2023) delivering both video production and custom web development solutions. Video production focused on customer relations content, including: professional actor-based scenarios, initiative launches, and a comprehensive 360° virtual tour of NAB\'s new Sydney offices. Web development focused on creating custom applications integrated with NAB\'s SharePoint environment, including: interactive training portals, compliance tracking systems, and team collaboration tools. Projects required strict security compliance, complex SharePoint integration, and adherence to NAB\'s design and development standards.',
      period: '2018-2023',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-theater-masks', name: 'Acting' },
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-share-alt', name: 'SharePoint' }
      ]
    },
    {
      title: 'Powercor Safety Training Series',
      description: 'Comprehensive safety training video series (2021-2023) for Powercor, Australia\'s largest electricity distribution company. Produced 50+ safety training videos covering critical topics including: high-voltage safety procedures, emergency response protocols, and field operation guidelines. Projects involved complex technical scenarios, safety demonstrations, and on-location filming at various power stations and field sites. Content included both procedural training and safety awareness videos, with a focus on maintaining strict safety standards while delivering engaging training content.',
      period: '2021-2023',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-hard-hat', name: 'Safety Training' },
        { icon: 'fas fa-bolt', name: 'Technical' },
        { icon: 'fas fa-camera', name: 'On-location' }
      ]
    },
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
      description: 'Created an immersive virtual tour showcasing both the ACU Melbourne campus and key tourist locations throughout Melbourne CBD, designed to attract international students during COVID-19 travel restrictions. The project combined on-location presenter video with 360° photography, shot during challenging pandemic conditions. The tour highlighted campus facilities, student life, and Melbourne\'s vibrant city culture, providing prospective international students with a comprehensive virtual experience of both university life and the surrounding city. The project played a crucial role in student recruitment during a period when physical campus visits were impossible.',
      period: '2020',
      technologies: [
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-map-marked-alt', name: 'Virtual Tour' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
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
      title: 'Interactive 360 Platform',
      description: 'Developed a custom Angular and Three.js-based 360° panoramic platform that served as the foundation for multiple client projects including Coles, NAB, Suncorp, ACU, Monash and Dept of Health. The framework featured interactive hotspots, custom navigation, and seamless integration with client branding. Future development plans include integration of 3D models and alpha-channel video for embedded presenters, enhancing the immersive experience. The platform demonstrated the ability to scale across different industries while maintaining consistent quality and user experience.',
      period: '2020-2023',
      technologies: [
        { icon: 'fas fa-camera', name: '360° Photography' },
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-cube', name: 'Three.js' },
        { icon: 'fas fa-code', name: 'Web Development' }
      ]
    },
    {
      title: 'Respect Now Always',
      description: 'Developed a web-based application for Monash University and Western Sydney University to promote campus safety, wrapped in iOS and Android native containers. The project gained significant media attention and was promoted across various news outlets. The application featured interactive safety resources, emergency contact information, and reporting tools. Built with a responsive web application core, then packaged for mobile platforms to ensure consistent functionality across all devices while maintaining native app store presence.',
      period: '2022',
      technologies: [
        { icon: 'fab fa-apple', name: 'iOS' },
        { icon: 'fab fa-android', name: 'Android' },
        { icon: 'fas fa-mobile-alt', name: 'Mobile' },
        { icon: 'fas fa-newspaper', name: 'Media Coverage' }
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
      description: 'Developed a sophisticated web-based career development tool (Flash) that processed extensive data entirely in the browser: nearly 500 job roles and 800 training resources stored in a flat database file. The application featured interactive charts and data visualization to help staff compare their current role with potential future roles. All data processing, filtering, and visualization was handled client-side with no backend requirements, demonstrating efficient browser-based data management. The tool automatically compiled personalized training catalogs based on role comparisons, helping employees plan their career progression.',
      period: '2014',
      technologies: [
        { icon: 'fas fa-chart-line', name: 'Charts' },
        { icon: 'fas fa-database', name: 'Client-side DB' },
        { icon: 'fas fa-code', name: 'Web App' },
        { icon: 'fas fa-users', name: 'HR' }
      ]
    },
    {
      title: 'AMF Cyberparent',
      description: 'Developed a comprehensive anti-bullying platform for the Australian Multicultural Foundation, consisting of 15 iOS and Android mobile applications in multiple languages, each with supporting web versions. The project involved converting a web-based application into native mobile platforms, requiring careful management of multiple app store submissions and updates. Handled complex logistics of publishing and maintaining applications across different languages and platforms, ensuring consistent user experience and content delivery. The platform provided resources and tools to help parents and educators address online bullying in culturally sensitive ways.',
      period: '2016',
      technologies: [
        { icon: 'fab fa-apple', name: 'iOS' },
        { icon: 'fab fa-android', name: 'Android' },
        { icon: 'fas fa-globe', name: 'Multilingual' },
        { icon: 'fas fa-mobile-alt', name: 'Mobile' }
      ]
    },
    {
      title: 'Budda Jitcha & You Can Work',
      description: 'Developed two comprehensive Flash-based e-learning courses, each containing over 40 hours of interactive content. Featured custom-built 3D avatars, professional voice acting, and interactive puzzles. The courses were designed to teach Indigenous Australians about workplace safety and employment opportunities, combining cultural sensitivity with engaging learning experiences. Included branching scenarios, interactive assessments, and progress tracking. The project won the Life Long Learning Award in 2011 for its innovative approach to Indigenous education.',
      period: '2011',
      technologies: [
        { icon: 'fas fa-gamepad', name: 'Games' },
        { icon: 'fas fa-cube', name: '3D' },
        { icon: 'fas fa-user-circle', name: 'Avatars' },
        { icon: 'fas fa-graduation-cap', name: 'eLearning' }
      ]
    },
    {
      title: 'Department of Health',
      description: 'Comprehensive food safety and health education project (2020-2023) delivering multiple content types: food safety training videos, interactive 360° virtual tours of commercial kitchens using a custom-built platform, and a two-part documentary series following environmental health officers in the field. During COVID-19, produced rapid-response hand hygiene training videos. The project combined technical video production with interactive web development, creating an engaging learning experience for food safety professionals and the public.',
      period: '2020-2023',
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fas fa-utensils', name: 'Food Safety' },
        { icon: 'fas fa-code', name: 'Web Platform' },
        { icon: 'fas fa-film', name: 'Documentary' }
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

  endorsements = [
    {
      text: '"Ashley has become an invaluable developer and technical advisor, providing hands-on expertise and guidance in emerging technologies. His extensive experience in web, eLearning, video, and creative technology, combined with his enthusiasm, has added significant value and innovation to our offerings. His work has been recognized with multiple industry awards, including LearnX and AITD Excellence awards, reflecting the high quality and innovation of his contributions."',
      author: 'Rodney Beach',
      position: 'Group Managing Director, Liberate Learning',
      email: 'rodney@liberatelearning.com.au',
      phone: '0413 082 712'
    },
    {
      text: '"Ashley has been a key partner in our digital learning initiatives, consistently delivering high-quality projects across our organization. Through his work with Liberate Learning, he has produced numerous video projects across multiple states in Australia, from interactive eLearning modules to immersive 360° training environments. His recent work in AI-driven learning solutions, particularly his development of an AI-powered system for automated courseware generation in the Adapt Framework, has brought innovative approaches to our training programs. His ability to manage complex logistics while maintaining consistent quality, combined with his forward-thinking approach to emerging technologies, has made him an invaluable resource for our learning and development needs."',
      author: 'Siva Kulasingam',
      position: 'Digital Learning Manager | Culture & Capability, People & Culture | Coles Supermarkets',
      email: 'Sivayogan.Kulasingam@coles.com.au'
    }
  ];

  contact = {
    phone: '0412 884 283',
    email: 'ash@ashworks.com.au',
    location: 'Melbourne, Australia',
    linkedin: 'https://www.linkedin.com/in/ashley-norriss-2033621b/',
    portfolio: 'https://framedvideo.com',
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