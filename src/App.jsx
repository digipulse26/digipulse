import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services').then(m => ({ default: m.ServicesPage })));
const ServiceDetail = lazy(() => import('./pages/Services').then(m => ({ default: m.ServiceDetail })));
const PortfolioPage = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.PortfolioPage })));
const PortfolioDetail = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.PortfolioDetail })));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
import { useRevealAll } from './hooks';

function Shell() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  // Panggil setelah halaman baru dirender
  useRevealAll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main key={pathname} className="page-enter">
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/layanan/:slug" element={<ServiceDetail />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/portofolio/:slug" element={<PortfolioDetail />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return <BrowserRouter basename={basename}><Shell /></BrowserRouter>;
}
