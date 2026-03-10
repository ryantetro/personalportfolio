# AI-Powered Portfolio

A modern, interactive portfolio website built with React, TypeScript, Tailwind CSS, and OpenAI integration. Features glassmorphism design, AI chat functionality, and smooth animations.

## 🚀 Features

- **AI Chat Interface**: Interactive chat powered by OpenAI GPT-4 with function calling
- **Glassmorphism Design**: Modern UI with backdrop blur effects and transparency
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: GSAP-powered animations and micro-interactions
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: React 18, Vite, Tailwind CSS, Zustand

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand
- **AI Integration**: OpenAI API with function calling
- **Animations**: GSAP
- **Icons**: Lucide React
- **Styling**: Custom glassmorphism utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personalportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   VITE_APP_NAME=AI Portfolio
   VITE_APP_URL=https://yourportfolio.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### OpenAI API Setup

1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to your `.env` file as `VITE_OPENAI_API_KEY`
3. The AI will use function calling to access your portfolio data

### Customizing Content

Edit the data files in `src/data/` to personalize your portfolio:

- `profile.ts` - Personal information and bio
- `projects.ts` - Project showcase
- `skills.ts` - Technical skills by category
- `social.ts` - Contact information and social links
- `experience.ts` - Work experience and fun facts

### Styling

The design system uses Tailwind CSS with custom glassmorphism utilities:

- `.glass-card` - Semi-transparent cards with backdrop blur
- `.glass-nav` - Navigation bar with glass effect
- Custom colors and animations defined in `tailwind.config.js`

## 🎨 Design Features

### Glassmorphism Effects
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Hover animations and micro-interactions

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Flexible grid layouts

### Animations
- GSAP-powered scroll animations
- Staggered entrance effects
- Smooth transitions and hover states

## 🤖 AI Chat Features

The AI chat system includes:

- **Function Calling**: AI can access specific portfolio data
- **Tool Functions**:
  - `getPresentation()` - Personal info and bio
  - `getProjects()` - Project showcase
  - `getSkills()` - Technical skills
  - `getCrazy()` - Fun facts and hobbies
  - `getContact()` - Contact information

- **Rich Responses**: Formatted text with links and styling
- **Context Awareness**: Maintains conversation history

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Navbar.tsx    # Navigation component
│   ├── Footer.tsx    # Footer component
│   └── ChatInterface.tsx
├── sections/
│   └── Hero.tsx      # Landing section
├── services/
│   └── openai.ts     # AI integration
├── store/
│   └── chatStore.ts  # State management
├── data/             # Portfolio content
├── types/            # TypeScript definitions
├── styles/           # Global styles
└── utils/            # Utility functions
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder to your hosting provider

3. Configure environment variables on your hosting platform

## 🔒 Security Notes

- **API Key**: Never commit your `.env` file to version control
- **Client-side**: This setup uses client-side API calls for simplicity
- **Production**: Consider using a backend proxy for API calls in production

## 🎯 Customization Guide

### Adding New Sections

1. Create a new component in `src/sections/`
2. Add it to the main App component
3. Update the AI tools if needed

### Modifying AI Responses

Edit the tool functions in `src/services/openai.ts` to customize how the AI responds to different queries.

### Styling Changes

- Modify `tailwind.config.js` for design system changes
- Update `src/styles/input.css` for global styles
- Use the existing glassmorphism utilities for consistency

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have questions or need help:

1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub

---

**Built with ❤️ using React, TypeScript, and OpenAI**
