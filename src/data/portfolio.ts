export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'education' | 'experience';
  location: string;
  technologies?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
}

export interface Certificate {
  id: number;
  title: string;
  organization?: string;
  date?: string;
  url?: string;
  image?: string;
  verificationId?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// DATOS REALES DE MANUEL PANIAGUA - EXTRAÍDOS DE CURRICULUM.JSON

export const timelineData: TimelineItem[] = [
  // EXPERIENCIA LABORAL (más reciente a más antiguo)
  {
    id: 1,
    title: "Praktikum Fachinformatiker Anwendungsentwicklung",
    organization: "MAXEDV-Beratung GmbH",
    description: "Praktikum als Fachinformatiker für Anwendungsentwicklung, arbeiten an modernen Softwareentwicklungsprojekten.",
    startDate: "2024-04",
    endDate: "2025-01",
    type: "experience",
    location: "Hamburg",
    technologies: ["Java", "Spring", "JavaScript", "TypeScript", "React", "SQL"]
  },
  {
    id: 2,
    title: "Bellmann",
    organization: "Hotel Park Hyatt Hamburg",
    description: "Arbeit im Luxushotelbereich, Bereitstellung hochwertiger Dienstleistungen für internationale Gäste.",
    startDate: "2021-10",
    endDate: "2022-12",
    type: "experience",
    location: "Hamburg"
  },
  {
    id: 3,
    title: "Rettungsschwimmer",
    organization: "Städtischen Schwimmbad",
    description: "Rettungsschwimmer im städtischen Schwimmbad, verantwortlich für die Wassersicherheit der Nutzer.",
    startDate: "2020-05",
    endDate: "2020-09",
    type: "experience",
    location: "Muro, Mallorca"
  },
  {
    id: 4,
    title: "Kommissionierer",
    organization: "LIDL GmbH & Co. KG",
    description: "Arbeit in Logistik und Lager, Bestandsverwaltung und Kommissionierung.",
    startDate: "2020-11",
    endDate: "2021-09",
    type: "experience",
    location: "Wenzendorf, Deutschland"
  },
  {
    id: 5,
    title: "Kellner",
    organization: "TUI, Hotel Alcudia Pins",
    description: "Gastronomieservice im internationalen Tourismushotel, mehrsprachige Kundenbetreuung.",
    startDate: "2019-05",
    endDate: "2019-09",
    type: "experience",
    location: "Alcudia, Mallorca"
  },
  {
    id: 6,
    title: "Oberkellner",
    organization: "Skau Restaurant",
    description: "Fortgeschrittene Erfahrung in der Gastronomie als Oberkellner, Teamleitung und Servicemanagement.",
    startDate: "2018-03",
    endDate: "2018-12",
    type: "experience",
    location: "Can Picafort, Mallorca"
  },

  // EDUCACIÓN (más reciente a más antiguo)
  {
    id: 7,
    title: "Englischkurs Business Fortgeschritten",
    organization: "Verein für berufliche Weiterbildung e.V.",
    description: "Fortgeschrittener Business-Englischkurs zur Verbesserung der beruflichen Fähigkeiten.",
    startDate: "2024-02",
    endDate: "2024-09",
    type: "education",
    location: "Hamburg"
  },
  {
    id: 8,
    title: "Umschulung Fachinformatiker Anwendungsentwicklung",
    organization: "Baumann Bildung und Qualifizierung GmbH",
    description: "Berufsausbildung als Fachinformatiker für Anwendungsentwicklung.",
    startDate: "2023-02",
    endDate: "2025-01",
    type: "education",
    location: "Hamburg"
  },
  {
    id: 9,
    title: "Telc Deutsch B2",
    organization: "Speakeasy",
    description: "Offizielle Zertifizierung der deutschen Sprache Niveau B2.",
    startDate: "2022-03",
    endDate: "2022-06",
    type: "education",
    location: "Hamburg"
  },
  {
    id: 10,
    title: "Data Analytics by Google Analytics",
    organization: "Coursera",
    description: "Umfassender Kurs in Datenanalyse mit Google Analytics, erfolgreich abgeschlossen.",
    startDate: "2021-04",
    endDate: "2023-12",
    type: "education",
    location: "Online, Hamburg"
  },
  {
    id: 11,
    title: "Ausbildung Finanzen und Verwaltungsfachangestellter",
    organization: "CIFP Joan Taix",
    description: "Berufsausbildung in Finanzen und Verwaltung, erfolgreich abgeschlossen.",
    startDate: "2018-09",
    endDate: "2020-06",
    type: "education",
    location: "Sa Pobla, Mallorca"
  },
  {
    id: 12,
    title: "Oberkellner Kurs",
    organization: "ETB - Balearische Tourismusschule",
    description: "Spezialisierter Kurs in Gastronomieservice-Management und Teamführung.",
    startDate: "2016-10",
    endDate: "2016-12",
    type: "education",
    location: "Palma de Mallorca"
  },
  {
    id: 13,
    title: "Intensiv Deutschkurs A1-A2",
    organization: "IH Cologne Insula Sprachschule",
    description: "Intensivkurs Deutsch für Anfänger, Grundlage für die Integration in Deutschland.",
    startDate: "2016-01",
    endDate: "2016-03",
    type: "education",
    location: "Köln"
  },
  {
    id: 14,
    title: "Ausbildung Kaufmann",
    organization: "CIFP Joan Taix",
    description: "Berufsausbildung im Handel, erfolgreich abgeschlossen.",
    startDate: "2013-09",
    endDate: "2015-06",
    type: "education",
    location: "Sa Pobla, Mallorca"
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Automatisierte E-Mail-Anhangs Verwaltung IHK PROJEKT",
    description: "Dieses Projekt verbindet sich über IMAP mit einem E-Mail-Konto, lädt angehängte Rechnungsdateien herunter, verarbeitet sie mit der AWS Textract API zur Datenextraktion, benennt die Dateien um und verschiebt sie in einen gewünschten Ordner. Entwickelt für Windows-Systeme mit IONOS E-Mail-Provider (konfigurierbar für andere Anbieter). Bietet einen automatisierten Rechnungsverarbeitungs-Workflow vom E-Mail-Abruf bis zur organisierten Dateispeicherung.",
    images: [
      "/projects/Email-verwalten/Email-verwalten.png",
      "/projects/Email-verwalten/loesung.PNG",
      "/projects/Email-verwalten/datenextracion.png"
    ],
    technologies: ["Python", "AWS Textract", "IMAP", "Email Processing", "Invoice Processing", "OCR", "File Management", "PyInstaller", "Windows"],
    githubUrl: "https://github.com/IanPaniagua/automatisierte_email_Anhang-AWS_pyinstaller",
    documentationUrl: "/projects/Email-verwalten/Paniagua_Projekt_IHK.pdf"
  },
  {
    id: 2,
    title: "Fachinformatiker-Prüfungsvorbereitung",
    description: "Diese Webseite ist dafür gedacht, die gesamte Theorie der Fachinformatiker-Prüfung in einfachem Deutsch zu vermitteln. Mit kurzen und klaren Erklärungen. Außerdem haben Benutzer die Möglichkeit, über 50 Fragen zur Prüfung zu beantworten und zu üben. Alle Themen wurden aus den letzten Prüfungen seit 2022 zusammengestellt. Die Anwendung bietet eine strukturierte Seitenleiste für einfache Navigation durch Theorie und interaktive Übungen für API 1 und API 2.",
    images: [
      "/projects/fachinformatik/fachinformatik.PNG",
      "/projects/fachinformatik/fachinformatik-2.PNG",
      "/projects/fachinformatik/fachinformatik-3.PNG"
    ],
    technologies: ["Astro", "TailwindCSS", "Netlify", "Educational Platform", "Interactive Exercises", "German Language"],
    githubUrl: "https://github.com/IanPaniagua/Fachinformatik-Website",
    liveUrl: "https://fachinformatik.netlify.app/"
  },
  {
    id: 3,
    title: "LinguFlix - Deutsch Lernplattform",
    description: "Eine vollständig von mir entworfene Webplattform zum Deutschlernen durch immersive Videos, Phrasenwiederholung und Vokabeltraining. Benutzer können ihre Stimme aufnehmen und mit der originalen Aussprache vergleichen. Die Anwendung bietet Google-Login über Firebase-Authentifizierung sowie vollständige Storage-Verwaltung mit Firebase. Responsive Design und intuitive Benutzeroberfläche. Entwickelt mit modernen Technologien wie Next.js, TypeScript und TailwindCSS und erfolgreich auf Vercel bereitgestellt.",
    images: [
      "/projects/linguflix/linguflix.PNG",
      "/projects/linguflix/linguflix-2.PNG",
      "/projects/linguflix/linguflix-3.PNG"
    ],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Vercel", "React", "Responsive Design", "Authentication"],
    githubUrl: "https://github.com/IanPaniagua/linguflix-app",
    liveUrl: "https://linguflix-app.vercel.app/"
  },
  {
    id: 4,
    title: "Digitales Profil - HTML/CSS/JavaScript",
    description: "Eines meiner ersten Projekte, das Teil des Master CSS Kurses von Victor Robles war, dem ich meine persönliche Note verliehen habe. Entwickelt mit reinem HTML, CSS und etwas JavaScript, wobei CSS Best Practices angewendet wurden. Dieses Projekt legte die notwendigen Grundlagen für das Verständnis moderner Technologien wie TailwindCSS und zeigt meine frühen Fähigkeiten in der Frontend-Entwicklung, responsivem Design und strukturiertem CSS-Code.",
    images: [
      "/projects/alte-profile/profile.PNG",
      "/projects/alte-profile/profile-2.PNG",
      "/projects/alte-profile/profile-3.PNG"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Frontend Development"],
    githubUrl: "https://github.com/IanPaniagua/IanPaniagua",
    liveUrl: "https://ianpaniagua.github.io/IanPaniagua/"
  }
];

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Umschulung Fachinformatiker Fachrichtung Anwendungsentwicklung",
    organization: "HK Hamburg",
    date: "2025",
    verificationId: "/IHK.pdf",
    image: "/image/Handelskammer-Hamburg-logo.webp"
  },
  {
    id: 2,
    title: "EXIN Agile Scrum Foundation",
    organization: "EXIN",
    date: "6 November 2023",
    verificationId: "https://app.exeed.pro/holder/badge/160612",
    image: "/image/badge-scrum-master.jpg"
  },
  {
    id: 3,
    title: "EXIN Agile Scrum Master",
    organization: "EXIN",
    date: "18 November 2023",
    verificationId: "https://app.exeed.pro/holder/badge/161631",
    image: "/image/badge-scrum-master.jpg"
  },
  {
    id: 4,
    title: "Foundations of Digital Marketing and E-commerce",
    organization: "Coursera, Google",
    date: "9 Oktober 2023",
    verificationId: "https://coursera.org/verify/SQALTQQR94FZ",
    image: "/image/google-logo.jpg"
  },
  {
    id: 5,
    title: "Data Analytics by Google Analytics",
    organization: "Coursera",
    date: "1 Dezember 2022",
    verificationId: "https://coursera.org/verify/2V6RGSPNX6JL",
    image: "/image/google-logo.jpg"
  },
  {
    id: 6,
    title: "Excel Skills for Business: Essentials",
    organization: "Coursera, Macquarie University",
    date: "20 Oktober 2019",
    verificationId: "https://coursera.org/verify/BKVNPFBMMVNN",
    image: "/image/macquarie.PNG"
  },
  {
    id: 7,
    title: "Foundations of Project Management",
    organization: "Coursera, Google",
    date: "2025-07",
    verificationId: "https://coursera.org/verify/C4RF1IUTXOWG",
    image: "/image/google-logo.jpg"
  },
  {
    id: 8,
    title: "Englischkurs Business Fortgeschritten",
    organization: "Verein für berufliche Weiterbildung e.V.",
    date: "2024",
    image: "/image/VWB.png"
  },
  {
    id: 9,
    title: "Telc Deutsch B2",
    organization: "Speakeasy",
    date: "2022",
    verificationId: "/image/telc-b2.pdf",
    image: "/image/telc.webp"
  },
  {
    id: 10,
    title: "Master en CSS: Responsive, SASS, Flexbox, Grid, Bootstrap",
    organization: "Victor Robles Web",
    date: "2023",
    image: "/image/css.png"
  },
  {
    id: 11,
    title: "100 Days Of Code Web Development Bootcamp",
    organization: "ACADEMIND by Maximilian Schwarzmüller",
    date: "2024",
    image: "/image/academind.jpg"
  }
];

