import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import EnquiryModal from "./components/EnquiryModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Scroll to top on route change, unless there is a hash fragment
    if (!window.location.hash) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={() => setIsModalOpen(true)} />} />
          <Route path="/domain/:id" element={<DomainPage onOpenEnquiry={() => setIsModalOpen(true)} />} />
        </Routes>
      </main>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
