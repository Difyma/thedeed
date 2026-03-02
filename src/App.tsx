import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CustomDevelopmentGuide from './components/articles/CustomDevelopmentGuide';
import BusinessAutomationGuide from './components/articles/BusinessAutomationGuide';
import CustomVsReadyComparison from './components/articles/CustomVsReadyComparison';
import ContractorSelectionGuide from './components/articles/ContractorSelectionGuide';
import LogisticsCaseStudy from './components/articles/LogisticsCaseStudy';
import DevelopmentCostGuide from './components/articles/DevelopmentCostGuide';
import AIBusinessApplications from './components/articles/AIBusinessApplications';
import AIBusinessGuide2025 from './components/articles/AIBusinessGuide2025';
import TechnicalSpecificationGuide from './components/articles/TechnicalSpecificationGuide';
import PrivacyPolicy from './components/PrivacyPolicy';
import WebDevelopmentService from './components/services/WebDevelopmentService';
import MobileDevelopmentService from './components/services/MobileDevelopmentService';
import BackendDevelopmentService from './components/services/BackendDevelopmentService';
import CloudSolutionsService from './components/services/CloudSolutionsService';
import AutomationService from './components/services/AutomationService';
import ScrollToTop from './components/ScrollToTop';

// Глобальный контекст и модальное окно
import { ModalProvider, useModal } from './context/ModalContext';
import LeadFormModal from './components/LeadFormModal';
// Компонент для централизованной инициализации AOS
import AOSProvider from './components/AOSProvider';

// Компонент главной страницы
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 flex flex-col flex-grow">
      <div className="flex-grow">
        <Header />
        <section id="hero" className="py-20 bg-white" data-aos="fade-up">
          <Hero />
        </section>
        <Services />
        <section id="portfolio" className="py-20 bg-white" data-aos="fade-up">
          <Portfolio />
        </section>
        <section id="technologies" className="py-20 bg-white" data-aos="fade-up">
          <Technologies />
        </section>
        <section id="about" className="py-20 bg-white" data-aos="fade-up">
          <About />
        </section>
        <section id="contact" className="py-20 bg-white" data-aos="fade-up">
          <Contact />
        </section>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

// Глобальный рендер модального окна заявки (доступен на всех маршрутах)
const GlobalLeadForm: React.FC = () => {
  const { isModalOpen, modalSource, closeModal } = useModal();
  return (
    <LeadFormModal
      isOpen={isModalOpen}
      onClose={closeModal}
      source={modalSource}
    />
  );
};

function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <AOSProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service/web-development" element={<WebDevelopmentService />} />
              <Route path="/service/mobile-development" element={<MobileDevelopmentService />} />
              <Route path="/service/backend-development" element={<BackendDevelopmentService />} />
              <Route path="/service/cloud-solutions" element={<CloudSolutionsService />} />
              <Route path="/service/automation" element={<AutomationService />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/custom-development-guide-2025" element={<CustomDevelopmentGuide />} />
              <Route path="/blog/business-automation-guide-2025" element={<BusinessAutomationGuide />} />
              <Route path="/blog/custom-vs-ready-comparison-2025" element={<CustomVsReadyComparison />} />
              <Route path="/blog/contractor-selection-guide-2025" element={<ContractorSelectionGuide />} />
              <Route path="/blog/logistics-case-study-2025" element={<LogisticsCaseStudy />} />
              <Route path="/blog/development-cost-guide-2025" element={<DevelopmentCostGuide />} />
              <Route path="/blog/ai-business-applications-2025" element={<AIBusinessApplications />} />
              <Route path="/blog/ai-business-guide-2025" element={<AIBusinessGuide2025 />} />
              <Route path="/blog/technical-specification-guide-2025" element={<TechnicalSpecificationGuide />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            {/* Глобальное модальное окно доступно на всех страницах */}
            <GlobalLeadForm />
          </BrowserRouter>
        </AOSProvider>
      </ModalProvider>
    </HelmetProvider>
  );
}

export default App;
