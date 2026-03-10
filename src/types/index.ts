// Core types for the AI Portfolio

export interface Profile {
  name: string;
  age: number;
  location: string;
  role: string;
  bio: string;
  tags: string[];
  education: string;
  work: string;
  avatar?: string;
  availability?: {
    status: 'available' | 'busy' | 'open';
    message: string;
  };
}

export interface ProjectCaseStudyData {
  problem: string;
  approach: string;
  solution: string;
  results?: { metric: string; label: string }[];
  techDecisions?: { title: string; description: string }[];
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  status?: 'completed' | 'in-progress' | 'planned';
  slug?: string;
  caseStudy?: ProjectCaseStudyData;
}

export interface Skills {
  [category: string]: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  social: SocialLink[];
  availability: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
  toolCalls?: ToolCall[];
}

export interface ToolCall {
  id: string;
  type: string;
  function: {
    name: string;
    arguments: string;
  };
}

export interface ToolFunction {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: Record<string, any>;
    required: string[];
  };
}

export interface AITool {
  type: 'function';
  function: ToolFunction;
}

export interface FunContent {
  title: string;
  description: string;
  image?: string;
  video?: string;
  achievements: string[];
  hobbies: string[];
  personality: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export interface SkillCategoryProps {
  category: string;
  skills: string[];
  icon?: React.ReactNode;
}

// Store types
export interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  sendMessage: (content: string) => Promise<void>;
  clearHistory: () => void;
  setLoading: (loading: boolean) => void;
}

export interface UIStore {
  currentSection: string;
  isNavbarVisible: boolean;
  setCurrentSection: (section: string) => void;
  setNavbarVisible: (visible: boolean) => void;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export interface ScrollAnimationConfig extends AnimationConfig {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
}

// API types
export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
      tool_calls?: ToolCall[];
    };
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ToolResponse {
  tool_call_id: string;
  name: string;
  content: string;
}

// Utility types
export type SectionType = 'hero' | 'me' | 'projects' | 'skills' | 'fun' | 'contact';

export type QuickActionType = 'me' | 'projects' | 'skills' | 'fun' | 'contact';

export interface QuickAction {
  type: QuickActionType;
  label: string;
  icon: React.ReactNode;
  description: string;
}

// Error types
export interface APIError {
  message: string;
  code?: string;
  status?: number;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Theme types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    glass: {
      background: string;
      border: string;
    };
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  animations: {
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}

// Blog types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string;
}
