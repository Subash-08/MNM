import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import AboutUs from "./components/sections/AboutUs";
import WorkingProcess from "./components/sections/WorkingProcess";
import HowItWorks from "./components/sections/HowItWorks";
import Services from "./components/sections/Services";
import Industries from "./components/sections/Industries";
import ReturnCalculator from "./components/sections/ReturnCalculator";
import BusinessLogic from "./components/sections/BusinessLogic";
import TransparencyDashboard from "./components/sections/TransparencyDashboard";
import ContributionTiers from "./components/sections/ContributionTiers";
import SocialProof from "./components/sections/SocialProof";
import BlogNews from "./components/sections/BlogNews";
import FAQ from "./components/sections/FAQ";
import ContactCTA from "./components/sections/ContactCTA";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import { Toaster } from "sonner";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div>
      < Header onRegisterClick={handleRegisterClick} />

      <main>
        <Hero />
        <Partners />
        <AboutUs />
        <HowItWorks />
        <Services />
        <WorkingProcess />
        <TransparencyDashboard />
        <SocialProof />
        <BlogNews />
        <FAQ />
      </main>

      <ContactCTA />
      <Footer />

      <RegistrationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <Toaster position="top-center" richColors />
    </div >
  );
}
