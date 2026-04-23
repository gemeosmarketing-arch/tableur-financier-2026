import { HeroSection } from './components/landing/HeroSection';
import { ProblemSection } from './components/landing/ProblemSection';
{/*import { MindsetSection } from './components/landing/MindsetSection'; */}
import { SolutionSection } from './components/landing/SolutionSection';
import { OfferSection } from './components/landing/OfferSection';
{/* import { AudienceSection } from './components/landing/AudienceSection'; */}
import { GuaranteeSection } from './components/landing/GuaranteeSection';
import { FAQSection } from './components/landing/FAQSection';
{/* import { FinalCTASection } from './components/landing/FinalCTASection'; />*/}
import { FooterSection } from './components/landing/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <HeroSection />
      <ProblemSection />
    {/*  <MindsetSection />*/}
      <SolutionSection />
      <OfferSection />
      <GuaranteeSection />
    {/*  <AudienceSection /> */}
      <FAQSection />
    {/*  <FinalCTASection />*/}
      <FooterSection />
    </div>
  );
}

export default App;
