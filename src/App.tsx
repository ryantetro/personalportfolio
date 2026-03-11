import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import BlogPostPage from './pages/BlogPost';
import './styles/input.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/project/:slug" element={<Navigate to="/" replace />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
