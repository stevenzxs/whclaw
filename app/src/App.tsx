import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { siteConfig } from './config';
import Navigation from './sections/Navigation';
import SlimHero from './sections/SlimHero';
import ProductFeed from './sections/ProductFeed';
import Footer from './sections/Footer';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => (
  <>
    <SlimHero />
    <ProductFeed />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
