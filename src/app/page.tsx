"use client";
import Navbar from "@/app/component/Navbar";
import HeroSection from "./component/HeroSection";
import TrustedCompanies from './component/TrustedCompanies';
import Services from "./component/Services";
import CTASection from "./component/CTAsection";
import CaseStudies from "./component/CaseStudies";
import TeamSection from "./component/TeamSection";
import WorkingAccordion from "./component/WorkingAccordion";
import Testimonials from "./component/Testimonial";
// import Footer from "./component/Footer";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./component/ContactForm"), {
  ssr: false,
});
const Footer = dynamic(() => import("./component/Footer"), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedCompanies/>
      <Services />
      <CTASection />
      <CaseStudies />
      <WorkingAccordion/>
      <TeamSection/>
      <Testimonials/>
      <ContactForm />
      <Footer />
    </div>
  );
}
