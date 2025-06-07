import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import CultureHome from './pages/home/CultureHome';
import Home from './pages/comment/Home';
import Profile from './pages/profile/Profile';
import Publish from './pages/pubulish/Publish';
import GuideService from './pages/guide/GuideService';
import AttractionDetail from './pages/home/AttractionDetail';
import FootballDetail from './pages/home/FootballDetail';
import CultureDetail from './pages/home/CultureDetail';
<<<<<<< HEAD
import PostDetail from './pages/comment/PostDetail';
import UserProfile from './pages/comment/UserProfile';
import GuideDetail from './pages/guide/GuideDetail';
=======
import PostDetail from './pages/post/PostDetail';
import OrderDetail from './pages/order/OrderDetail';
>>>>>>> feature/new-branch
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main-content">
<<<<<<< HEAD
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Routes location={location}>
                <Route path="/" element={<CultureHome />} />
                <Route path="/community" element={<Home />} />
                <Route path="/guides" element={<GuideService />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/publish" element={<Publish />} />
                <Route path="/attraction/:id" element={<AttractionDetail />} />
                <Route path="/football/:id" element={<FootballDetail />} />
                <Route path="/culture/:id" element={<CultureDetail />} />
                <Route path="/community/:postId" element={<PostDetail />} />
                <Route path="/user/:userName" element={<UserProfile />} />
                <Route path="/guide/:id" element={<GuideDetail />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
=======
          <Routes>
            <Route path="/" element={<CultureHome />} />
            <Route path="/community" element={<Home />} />
            <Route path="/guides" element={<GuideService />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/attraction/:id" element={<AttractionDetail />} />
            <Route path="/football/:id" element={<FootballDetail />} />
            <Route path="/culture/:id" element={<CultureDetail />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/order/:id" element={<OrderDetail />} />
          </Routes>
>>>>>>> feature/new-branch
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App; 