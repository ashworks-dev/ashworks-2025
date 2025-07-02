import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  achievements?: string[];
  companyDescription?: string;
}

export interface Skill {
  category: string;
  subcategories: {
    name: string;
    items: {
      name: string;
      isPrimary?: boolean;
    }[];
  }[];
}

export interface Project {
  title: string;
  description: string;
  linkedinDescription?: string;  // Optional brief description for LinkedIn
  link?: string;
  videoOnly?: boolean;
  webDescription?: string;
  period: string;
  technologies: {
    icon: string;
    name: string;
  }[];
}

export interface Endorsement {
  text: string;
  author: string;
  position: string;
  email?: string;
  phone?: string;
}

export interface DetailedProject {
  type: string;
  project_name: string;
  year: number | string | null;
  description: string;
  posterImage?: string | null;
  media?: {
    type: string;
    url: string;
    title?: string;
    description?: string;
  }[];
}

export interface ClientProject {
  client: string;
  projects: DetailedProject[];
}

export interface AboutMe {
  summary: string;
  strengths: string[];
  workStyle: string[];
  keyAchievements: string[];
  personalBackground: {
    story: string;
    family: string;
  };
  careerObjectives: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  summary = `20+ years building web and eLearning applications, with expertise spanning front-end development, backend systems, and cloud infrastructure. Complemented by 8+ years of successful video production that has delivered 200+ corporate and training videos for major Australian organizations. Entirely self-taught, I've demonstrated a unique ability to master complex emerging technologies, from modern frameworks, passing trends, AI to advanced video production techniques. My journey from traditional web development to becoming a sought-after video producer showcases my adaptability and commitment to growth. I combine technical expertise with creative problem-solving to deliver innovative solutions that meet real business needs. My success in both technical development and video production reflects my ability to rapidly grasp and implement cutting-edge technologies while maintaining a practical, business-focused approach.`;
  
  webSummary = 'Experienced Senior Web Developer with over 20 years of expertise in modern web technologies, backend frameworks and platforms. Specialised in creating L&D solutions, websites, tools and applications using Angular, React, Node.js, cloud technologies, elearning authoring tools and more recently a revival in Python to jump onto the AI technology boom and now a heavy user of AI coding tools. Proven track record of delivering high-quality digital solutions for enterprise clients, with strong focus on performance optimization, accessibility, and emerging web technologies. With addtional skills in media asset production and professional corporate video production for seven years, where I blend my technical expertise with my passion for creative media I\'ve delivered engaging, high-quality web and video content for businesses and educational institutions.';
  
  videoSummary = "After decades of working with technology and building web applications, I pursued a passion of mine to enter into video production - self-funded and running the entire operation myself for my main employer. This has allowed them to offer professional video services to their clients and has been a solid partnership for nearly a decade. This transition has led to over 7 years of expertise in corporate video production, training content creation, and multimedia storytelling. Specialized in creating engaging, professional video content for businesses, educational institutions, and training programs. Proven track record of delivering high-quality video solutions that effectively communicate complex messages and drive engagement. My background in technology has given me a unique perspective on digital content delivery, allowing me to create videos that are not only visually compelling but also optimized for various platforms and audiences.";
  
