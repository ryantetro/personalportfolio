import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    category: "AI Startup",
    title: "PostGame AI",
    description: "AI-powered coaching platform that transforms audio feedback into actionable athlete insights and performance summaries using OpenAI.",
    longDescription: "Architected and built a full-stack AI platform enabling coaches to send audio feedback and athletes to receive AI-generated insights. Built with Next.js, React, Supabase, and PostgreSQL with OpenAI-powered audio transcription and analysis pipelines.",
    image: "",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "OpenAI API"],
    featured: true,
    status: "in-progress"
  },
  {
    id: 2,
    category: "AI Platform",
    title: "Soar Lead Generation",
    description: "Production AI-powered lead generation platform with semantic search, vector embeddings, and scalable serverless architecture.",
    longDescription: "Built a production lead gen platform using Next.js, AWS Lambda, DynamoDB, and Pinecone vector database. Implemented semantic search pipelines using OpenAI embeddings for improved lead targeting.",
    image: "",
    technologies: ["Next.js", "AWS Lambda", "DynamoDB", "Pinecone", "OpenAI"],
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    category: "Consumer Product",
    title: "SurfMongers",
    description: "Light-up wake surf product line creating a visible surf experience. Built go-to-market strategy, crowdfunding campaign, and investor structure.",
    longDescription: "Co-founded a consumer product startup developing light-up wake surf products. Led product development from prototyping to manufacturing, built go-to-market strategy, and structured the company with partners and investors.",
    image: "",
    technologies: ["Product Development", "Crowdfunding", "Go-to-Market", "Hardware"],
    featured: true,
    status: "in-progress"
  },
  {
    id: 4,
    category: "Data & AI",
    title: "AI Analysis Modules",
    description: "Generative AI models providing real-time analysis, insights, and automated actions for enterprise users at Soar.",
    longDescription: "Engineered Python ML modules used daily by customers. Built repeatable AI modules for organizational training that leverage generative AI for real-time information processing.",
    image: "",
    technologies: ["Python", "Machine Learning", "Gen AI", "Data Pipelines"],
    featured: true,
    status: "completed"
  },
  {
    id: 5,
    category: "Investment",
    title: "Startup Due Diligence",
    description: "Financial modeling and investment analysis for deep tech and life sciences startups at Utah Innovation Fund.",
    image: "",
    technologies: ["Financial Modeling", "Market Analysis", "Due Diligence"],
    featured: false,
    status: "completed"
  },
  {
    id: 6,
    category: "Data",
    title: "Executive Dashboards",
    description: "Data dashboards and visualization tools for CEO-level decision making at Brandless, a healthcare technology startup.",
    image: "",
    technologies: ["Sigma", "Python", "SQL", "Data Viz"],
    featured: false,
    status: "completed"
  }
];
