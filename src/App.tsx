import { Route, Routes } from 'react-router-dom';
import { ScrollToHash } from './components/ScrollToHash';
import FooterSection from './components/ui/footer';
import { SiteNavbar } from './components/SiteNavbar';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="skip-link pointer-events-none fixed left-4 top-4 z-[100] rounded-full bg-frost px-5 py-3 font-sans text-xs font-bold uppercase leading-none text-ink opacity-0 outline-none transition focus:pointer-events-auto focus:opacity-100"
      >
        Перейти к содержанию
      </a>
      <ScrollToHash />
      <SiteNavbar />
      <main id="content" className="site-background-surface min-h-screen overflow-x-clip">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FooterSection />
    </>
  );
}
