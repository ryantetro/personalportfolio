import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import BlogPostPage from './pages/BlogPost';
import './styles/input.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectCaseStudy />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
