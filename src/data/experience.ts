import { FunContent, Experience } from '../types';

export const funContent: FunContent = {
  title: "Beyond the Code",
  description: "When I'm not building products, I'm on the soccer field or chasing the next adventure.",
  achievements: [
    "Won 5 consecutive BYU Soccer national championships (2021-2025)",
    "Served a volunteer mission in Quito, Ecuador",
    "Co-founded a consumer product startup (SurfMongers)",
    "Sandbox Fellowship recipient at BYU"
  ],
  hobbies: ["Soccer", "Wake Surfing", "Hiking", "Entrepreneurship"],
  personality: ["Builder", "Competitive", "Curious", "Relentless"]
};

export const experience: Experience[] = [
  {
    company: "PostGame AI",
    position: "Founder & Software Engineer",
    duration: "Sept 2025 — Present",
    description: "Architected and built an AI-powered coaching platform enabling coaches to send audio feedback and athletes to receive AI-generated insights and performance summaries.",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "OpenAI API"],
    achievements: [
      "Built full-stack platform from concept to deployment",
      "Implemented AI pipelines for audio transcription and analysis",
      "Designed backend APIs for real-time AI processing",
      "Led product development, system architecture, and feature design"
    ]
  },
  {
    company: "Soar (AI Technology Startup)",
    position: "Software Engineer",
    duration: "Jan 2025 — Present",
    description: "Built a production AI-powered lead generation platform with semantic search and scalable serverless infrastructure.",
    technologies: ["Next.js", "AWS Lambda", "DynamoDB", "Pinecone", "OpenAI"],
    achievements: [
      "Built production lead generation platform end-to-end",
      "Implemented semantic search with OpenAI embeddings and Pinecone",
      "Developed scalable serverless backend and REST APIs",
      "Designed database architecture for multi-user workflows"
    ]
  },
  {
    company: "Soar (AI Technology Startup)",
    position: "Data Engineer",
    duration: "Feb 2024 — Jan 2025",
    description: "Developed AI models using generative AI to provide real-time analysis, insights, and actions to users. Engineered Python ML modules used daily by customers.",
    technologies: ["Python", "Machine Learning", "Gen AI", "Data Pipelines"],
    achievements: [
      "Built AI models for real-time analysis and insights",
      "Engineered Python ML modules for daily customer use",
      "Created repeatable AI modules for organizational training"
    ]
  },
  {
    company: "Utah Innovation Fund",
    position: "Investment Analyst",
    duration: "Dec 2023 — Present",
    description: "Analyzing and evaluating investment opportunities in deep tech and life sciences startups. Building financial models and providing risk assessments.",
    technologies: ["Financial Modeling", "Market Analysis", "Due Diligence"],
    achievements: [
      "Identified high-potential startups in deep tech and life sciences",
      "Developed financial models and investment forecasts",
      "Provided risk assessments informing fund strategy"
    ]
  },
  {
    company: "Brandless (Healthcare Technology)",
    position: "Senior Data Associate",
    duration: "Oct 2022 — Oct 2023",
    description: "Created data dashboards and worked with the insights team to present information to CEO and executives, driving data-informed business growth.",
    technologies: ["Sigma", "Python", "SQL", "Data Visualization"],
    achievements: [
      "Built data dashboards for executive decision-making",
      "Presented insights directly to CEO and leadership",
      "Developed data strategies to drive business growth"
    ]
  },
  {
    company: "Brandless (Healthcare Technology)",
    position: "M&A Associate",
    duration: "Mar 2021 — Oct 2022",
    description: "Sourced and qualified acquisition targets, consistently meeting quotas and helping drive 1,400% company growth.",
    technologies: ["M&A", "Business Development", "Lead Generation"],
    achievements: [
      "Helped drive 1,400% company growth",
      "Consistently met lead and opportunity quotas",
      "Sourced and qualified acquisition targets"
    ]
  }
];
