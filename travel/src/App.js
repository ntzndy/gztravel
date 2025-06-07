import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import CultureHome from './pages/home/CultureHome';
import CommunityHome from './pages/community/Home';
import Profile from './pages/profile/Profile';
import Publish from './pages/pubulish/Publish';
import GuideService from './pages/guide/GuideService';
import AttractionDetail from './pages/home/AttractionDetail';
import FootballDetail from './pages/home/FootballDetail';
import CultureDetail from './pages/home/CultureDetail';
import PostDetail from './pages/post/PostDetail';
import OrderDetail from './pages/order/OrderDetail';
import GuideDetail from './pages/guide/GuideDetail';
import CommunityPostDetail from './pages/post/PostDetail';
import UserProfile from './pages/community/UserProfile';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CultureHome />} />
            <Route path="/community" element={<CommunityHome />} />
            <Route path="/guides" element={<GuideService />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/attraction/:id" element={<AttractionDetail />} />
            <Route path="/football/:id" element={<FootballDetail />} />
            <Route path="/culture/:id" element={<CultureDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/guide/:id" element={<GuideDetail />} />
            <Route path="/user/:userName" element={<UserProfile />} />
          </Routes>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App; 