export const socialLinksData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/IanPaniagua",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ian-paniagua",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:paniagua.ian.de@gmail.com",
    icon: "envelope"
  }
];

// INFORMACIÓN PERSONAL
export const personalInfo = {
  name: "Manuel Paniagua",
  address: "Beim Andreasbrunnen 6, Hamburg",
  email: "paniagua.ian.de@gmail.com",
  phone: "017610816765",
  linkedin: "https://linkedin.com/in/ian-paniagua",
  github: "https://github.com/IanPaniagua"
};

// HABILIDADES
export const skills = {
  languages: {
    "Spanisch": "Muttersprache",
    "Katalanisch": "Muttersprache", 
    "Deutsch": "Stufe B2 - C1",
    "Englisch": "Stufe B2 – C1"
  },
  technologies: [
    "HTML & CSS",
    "TailwindCSS", 
    "JavaScript",
    "Typescript",
    "React",
    "Astro",
    "JAVA (Spring)",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Git",
    "Github",
    "AWS",
    "Netlify"
  ]
};

// KEYFACTS - TECHNISCHE FÄHIGKEITEN IM DETAIL
export const keyfacts = {
  "Sprachen": [
    "JavaScript", "TypeScript", "Java (OOP)", "SQL", "Unix Commands", "Python"
  ],
  "Frontend": [
    "HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Astro"
  ],
  "Backend": [
    "Node.js", "Express", "REST-API", "Middleware", "Auth", "Websockets", "Tokens", "RAG", "TESTS", "API-OpenAI"
  ],
  "Datenbanken & Speicherung": [
    "MongoDB", "Mongoose", "Firebase", "S3", "AWS Textract"
  ],
  "DevOps & Deployment": [
    "Vercel", "Vite", "Hostinger", "Netlify"
  ],
  "Versionskontrolle": [
    "Git", "GitHub"
  ],
  "Agile Methoden": [
    "Scrum Master", "Kanban", "User Stories", "Sprints", "Milestones", "Project Charter", "Dokumentation"
  ],
  "Tools & Umgebung": [
    "Notion", "Postman", "Cursor", "Visual Studio Code", "IntelliJ IDEA", "ChatGPT"
  ]

}; 