  aiAdoption = `I've embraced AI as a natural evolution of my work, just as I've adapted to every technological advancement throughout my career. While I've successfully implemented AI solutions in commercial projects like Coles' courseware generation system, I maintain an exploratory approach to emerging AI technologies. Like many developers, I'm actively experimenting with AI tools in image, video, and audio generation, constantly adapting to new capabilities and limitations. I now code exclusively using AI coding tools. This includes using AI for code generation, content creation using the leading video gen platforms, while developing custom solutions for projects. My approach balances practical implementation with ongoing experimentation, recognizing that the AI landscape is rapidly evolving and requires continuous learning and adaptation.`;
  aiVideoSummary = `I've embraced AI as a natural evolution of my work, just as I've adapted to every technological advancement throughout my career. While I've successfully implemented AI solutions in commercial projects like Coles' courseware generation system, I maintain an exploratory approach to emerging AI technologies. Like many developers, I'm actively experimenting with AI tools in image, video, and audio generation, constantly adapting to new capabilities and limitations. I now code exclusively using AI coding tools. This includes using AI for code generation, content creation using the leading video gen platforms, while developing custom solutions for projects. My approach balances practical implementation with ongoing experimentation, recognizing that the AI landscape is rapidly evolving and requires continuous learning and adaptation.`;
  experiences: Experience[] = [
    {
      company: 'Liberate Learning',
      position: 'Video Producer & Web Developer (Remote Contractor)',
      period: '2013–Present',
      location: 'Melbourne, Australia',
      description: [
        'Personally invested in my own equipment and video production services to deliver 200+ corporate and training videos for major Australian organizations including Coles, NAB, Powercor, and Department of Health.',
        'Developed custom web sites, web portalsß, mobile applications and interactive tools and 360° virtual tours using Angular, Three.js, and modern web technologies along with hundreds of general elearning courses in Storyline, Lectora an other authoring tools over a decade.',
        'Specialized in safety training videos, customer service scenarios, and educational content with professional actors and complex technical scenarios.',
        'Created comprehensive video production workflows from pre-production planning through post-production delivery.',
        'Led a small team for a two year (part time) project to develop a PHP/Larvel/Angular Lesson Planner platform for teachers to create, organize, share and market their lesson plans. Incuded a lesson editor (with plans to integrate AI), calendar scheduling, resource management, and collaborative planning capabilities along with transaction management via Stripe. The project was cancelled due to a company merger.',
        'Protoyped an AI based storyboard to courseware generation system for Coles using LLMs and a custom pipeline, and later focused on the storyboard to Adapt courseware generator alone. Basically provide doummets, AI genreates a storyboard and then creates a fully working elearning course for reapid deployment. The AI aspect was moved up house to a larger team.',
        'AI R&D into complex image generation using AI (open source models, ComfyUI, APIs), including video generation and audio generation. Focus was on AI asset generation, mainly custom avatars in client based locations e.g. a supermarket, where composition of real world assets needed to be blended with AI assets for production pipelines for consistancy and non desctructive editing was key. Addtionally, an AI consultant for integrating AI into the businesses processes and workflows.',
      ],
      achievements: [
        'Planned, shot and edited over 200+ training, marketing and promotional videos for major Australian organizations',
        'Created interactive360° virtual tours for ACU, NAB, Suncorp and the  Dept of Health',
        'Developed an extensive Lesson Planner tool for teachers to create, organize, share and market their lesson plans',
        'Developed AI-powered courseware generation system for Coles training content, and later a storyboard to Adapt courseware generator',
              ],
      companyDescription: 'Leading eLearning company specializing in corporate training solutions, where I serve as a senior developer and technical advisor providing expertise in web development, video production, and emerging technologies.'
    },
    {
      company: 'Omni',
      position: 'Senior Web Developer',
      period: '2005–2013',
      location: 'Melbourne, Australia',
      companyDescription: 'A pioneering eLearning company that specialized in creating interactive learning solutions using Flash and 3D technologies. Known for developing innovative training tools and compliance courses for major Australian corporations.',
      description: [
        'Built hundreds of interactive Flash/HTML training sites',
        'Developed custom and reusable courseware frameworks in HTML/JS',
        'Created mobile apps for training medical registrars',
        'Managed small dev teams, offshored production, 3D avatar development',
        'Heavy focus on accessibility, LMS integration, cross-browser compliance'
      ]
    },
    {
      company: 'CSIRO Multimedia',
      position: 'Lead Multimedia Developer',
      companyDescription: 'Australia\'s national science agency and one of the largest and most diverse research agencies in the world. The Multimedia division focused on creating educational content and documentaries to make science accessible to the public.',
      period: '2000–2005',
      location: 'Melbourne, Australia',
      description: [
        'Built Flash-based science and math learning modules for primary and secondary students',
        'Assisted in CSIRO video documentary productions as a cameraman'
      ]
    },
    {
      company: 'Adacel',
      position: 'Web / eLearning Developer',
      companyDescription: 'A global technology company specializing in air traffic management, simulation, and training solutions. Known for developing advanced software systems for aviation and defense industries.',
      period: '1998–2000',
      location: 'Melbourne, Australia',
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

  projects: Project[] = [
    {
      title: 'Coles AI Courseware Generator',
      description: 'Developing an AI-powered system for Coles that automatically generates interactive training modules in the Adapt Framework. The system processes existing eLearning content or AI-generated storyboards through a sophisticated pipeline: initially using LLMs to parse and generate intermediate data files, followed by an extensive storyboard-to-courseware processor. Features include review capabilities, block and text editing, image upload functionality, and comprehensive user and process/build queue management. The final output can be previewed within the tool or exported to the Adapt Authoring tool for further refinement.',
      linkedinDescription: 'Developing an AI-powered system for automated courseware generation in the Adapt Framework, featuring LLM integration, review capabilities, and comprehensive build management. The system processes existing content through a sophisticated pipeline, generating interactive training modules with minimal manual intervention.',
      period: '2024-present',
      technologies: [
        { icon: 'fas fa-robot', name: 'AI/LLM' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-graduation-cap', name: 'eLearning' }
      ]
    },
    {
      title: 'Coles Training Series',
      description: 'Long-term collaboration (2019-2024) producing comprehensive training content including: 360° store walkthroughs for new store layouts and safety procedures, green screen training modules for customer service and compliance, VR training experiences for warehouse operations, and complex scene alignment for procedural training. Projects involved extensive pre-production planning, multi-camera setups, and post-production workflows to ensure consistent quality across all deliverables.',
      linkedinDescription: 'Long-term collaboration producing comprehensive training content including 360° store walkthroughs, green screen training modules, and VR training experiences for warehouse operations. Projects involved extensive pre-production planning and multi-camera setups to ensure consistent quality across all deliverables.',
      period: '2019–2025',
      videoOnly: true,
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-cube', name: '3D/VR' },
        { icon: 'fas fa-camera', name: '360° Video' }
      ]
    },
    {
      title: 'Lesson Planner',
      description: 'A comprehensive web-based lesson planning tool that helps teachers create, organize, and share lesson plans. Features include curriculum mapping, resource management, and collaborative planning capabilities via an interactive calendar. A PHP/Laravel backend with an Angular frontend and a modified Wordpress marketplace. Project was about two months from beta testing when the project was cancelled due to a company merger.',
      linkedinDescription: 'Developed a comprehensive web-based lesson planning tool with curriculum mapping, resource management, and collaborative planning capabilities. Built with a PHP/Laravel backend and Angular frontend, featuring an interactive calendar for team collaboration.',
      period: '2022-2024',
      technologies: [
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fab fa-php', name: 'PHP' },
        { icon: 'fab fa-laravel', name: 'Laravel' },
        { icon: 'fab fa-wordpress', name: 'WordPress' },
        { icon: 'fas fa-database', name: 'Database' },
        { icon: 'fas fa-users', name: 'Collaboration' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
      ]
    },
 
    {
      title: 'Australian Catholic University (ACU)',
      description: 'Comprehensive video production and virtual tour project for ACU, spanning multiple campuses and initiatives. Created immersive virtual tours showcasing campus facilities and key locations throughout Melbourne CBD, designed to attract international students during COVID-19 travel restrictions. Produced a series of promotional and training videos featuring student testimonials, campus life, and educational programs. The project combined on-location presenter video with 360° photography, shot during challenging pandemic conditions. The content highlighted campus facilities, student life, and Melbourne\'s vibrant city culture, providing prospective international students with a comprehensive virtual experience of both university life and the surrounding city.',
      webDescription: 'Comprehensive virtual tour project for ACU, spanning multiple campuses and initiatives. Based on the interactive 360 platform I developed, it delviered immersive virtual tours showcasing campus facilities and key tourist locations throughout Melbourne CBD, designed to attract international students during COVID-19 travel restrictions. The project combined on-location presenter video with 360° photography, shot during challenging pandemic conditions. The content highlighted campus facilities, student life, and Melbourne\'s vibrant city culture, providing prospective international students with a comprehensive virtual experience of both university life and the surrounding city.',
      linkedinDescription: 'Created immersive virtual tours and promotional videos for ACU, showcasing campus facilities and Melbourne CBD locations for international students during COVID-19. Combined on-location presenter video with 360° photography to provide a comprehensive virtual experience of university life.',
      period: '2020-2024',
      technologies: [
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-map-marked-alt', name: 'Virtual Tour' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
      ]
    },
    {
      title: 'National Australia Bank (NAB)',
      description: 'Long-term collaboration (2018-2023) delivering both video production and custom web development solutions. Video production focused on customer relations content, including: professional actor-based scenarios, initiative launches, and a comprehensive 360° virtual tour of NAB\'s new Sydney offices. Web development focused on creating custom applications integrated with NAB\'s SharePoint environment, including: interactive training portals, compliance tracking systems, and team collaboration tools. Projects required strict security compliance, complex SharePoint integration, and adherence to NAB\'s design and development standards.',
      webDescription: 'Long-term collaboration delivering custom web development solutions and video production. Over many years I created 360° virtual tours, data rich SharePoint-integrated applications, bespoke web portals and compliance tracking systems while maintaining strict security standards.',
      linkedinDescription: 'Long-term collaboration delivering video production and custom web development solutions, including professional actor-based scenarios, 360° virtual tours, and SharePoint-integrated applications. Created custom training portals and compliance tracking systems while maintaining strict security standards.',
      period: '2018-2023',
      technologies: [
        { icon: 'fab fa-angular', name: 'Angular' },
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-camera', name: '360° Video' },
        { icon: 'fas fa-share-alt', name: 'SharePoint' }
      ]
    },
    {
      title: 'Powercor Safety Training Series',
      description: 'Comprehensive safety training video series (2021-2023) for Powercor, Australia\'s largest electricity distribution company. Produced 50+ safety training videos covering critical topics including: high-voltage safety procedures, emergency response protocols, and field operation guidelines. Projects involved complex technical scenarios, safety demonstrations, and on-location filming at various power stations and field sites. Content included both procedural training and safety awareness videos, with a focus on maintaining strict safety standards while delivering engaging training content.',
      linkedinDescription: 'Produced a series of safety training videos for Powercor, covering high-voltage safety procedures, emergency response protocols, and field operation guidelines. Filmed on-location at various power stations and field sites, combining technical accuracy with engaging content delivery.',
      period: '2021-2023',
      videoOnly: true,
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-hard-hat', name: 'Safety Training' },
        { icon: 'fas fa-bolt', name: 'Technical' },
        { icon: 'fas fa-camera', name: 'On-location' }
      ]
    },
    {
      title: 'Suncorp Insurance Training Series',
      description: 'Comprehensive training and management video series (2020-2023) including: insurance fraud training with professional actors in staged scenarios, management communication videos, and 360° virtual tours of offices. Projects spanned multiple locations across Victoria, New South Wales, and Queensland, involving complex logistics, multi-camera setups, and professional actors. Content included both procedural training and executive communications, with a focus on maintaining consistent quality across all deliverables.',
      linkedinDescription: 'Produced comprehensive training and management video series, including insurance fraud training with professional actors, management communications, and 360° virtual tours. Projects spanned multiple locations across Victoria, New South Wales, and Queensland, involving complex logistics and multi-camera setups.',
      period: '2020-2023',
      videoOnly: true,
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-theater-masks', name: 'Acting' },
        { icon: 'fas fa-map-marker-alt', name: 'Location' },
        { icon: 'fas fa-camera', name: '360° Video' }
      ]
    },
    
    {
      title: 'Department of Education Inclusion',
      description: 'Comprehensive video series (2021-2022) covering multiple educational initiatives: 50+ videos on inclusive classroom practices, teaching strategies, and professional development. Project included 140+ interviews with teachers, principals, staff, and students across 20 schools, plus additional content on innovative teaching methodologies and professional development programs. The project spanned three months of shooting and six months of editing, resulting in a rich library of educational resources.',
      linkedinDescription: 'Produced 50+ videos on inclusive classroom practices and teaching strategies, including 140+ interviews across 20 schools. Created a rich library of educational resources covering innovative teaching methodologies and professional development programs.',
      period: '2021-2022',
      videoOnly: true,
      technologies: [
        { icon: 'fas fa-video', name: 'Video Production' },
        { icon: 'fas fa-microphone', name: 'Interviews' },
        { icon: 'fas fa-film', name: 'Documentary' },
        { icon: 'fas fa-graduation-cap', name: 'Education' }
      ]
    },
    {
      title: 'Five2Study',
      description: 'A responsive educational website developed for Australian Catholic University (ACU) to support Australian students and parents with curated study resources across subjects and year levels. The initial design and layouts were created in Webflow for visual clarity and accessibility, then developed using custom HTML, CSS, and JavaScript, ensuring fast performance and full control over the codebase. A highlight feature is the interactive referencing tool on the Academic Writing > Referencing page, built with React. It allows users to quickly generate academic citations (APA, MLA, Harvard, etc.) via a user-friendly, form-based interface—making it easier for students to produce properly formatted references. This project blends visually driven design with hand-coded precision, offering a lightweight, fast-loading, and highly accessible educational experience.',
      linkedinDescription: 'Developed a responsive educational website for Australian Catholic University with curated study resources and an interactive React-based referencing tool for academic citations. Initial design and layouts created in Webflow, then built with custom HTML/CSS/JavaScript for optimal performance and accessibility.',
      period: '2025',
      link: 'https://five2study.com.au/',
      technologies: [
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        { icon: 'fas fa-graduation-cap', name: 'Education' },
        { icon: 'fas fa-mobile-alt', name: 'Responsive' }
      ]
    },
    {
      title: 'Service2Campus',
      description: 'A student-focused support website developed for Australian Catholic University (ACU) to help university students access key services, information, and campus resources with ease. The initial design and layouts were created in Webflow to achieve a clean, approachable visual style, then developed using custom HTML, CSS, and JavaScript for lightweight performance and precise control. The platform provides comprehensive guidance for students navigating university life, including information about campus services, academic support, and student resources.',
      linkedinDescription: 'Developed a student-focused support website for Australian Catholic University using Webflow for initial design and layouts, then built with custom HTML/CSS/JavaScript. The platform helps university students access key services, information, and campus resources with an intuitive, lightweight interface.',
      period: '2025',
      link: 'https://service2campus.com.au/',
      technologies: [
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        { icon: 'fas fa-university', name: 'Student Services' },
        { icon: 'fas fa-mobile-alt', name: 'Responsive' }
      ]
    },
    {
      title: 'Interactive 360 Platform',
      description: 'Developed a custom Angular and Three.js-based 360° panoramic platform that served as the foundation for multiple client projects including Coles, NAB, Suncorp, ACU, Monash and Dept of Health. The framework featured interactive hotspots, custom navigation, and seamless integration with client branding. Future development plans include integration of 3D models and alpha-channel video for embedded presenters, enhancing the immersive experience. The platform demonstrated the ability to scale across different industries while maintaining consistent quality and user experience.',
      
      linkedinDescription: 'Developed a custom Angular and Three.js-based 360° panoramic platform with interactive hotspots and custom navigation for multiple major clients. The framework featured seamless integration with client branding and demonstrated scalability across different industries.',
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
      linkedinDescription: 'Developed a web-based campus safety application for Monash and Western Sydney Universities, packaged for iOS and Android with significant media coverage. Built with a responsive web core and native containers to ensure consistent functionality across all devices.',
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
      linkedinDescription: 'Developed a single-page AngularJS app for teachers to assess media usage rights, featuring an editable, self-contained dataset. The tool was hosted internally and provided an intuitive interface for querying and updating media usage guidelines.',
      period: '2021',
      technologies: [
        { icon: 'fab fa-angular', name: 'AngularJS' },
        { icon: 'fas fa-database', name: 'Data Management' }
      ]
    },
    {
      title: 'Suncorp Career Compass',
      description: 'Developed a sophisticated web-based career development tool (Flash) that processed extensive data entirely in the browser: nearly 500 job roles and 800 training resources stored in a flat database file. The application featured interactive charts and data visualization to help staff compare their current role with potential future roles. All data processing, filtering, and visualization was handled client-side with no backend requirements, demonstrating efficient browser-based data management. The tool automatically compiled personalized training catalogs based on role comparisons, helping employees plan their career progression.',
      linkedinDescription: 'Developed a browser-based career development tool processing 500 job roles and 800 training resources, featuring interactive charts and personalized training catalogs. All data processing and visualization was handled client-side, demonstrating efficient browser-based data management.',
      period: '2014',
      technologies: [
        { icon: 'fab fa-angular', name: 'AngularJS' },
        { icon: 'fas fa-chart-line', name: 'Charts' },
        { icon: 'fas fa-database', name: 'Client-side DB' },
        { icon: 'fas fa-code', name: 'Web App' },
        { icon: 'fas fa-users', name: 'HR' }
      ]
    },
    {
      title: 'AMF Cyberparent',
      description: 'Developed a comprehensive anti-bullying platform for the Australian Multicultural Foundation, consisting of 15 iOS and 15 Android mobile applications in multiple languages, each with supporting web versions. The project involved converting a web-based application into native mobile platforms, requiring careful management of multiple app store submissions and updates. Handled complex logistics of publishing and maintaining applications across different languages and platforms, ensuring consistent user experience and content delivery. The platform provided resources and tools to help parents and educators address online bullying in culturally sensitive ways.',
      linkedinDescription: 'Developed 30 mobile applications (15 iOS, 15 Android) in multiple languages for an anti-bullying platform, each with supporting web versions. Managed complex logistics of publishing and maintaining applications across different languages and platforms.',
      period: '2016',
      technologies: [
        { icon: 'fab fa-apple', name: 'iOS' },
        { icon: 'fab fa-android', name: 'Android' },
        { icon: 'fas fa-globe', name: 'Multilingual' },
        { icon: 'fab fa-mobile-alt', name: 'Mobile' }
      ]
    },
    {
      title: 'Budda Jitcha & You Can Work',
      description: 'Developed two comprehensive Flash-based e-learning courses, each containing over 40 hours of interactive content. Featured custom-built 3D avatars, professional voice acting, and interactive puzzles. The courses were designed to teach Indigenous Australians about workplace safety and employment opportunities, combining cultural sensitivity with engaging learning experiences. Included branching scenarios, interactive assessments, and progress tracking. The project won the Life Long Learning Award in 2011 for its innovative approach to Indigenous education.',
      linkedinDescription: 'Developed two 40-hour Flash-based e-learning courses with 3D avatars and interactive puzzles, winning the Life Long Learning Award in 2011. Combined cultural sensitivity with engaging learning experiences to teach Indigenous Australians about workplace safety.',
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
      webDescription: 'Comprehensive food safety and health education project (2020-2023) delivering multiple content types: food safety training videos, interactive 360° virtual tours of commercial kitchens using a custom-built platform.  During COVID-19, produced rapid-response hand hygiene training videos. The project combined technical video production with interactive web development, creating an engaging learning experience for food safety professionals and the public.',
      linkedinDescription: 'Produced food safety training videos, 360° virtual tours of commercial kitchens, and a documentary series following environmental health officers. During COVID-19, created rapid-response hand hygiene training videos, combining technical video production with interactive web development.',
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

  skills: Skill[] = [
    {
      category: 'Development IDE',
      subcategories: [
        {
          name: 'AI coding (Vibe/No Code)',
          items: [
            { name: 'Cursor', isPrimary: true },
            { name: 'Claude Code' },
            { name: 'GitHub Copilot' },
            { name: 'Roo' },
            { name: 'Continue' }
          ]
        },
        {
          name: 'Languages',
          items: [
            { name: 'TypeScript/JavaScript (20y)', isPrimary: true },
            { name: 'Python (3y)' },
            { name: 'PHP (2y)' },
            { name: 'HTML/CSS/SASS (25y)', isPrimary: true }
          ]
        },
        {
          name: 'Frameworks',
          items: [
            { name: 'Angular (10y)', isPrimary: true },
            { name: 'React' },
            { name: 'Node.js' },
            { name: 'Laravel/Lumen' },
            { name: 'Three.js' }
          ]
        },
        {
          name: 'Cloud/DevOps',
          items: [
            { name: 'AWS' },
            { name: 'Google Cloud' },
            { name: 'Azure' },
            { name: 'Linux' },
            { name: 'VPS management' }
          ]
        },
        {
          name: 'Mobile',
          items: [
            { name: 'Cordova (iOS/Android)' },
            { name: 'React Native' }
          ]
        },
        {
          name: 'AI/ML',
          items: [
            { name: 'LLM integration' },
            { name: 'RAG implementations' },
            { name: 'Stable Diffusion' },
            { name: 'Custom model training' },
            { name: 'OpenAI (API)', isPrimary: true },
            { name: 'Agent tools/functions' }
          ]
        }
      ]
    },
    {
      category: 'eLearning & Media',
      subcategories: [
        {
          name: 'eLearning Platforms',
          items: [
            { name: 'Adapt Framework' },
            { name: 'Storyline', isPrimary: true },
            { name: 'Lectora' },
            { name: 'Moodle', isPrimary: true },
            { name: 'SCORM/xAPI', isPrimary: true },
            { name: 'Custom built solutions' }
          ]
        },
        {
          name: 'Video Production',
          items: [
            { name: '200+ corporate/training videos', isPrimary: true },
            { name: 'Concepting' },
            { name: 'Script reviews/breakdowns' },
            { name: 'Shotlists' },
            { name: 'Scheduling/Call Sheets' },
            { name: 'Logistics' },
            { name: 'Equipment reviews' },
            { name: 'Purchasing' },
            { name: 'Talent acquisition' },
            { name: 'Project scoping' }
          ]
        },
        {
          name: 'Onsite / Studio',
          items: [
            { name: 'Professional cinema camera operator (SONY)' },
            { name: 'S-Log or quick delivery formats' },
            { name: 'Audio: wired/wireless setup' },
            { name: 'Lighting setups' },
            { name: 'Green screen workflow' },
            { name: 'DOP/Directing' },
            { name: 'Script supervision' },
            { name: 'Multiple camera setups' },
            { name: '360° photography' }
          ]
        },
        {
          name: 'Post-Production',
          items: [
            { name: 'Davinci Resolve (8y)', isPrimary: true },
            { name: 'Premiere Pro (15y)', isPrimary: true },
            { name: 'After Effects' },
            { name: 'Stakeholder reviews' },
            { name: 'RAW footage management' },
            { name: 'Cataloging' },
            { name: 'Local and cloud backups' }
          ]
        },
        {
          name: 'AI Media',
          items: [
            { name: 'ComfyUI', isPrimary: true },
            { name: 'Stable Diffusion' },
            { name: 'Runway' },
            { name: 'HeyGen' },
            { name: 'Suno' }
          ]
        }
      ]
    },
    {
      category: 'Tools & Design',
      subcategories: [
        {
          name: 'Design',
          items: [
            { name: 'Figma' },
            { name: 'Webflow' },
            { name: 'Adobe Creative Suite (15y)', isPrimary: true },
            { name: 'Canva' },
            { name: 'Affinity Designer' },
            { name: 'Affinity Photo' },
            { name: 'Blender' }
          ]
        },
        {
          name: 'Development',
          items: [
            { name: 'VS Code' },
            { name: 'Cursor' },
            { name: 'WebStorm' },
            { name: 'PyCharm' },
            { name: 'PHPStorm' }
          ]
        },
        {
          name: 'Project Management / Comms',
          items: [
            { name: 'ClickUp' },
            { name: 'Trello' },
            { name: 'Asana' },
            { name: 'Avaza' },
            { name: 'Slack' }
          ]
        },
        {
          name: 'Version Control',
          items: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'Bitbucket' }
          ]
        }
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
      description: 'On going experiments with ComfyUI, Stable Diffusion and the big video generation platforms. Mainly focused on finding commerical workflows using ControlNet and other techniques to match client brand briefs and post editing. Almost there! This sector changes so fast that I\'m considering waiting a few months as every code run I take it seems to be outdated the follwoing week.',
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
      text: '"Ash has become an invaluable developer and technical advisor, providing hands-on expertise and guidance in emerging technologies. His extensive experience in web, eLearning, video, and creative technology, combined with his enthusiasm, has added significant value and innovation to our offerings. His work has been recognized with multiple industry awards, including LearnX and AITD Excellence awards, reflecting the high quality and innovation of his contributions."',
      author: 'Rodney Beach',
      position: 'Group Managing Director, Liberate Learning'
    },
    {
      text: '"Ash has been a key partner in our digital learning initiatives, consistently delivering high-quality projects across our organization. Through his work with Liberate Learning, he has produced numerous video projects across multiple states in Australia, from interactive eLearning modules to immersive 360° training environments. His recent work in AI-driven learning solutions, particularly his development of an AI-powered system for automated courseware generation in the Adapt Framework, has brought innovative approaches to our training programs. His ability to manage complex logistics while maintaining consistent quality, combined with his forward-thinking approach to emerging technologies, has made him an invaluable resource for our learning and development needs."',
      author: 'Siva Kulasingam',
      position: 'Digital Learning Manager | Culture & Capability, People & Culture | Coles Supermarkets'
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
    summary: `20+ years building web and eLearning applications, with expertise spanning front-end development, backend systems, and cloud infrastructure. Complemented by 8+ years of successful video production that has delivered 200+ corporate and training videos for major Australian organizations. Entirely self-taught, I've demonstrated a unique ability to master complex emerging technologies, from AI and machine learning to advanced video production techniques. My journey from traditional web development to becoming a sought-after video producer showcases my adaptability and commitment to growth. Currently focused on AI integration and video production, I combine technical expertise with creative problem-solving to deliver innovative solutions that meet real business needs. My success in both technical development and video production reflects my ability to rapidly grasp and implement cutting-edge technologies while maintaining a practical, business-focused approach.`,
    strengths: [
      'Rapid technology adoption and mastery',
      'End-to-end project delivery',
      'Creative problem-solving',
      'Strong client relationships',
      'Technical and creative balance'
    ],
    workStyle: [
      'Self-directed and proactive',
      'Detail-oriented quality focus',
      'Adaptable to changing requirements',
      'Collaborative team player',
      'Continuous learning mindset'
    ],
    keyAchievements: [
      '200+ corporate videos produced',
      'Award-winning eLearning projects',
      'Successful AI integration',
      'Multi-state project delivery',
      'Long-term client partnerships'
    ],
    personalBackground: {
      story: `My journey began in web development, where I spent over 15 years building interactive applications and eLearning solutions. The transition to video production was a natural evolution, combining my technical skills with creative storytelling. This unique combination has allowed me to deliver comprehensive solutions that bridge the gap between technology and human communication.`,
      family: `Based in Melbourne with my family, I balance professional growth with personal development. My work ethic and commitment to quality are driven by a desire to provide for my family while pursuing my passion for technology and creativity.`
    },
    careerObjectives: `To continue evolving as both a technical developer and video producer, leveraging emerging technologies like AI to create innovative solutions. I aim to maintain my position as a trusted partner for major Australian organizations while exploring new opportunities in AI integration and advanced video production techniques. My goal is to demonstrate that technical expertise and creative vision can coexist, delivering exceptional results that exceed client expectations.`
  };

  constructor() { }

  getProjects(includeLinkedInDescription: boolean = false): Project[] {
    return this.projects.map(project => ({
      ...project,
      description: includeLinkedInDescription && project.linkedinDescription 
        ? project.linkedinDescription 
        : project.description
    }));
  }
} 