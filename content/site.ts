import type { ContactConfig, Profile, Project, SiteConfig, TimelineEntry } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Mohammed Jorf",
  title: "Mohammed Jorf | Hybrid AI and Embedded Systems Engineer",
  description:
    "Portfolio of Mohammed Jorf, Hybrid AI and Embedded Systems Engineer working across clinical NLP, LLM systems, and intelligent hardware.",
  url: "https://mohammed-jorf.vercel.app",
  email: "mohammedjorf99@gmail.com",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammedjorf" }
  ]
};

export const profile: Profile = {
  fullName: "Mohammed Jorf",
  headline: "Hybrid AI and Embedded Systems Engineer",
  location: "Istanbul, Turkey",
  bio: "I bridge hardware and software to build practical AI systems. My work spans clinical NLP benchmarking, transformer fine-tuning, embedded medical devices, and intelligent automation workflows.",
  skills: [
    "Python",
    "C++",
    "MATLAB",
    "Simulink",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Hugging Face",
    "OpenAI API",
    "RAG",
    "QLoRA",
    "BioBERT",
    "ClinicalBERT",
    "Arduino",
    "Raspberry Pi",
    "STM32",
    "Docker",
    "Linux"
  ],
  languages: [
    "Arabic (Native speaker)",
    "English (Very good command)",
    "Turkish (Good working knowledge)"
  ],
  interests: [
    "AI in healthcare and education",
    "Edge AI and IoT systems",
    "Assistive device innovation",
    "Human-AI collaboration",
    "Ethical and responsible AI"
  ],
  softSkills: [
    "Strong verbal and written communication",
    "Team collaboration and leadership",
    "Creative problem solving and critical thinking",
    "Rapid learning and adaptability",
    "Project planning and execution",
    "Research and academic writing",
    "Presentation and public speaking",
    "Attention to detail and documentation"
  ],
  phone: "+90 501 327 8028",
  resumeUrl: "/Mohammed-Jorf-CV.pdf"
};

export const projects: Project[] = [
  {
    slug: "clinical-ai-nlp-benchmarking",
    title: "Clinical AI NLP Benchmarking",
    summary:
      "Benchmarked classical machine learning and transformer models for symptom-based diagnosis across multiple medical datasets with fairness and robustness analysis.",
    tech: ["Python", "BioBERT", "ClinicalBERT", "Scikit-learn", "Transformers"],
    year: 2024,
    featured: true,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "wearable-bone-conduction-device",
    title: "Wearable Bone Conduction Hearing Device",
    summary:
      "Designed and prototyped an assistive wearable device using embedded circuitry and custom hardware integration as an undergraduate capstone.",
    tech: ["Embedded Systems", "Circuit Design", "Microcontrollers", "Prototyping"],
    year: 2022,
    featured: true,
    thumbnail: "/images/bone-conduction-glasses.webp"
  },
  {
    slug: "llm-engineering-mini-projects",
    title: "LLM Engineering Project Track",
    summary:
      "Built multiple LLM projects including a multimodal support agent, audio-to-action meeting assistant, autonomous RAG deal finder, and optimization pipelines.",
    tech: ["LLMs", "RAG", "Agents", "Fine-tuning", "QLoRA"],
    year: 2025,
    featured: true
  },
  {
    slug: "offside-detection-vision-system",
    title: "Offside Detection Vision System",
    summary:
      "Contributed to computer vision-based sports technology in R&D, including embedded and sensor-driven integration work.",
    tech: ["Computer Vision", "Embedded Systems", "Sensors"],
    year: 2024,
    featured: false
  }
];

export const experience: TimelineEntry[] = [
  {
    org: "Bahcesehir University",
    role: "Researcher - Clinical AI / NLP / Transformers",
    location: "Istanbul",
    period: "Sep 2022 - Jan 2024",
    highlights: [
      "Benchmarked classical and transformer models for medical NLP tasks.",
      "Fine-tuned BioBERT with class-weighted loss and evaluated transfer learning scenarios.",
      "Investigated fairness and robustness of clinical AI pipelines across datasets."
    ]
  },
  {
    org: "Teknopark (ZETA SAVUNMA)",
    role: "R&D Intern - Embedded and Vision Systems",
    location: "Istanbul",
    period: "Apr 2022 - Jul 2024",
    highlights: [
      "Designed embedded systems using microcontrollers and sensor networks.",
      "Supported CV-based sports technology, including an offside detection system.",
      "Studied cybersecurity concepts for smart electrical systems."
    ]
  }
];

export const education: TimelineEntry[] = [
  {
    org: "Bahcesehir University",
    role: "MSc in Computer Engineering",
    location: "Istanbul, Turkey",
    period: "Jan 2023 - Jan 2025",
    highlights: [
      "Thesis on clinical decision support comparing machine learning and transformer models for symptom-based diagnosis.",
      "Used NLP methods including TF-IDF, n-gram preprocessing, and structured symptom indicators.",
      "Worked with datasets such as Kaggle Symptom2Disease, Gretel, and TecBlic.",
      "Applied optimization techniques including class weighting, AdamW, and AdamP."
    ]
  },
  {
    org: "Bahcesehir University",
    role: "BSc in Electrical and Electronics Engineering",
    location: "Istanbul, Turkey",
    period: "Jan 2018 - Jan 2022",
    highlights: [
      "Capstone project: wearable bone conduction hearing device with embedded circuitry.",
      "Lab work in analog circuits, power systems, control systems, and microcontroller programming.",
      "Tools used: MATLAB, Simulink, Proteus, multimeters, and oscilloscopes."
    ]
  }
];

export const courses: TimelineEntry[] = [
  {
    org: "Udemy",
    role: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    location: "Online",
    period: "Jan 2025",
    highlights: [
      "Built mini-projects such as AI brochure generation, multimodal support agent, meeting assistant, and autonomous RAG deal-finder.",
      "Capstone: fine-tuned an open-source model and compared RAG, fine-tuning, and agentic workflows across open and closed-source models."
    ]
  }
];

export const contactConfig: ContactConfig = {
  publicEmail: siteConfig.email,
  formEndpoint: "https://formspree.io/f/your-form-id",
  successMessage: "Your note is in. I will review it and reply as soon as I can.",
  spamProtectionMode: "honeypot"
};
